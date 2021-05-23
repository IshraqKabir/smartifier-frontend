import withPost from "../middleware/withPost";

import cookie from "cookie";
import backendEmailSignin from "../methods/backendEmailSignin";

const api = async (req, res) => {
    const { body } = req;
    const { email, password } = body;

    const { response: user, success, error } = await backendEmailSignin(email, password);

    if (success == false) {
        return res.status(200).json({ success: false, error: error });
    }

    res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", user?.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            path: "/"
        })
    );

    // delete user["token"];

    return res.status(200).json({
        success: true,
        user: user
    });
}

export default withPost(api);
