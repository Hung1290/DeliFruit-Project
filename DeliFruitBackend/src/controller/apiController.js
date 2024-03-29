import loginRegisterService from '../service/loginRegisterService'

const testApi = (req, res) => {
    return res.status(200).json({
        message: "ok",
        data: "test api"
    })
}

const handleRegister = async (req, res) => {
    try {
        if (!req.body.username || !req.body.address || !req.body.phone || !req.body.password) {
            return res.status(200).json({
                EM: 'Missing required parameters!',
                EC: '1',
                DT: ''
            })
        }
        if (req.body.password && req.body.password.length < 4) {
            return res.status(200).json({
                EM: 'Your password must have more than 3 letters!',
                EC: '1',
                DT: ''
            })
        }

        let data = await loginRegisterService.registerNewUser(req.body)

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: ''
        })
    } catch (error) {
        return res.status(500).json({
            EM: 'Error from server',
            EC: '-1',
            DT: ''
        })
    }
}

const handleLogin = async (req, res) => {
    try {
        let data = await loginRegisterService.handleUserLogin(req.body)

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        return res.status(500).json({
            EM: 'Error from server',
            EC: '-1',
            DT: ''
        })
    }
}

module.exports = {
    testApi, handleRegister, handleLogin
}