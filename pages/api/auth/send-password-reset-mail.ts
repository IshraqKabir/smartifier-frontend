import backendSendPasswordResetMail from "../methods/backendSendPasswordResetMail";
import withPost from "../middleware/withPost";

const api = async (req, res) => {
    const { email } = req.body;

    const { success, response, error } = await backendSendPasswordResetMail(email);

    if (success == false) {
        return res.status(200).json({ success: false, error: error })
    }

    return res.status(200).json({
        success: true,
        response: response
    });
}

export default withPost(api);