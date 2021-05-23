import backendGoogleSignin from "../methods/backendGoogleSignin";
import withPost from "../middleware/withPost";

import cookie from "cookie";

const api = async (req, res) => {
    const { body } = req;
    const { id_token } = body;

    const userData = await backendGoogleSignin(id_token);

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

    // delete userData["token"];
    userData["token"] = userData["token"]["token"]

    return res.status(200).json({
        success: true,
        response: userData
    });
}

export default withPost(api);