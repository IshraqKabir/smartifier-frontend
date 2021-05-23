import { useFormik } from "formik";
import { useState } from "react";
import emailSignin from "../../repository/Auth/emailSignIn";
import emailSignup from "../../repository/Auth/emailSignup";
import resetPassword from "../../repository/Auth/resetPassword";
import sendEmailVerificationMail from "../../repository/Auth/sendEmailVerificationMail";
import sendPasswordResetmail from "../../repository/Auth/sendPasswordResetMail";
import verifyEmail from "../../repository/Auth/verifyEmail";

export type Tab =
  | "signin"
  | "signup"
  | "verify_email"
  | "forgot_password"
  | "reset_password";

const ERROR_ALERT = "Something went wrong. Please Try again.";

export default function useAuthModal(
  setUser: (user: any) => void,
  closeModal: () => void
) {
  const [currentTab, setCurrentTabState] = useState<Tab>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userAlreadyExists, setUserAlreadyExists] = useState<boolean>(false);

  const [signinTabError, setSigninTabError] =
    useState<"" | "Invalid Credentials" | "Email Not Found. Please Register.">(
      ""
    );

  const [verifyEmailTabError, setVerifyEmailTabError] = useState("");

  const [forgotPasswordTabError, setForgotPasswordTabError] = useState("");

  const [resetPasswordTabError, setResetPasswordTabError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const setCurrentTab = (tab: Tab) => {
    if (isLoading) return;
    setCurrentTabState(tab);
  };

  const signinFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: signinValidate,
    onSubmit: async (values) => {
      if (isLoading) return;

      setIsLoading(true);

      const user = await emailSignin(values.email, values.password);

      setIsLoading(false);

      if (user?.user == "invalid_credentials") {
        setSigninTabError("Invalid Credentials");
        return;
      } else if (user?.user == "user_not_found") {
        setSigninTabError("Email Not Found. Please Register.");
        return;
      } else if (user?.user == "unauthorized") {
        alert(ERROR_ALERT);
        return;
      } else if (user?.user == "not_verified") {
        goToVerifyEmailTab(values.email, values.password);
        return;
      }

      if (user?.success) {
        setUser(user?.user);
        return;
      } else {
        alert(ERROR_ALERT);
        return;
      }
    },
  });

  const goToVerifyEmailTab = (email: string, password: string) => {
    if (isLoading) return;
    setEmail(email);
    setPassword(password);
    setCurrentTab("verify_email");
  };

  const goToResetPasswordTab = (email: string) => {
    if (isLoading) return;
    setEmail(email);
    setCurrentTab("reset_password");
  };

  const signupFormik = useFormik({
    initialValues: {
      email: "",
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
        email: values.email,
        name: values.name,
        company_name: values.companyName,
        club_name: values.clubName,
        contact_number: values.contactNumber,
        password: values.password,
        confirm_password: values.confirmPassword,
      };

      setIsLoading(true);

      const response = await emailSignup(data);

      setIsLoading(false);

      if (!response.success) {
        alert("Some went wrong. Please try again.");
        return;
      }

      if (response?.response == "user_not_created") {
        alert("Some went wrong. Please try again.");
        return;
      }

      if (response?.response == "user_already_exists") {
        setUserAlreadyExists(true);
        return;
      }

      if (response?.response == "not_verified") {
        goToVerifyEmailTab(values.email, values.password);
        return;
      }

      alert("Something went wrong. Please try again.");
    },
  });

  const verifyEmailFormik = useFormik({
    initialValues: {
      code: "",
    },
    validate: verifyEmailValidate,
    onSubmit: async (values) => {
      if (isLoading) return;

      setIsLoading(true);

      const { response } = await verifyEmail(email, password, values.code);

      setIsLoading(false);

      if (!response?.verified) {
        if (response?.status == "invalid_code") {
          console.log("yay");
          setVerifyEmailTabError("Code did not match!");
          return;
        }

        if (response?.status == "time_over") {
          setVerifyEmailTabError(
            `Time over! We have senet the verification code to your mail, ${email}. Please enter it again.`
          );
          verifyEmailFormik.resetForm();
          return;
        }

        if (response?.status == "code_not_set") {
          setCurrentTab("signin");
          alert("Please login again!");
          return;
        }

        return;
      }

      setUser(response?.user);
    },
  });

  const forgotPasswordFormik = useFormik({
    initialValues: {
      email: "",
    },
    validate: verifyForgotPassword,
    onSubmit: async (values) => {
      if (isLoading) return;

      setIsLoading(true);

      const { success, response } = await sendPasswordResetmail(values.email);

      setIsLoading(false);

      if (!success) {
        alert("Some went wrong. Please try again.");
        return;
      }

      if (response == "user_not_found") {
        setForgotPasswordTabError(
          "Email not found. Please make sure you have already registered your email with us."
        );
        return;
      }

      if (response == "sent") {
        goToResetPasswordTab(values.email);
        return;
      }
    },
  });

  const resetPasswordFormik = useFormik({
    initialValues: {
      code: "",
      password: "",
      confirmPassword: "",
    },
    validate: verifyResetPassword,
    onSubmit: async (values) => {
      if (isLoading) return;

      setIsLoading(true);

      const { response, success } = await resetPassword(
        email,
        values.code,
        values.password,
        values.confirmPassword
      );

      setIsLoading(false);

      if (!success) {
        alert("Some went wrong. Please try again.");
        return;
      }

      if (response == "user_not_found") {
        setResetPasswordTabError(
          "Email not found. Please make sure you have already registered your email with us."
        );
        return;
      }

      if (response == "invalid_code") {
        setResetPasswordTabError("Invalid Verification Code.");
        return;
      }

      if (response == "time_over") {
        setResetPasswordTabError(
          "Your verification code has expired. We have sent another verficiation code to your email."
        );
        return;
      }

      if (
        response == "something_went_wrong" ||
        response == "code_not_set"
      ) {
        alert(ERROR_ALERT);
        setCurrentTab("signin");
        return;
      }

      if (response == "password_changed") {
        alert("Success!");
        setCurrentTab("signin");
        return;
      }
    },
  });

  const resendEmailVerifyMail = (email: string, password: string) => {
    if (isLoading) return;
    sendEmailVerificationMail(email, password);
  };

  const resendPasswordResetMail = (email: string) => {
    if (isLoading) return;
    if (currentTab !== "reset_password") return;

    sendPasswordResetmail(email);
  };

  return {
    currentTab,
    setCurrentTab,
    signinFormik,
    email,
    password,
    signupFormik,
    userAlreadyExists,
    verifyEmailFormik,
    forgotPasswordFormik,
    resetPasswordFormik,
    signinTabError,
    verifyEmailTabError,
    forgotPasswordTabError,
    resetPasswordTabError,
    resendPasswordResetMail,
    resendEmailVerifyMail,
    isLoading,
  };
}

function signinValidate(values: any) {
  const errors: any = {};

  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Format.";
  }

  if (!values.password || values.password?.length < 8) {
    errors.password = "Password has to be atleast 8 characters long.";
  }

  return errors;
}

function signupValidate(values: any) {
  const errors: any = {};

  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Format.";
  }

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

const verifyEmailValidate = (values) => {
  const errors: any = {};

  if (!values.code) {
    errors.code = `Verification code cannot be empty.`;
  }

  return errors;
};

const verifyForgotPassword = (values) => {
  const errors: any = {};

  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Format.";
  }

  return errors;
};

function verifyResetPassword(values: any) {
  const errors: any = {};

  if (!values.code) {
    errors.code = `Verification code cannot be empty.`;
  }

  if (!values.password || values.password?.length <= 8) {
    errors.password = "Password has to be atleast 8 characters long.";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password can not be empty.";
  } else if (values.confirmPassword != values.password) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
}
