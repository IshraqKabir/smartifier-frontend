import withPost from "../middleware/withPost";

import cookie from "cookie";

const api = async (req, res) => {

    res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            expires: new Date(0),
            sameSite: "strict",
            path: "/"
        })
    )

    return res.status(200).json({ success: true })
}

export default withPost(api);