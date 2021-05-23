import { useFormik } from "formik";
import { useEffect, useState } from "react";
import getGoogleUser from "../../repository/Auth/Google/getGoogleUser";
import googleSignin from "../../repository/Auth/Google/googleSignin";
import googleSignup from "../../repository/Auth/googleSignup";

export default function useGoogle(code: string | string[], setUser: (user: any) => void) {
    const [idToken, setIdToken] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [showSignupForm, setShowSignupForm] = useState(false)

    useEffect(() => {
        if (code) {
            login(code);
        }
    }, [code]);

    const login = async (code) => {
        // get google id token (code)
        const user = await getGoogleUser(code);
        const id_token = user?.user?.data?.id_token;

        if (!id_token) {
            window.history.back();
            goBack();
            return;
        }

        setIdToken(id_token);

        const { response } = await googleSignin(id_token)

        if (!response?.success) {
            goBack();
            return;
        }

        if (response?.response == "user_not_found") {
            setShowSignupForm(true)
            return;
        }

        if (response?.response) {
            setUser(response?.response);
            window.location.replace("/")
        }
    }

    const signupFormik = useFormik({
        initialValues: {
            name: "",
            companyName: "",
            clubName: "",
            contactNumber: "880",
            password: "",
            confirmPassword: "",
        },
        validate: signupValidate,
        onSubmit: async (values) => {
            if (isLoading) return;

            const data = {
                id_token: idToken,
                name: values.name,
                company_name: values.companyName,
                club_name: values.clubName,
                contact_number: values.contactNumber,
                password: values.password,
                confirm_password: values.confirmPassword,
            };

            setIsLoading(true);

            const { response } = await googleSignup(data);

            setIsLoading(false);

            if (!response.success || response?.response == "user_not_created") {
                alert("Some went wrong. Please try again.");
                return;
            }

            setUser(response?.response);
            window.location.replace("/")
        },
    });

    const goBack = () => {
        window.history.back();
    }


    return {
        isLoading,
        showSignupForm,
        signupFormik
    }
}

function signupValidate(values: any) {
    const errors: any = {};

    if (!values.password || values.password?.length < 8) {
        errors.password = "Password has to be atleast 8 characters long.";
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = "Confirm password can not be empty.";
    } else if (values.confirmPassword != values.password) {
        errors.confirmPassword = "Passwords do not match.";
    }

    const FULL_NAME_LENGTH = 8;
    if (!values.name || values.name?.length <= FULL_NAME_LENGTH) {
        errors.name = `Full Name has to be atleast ${FULL_NAME_LENGTH} characters long.`;
    }

    if (!values.companyName) {
        errors.companyName = `Company name cannot be empty.`;
    }

    if (!values.clubName) {
        errors.clubName = `Club name cannot be empty.`;
    }

    if (!values.contactNumber) {
        errors.contactNumber = `Phone number can not be empty.`;
    }

    if (values.contactNumber.length != 13) {
        errors.contactNumber = `Invalid phone number.`;
    }

    return errors;
}
