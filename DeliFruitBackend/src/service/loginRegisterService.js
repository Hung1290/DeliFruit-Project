import bcrypt from 'bcryptjs';
import db from '../models/index'
require('dotenv').config()

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword
}

const checkPhoneExist = async (phone) => {
    let user = await db.User.findOne({
        where: { phone }
    })
    if (user) {
        return true
    }
    return false
}

const checkUsernameExist = async (username) => {
    let user = await db.User.findOne({
        where: { username }
    })
    if (user) {
        return true
    }
    return false
}

const registerNewUser = async (rawUserData) => {
    try {
        let isPhoneExist = await checkPhoneExist(rawUserData.phone)
        if (isPhoneExist === true) {
            return {
                EM: 'The phone number is already exist',
                EC: 1
            }
        }
        let isUsernameExist = await checkUsernameExist(rawUserData.username)
        if (isUsernameExist === true) {
            return {
                EM: 'The username is already exist',
                EC: 1
            }
        }
        let hashPassword = hashUserPassword(rawUserData.password)

        await db.User.create({
            username: rawUserData.username,
            address: rawUserData.address,
            phone: rawUserData.phone,
            password: hashPassword
        })

        return {
            EM: 'A user is created successfully!',
            EC: 0
        }
    } catch (error) {
        return {
            EM: 'Something wrongs in service...',
            EC: -2
        }
    }
}

const checkPassword = (inputPassword, hashPassword) => {
    return bcrypt.compareSync(inputPassword, hashPassword)
}

const handleUserLogin = async (rawData) => {
    try {
        let user = await db.User.findOne({
            where: {
                username: rawData.valueLogin
            }
        })

        if (user) {
            let isCorrectPassword = checkPassword(rawData.password, user.password)
            if (isCorrectPassword === true) {
                return {
                    EM: 'Ok!',
                    EC: 0,
                    DT: {
                        id: user.id,
                        username: user.username,
                        address: user.address,
                        phone: user.phone
                    }
                }
            }
        }

        return {
            EM: 'Your username or password is incorrect!',
            EC: 1,
            DT: ''
        }
    } catch (error) {
        return {
            EM: 'Something wrongs in service...',
            EC: -2,
            DT: ''
        }
    }
}

module.exports = {
    registerNewUser, handleUserLogin, hashUserPassword, checkPhoneExist
}