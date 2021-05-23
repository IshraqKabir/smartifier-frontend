import backendRestPassword from "../methods/backendRestPassword";
import withPost from "../middleware/withPost";

const api = async (req, res) => {
    const { email, code, password, confirmPassword } = req.body;

    const { success, response, error } = await backendRestPassword(email, code, password, confirmPassword);

    if (success == false) {
        return res.status(200).json({ success: false, error: error })
    }

    return res.status(200).json({
        success: true,
        response: response
    });
}

export default withPost(api);