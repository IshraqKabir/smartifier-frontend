import backendSendEmailVerificationMail from "../methods/backendSendEmailVerificationMail";
import withPost from "../middleware/withPost";

const api = async (req, res) => {
    const { email, password } = req.body;

    const { success, response, error } = await backendSendEmailVerificationMail(email, password);

    if (success == false) {
        return res.status(200).json({ success: false, error: error })
    }

    return res.status(200).json({
        success: true,
        response: response
    });
}

export default withPost(api);