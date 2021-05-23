import withPost from "../middleware/withPost";

import cookie from "cookie";
import backendGoogleSignup from "../methods/backendGoogleSignup";

const api = async (req, res) => {
    const { body } = req;

    const userData = await backendGoogleSignup(body);

    if (userData?.success == false) {
        return res.status(200).json({ success: false, message: userData })
    }

    res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", userData?.response?.token?.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            path: "/"
        })
    );

    delete userData["token"];

    return res.status(200).json({
        success: true,
        response: userData
    });
}

export default withPost(api);