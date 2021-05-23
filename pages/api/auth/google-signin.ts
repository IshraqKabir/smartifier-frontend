import backendGoogleSignin from "../methods/backendGoogleSignin";
import withPost from "../middleware/withPost";

import cookie from "cookie";

const api = async (req, res) => {
    const { body } = req;
    const { id_token } = body;

    const { success, response: user, error } = await backendGoogleSignin(id_token);

    if (success == false) {
        return res.status(200).json({ success: false, message: error })
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

    // delete userData["token"];

    return res.status(200).json({
        success: true,
        response: user
    });
}

export default withPost(api);