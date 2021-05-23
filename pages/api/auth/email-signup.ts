import backendEmailSignup from "../methods/backendEmailSignup";
import withPost from "../middleware/withPost";


const api = async (req, res) => {
    const { body } = req;

    const { response, success, error } = await backendEmailSignup(body);

    if (success == false) {
        return res.status(200).json({ success: false, error: error })
    }

    return res.status(200).json({
        success: true,
        response: response
    });
}

export default withPost(api);