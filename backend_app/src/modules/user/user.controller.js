export default (service) => {
    const userRegister = async (req, res, next) => {
        try {
            const data = await service.register(req.body);
            res.status(data.status).json({
                message: "Registration successful",
                data
            });
        } catch (error) {
            next(error);
        }
    }
    const userLogin = async (req, res, next) => {
        try {
            const data = await service.login(req.body);
            res.status(data.status).json({
                message: "Login successful",
                data
            });
        } catch (error) {
            next(error);
        }
    };

    return Object.freeze({
        userRegister,
        userLogin
    })
}