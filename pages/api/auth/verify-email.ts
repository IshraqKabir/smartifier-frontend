import withPost from "../middleware/withPost";

import cookie from "cookie";
import backendVerifyEmail from "../methods/backendVerifyEmail";

const api = async (req, res) => {
    const { body } = req;
    const { email, password, code } = body;

    const { response: user, success, error } = await backendVerifyEmail(email, password, code);

    if (success == false) {
        return res.status(200).json({ success: false, error: error })
    }

    if (success && user?.verified) {
        res.setHeader(
            "Set-Cookie",
            cookie.serialize("token", user?.token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                sameSite: "strict",
                path: "/"
            })
        );
    }

    // delete user["token"];

    return res.status(200).json({
        success: true,
        response: user
    });
}

export default withPost(api);