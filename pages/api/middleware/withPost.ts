const withPost = (handler) => {
    return async (req, res) => {
        const { method } = req;

        if (method !== 'POST') {
            return res.status(400).json({ success: false, message: "Only POST requests are allowed " })
        }

        return handler(req, res);
    }
}

export default withPost;