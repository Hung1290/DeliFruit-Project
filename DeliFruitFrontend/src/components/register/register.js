import './register.scss'
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { createNewUser } from '../../redux/actions/userActions';

const Register = () => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const defaultValidInput = {
        isValidUsername: true,
        isValidAddress: true,
        isValidPhone: true,
        isValidPassword: true,
        isValidConfirmPassword: true,
    }
    const [objCheckInput, setObjCheckInput] = useState(defaultValidInput)

    let history = useHistory();

    const handleLogin = () => {
        history.push('/login')
    }

    const isValidInput = () => {
        setObjCheckInput(defaultValidInput)
        if (!username) {
            setObjCheckInput({ ...defaultValidInput, isValidPhone: false })
            toast.error("Username is required!")
            return false
        }
        if (!address) {
            setObjCheckInput({ ...defaultValidInput, isValidPhone: false })
            toast.error("Address is required!")
            return false
        }
        if (!phone) {
            setObjCheckInput({ ...defaultValidInput, isValidPhone: false })
            toast.error("Phone is required!")
            return false
        }
        if (!password) {
            setObjCheckInput({ ...defaultValidInput, isValidPassword: false })
            toast.error("Password is required!")
            return false
        }
        if (password !== confirmPassword) {
            setObjCheckInput({ ...defaultValidInput, isValidConfirmPassword: false })
            toast.error("Your password is not the same!")
            return false
        }
        return true
    }

    const handleRegister = () => {
        let check = isValidInput()

        if (check === true) {
            dispatch(createNewUser(username, address, phone, password))
            history.push('/login')
        }
    }
    return (
        <div className="register-container">
            <div className='container pt-3'>
                <div className='row px-3 px-sm-0 d-flex justify-content-center align-items-center'>
                    <div className='right-content col-sm-5 col-12 d-flex flex-column gap-3 py-3'>
                        <input type='text' placeholder='Tên tài khoản' className='form-control'
                            value={username} onChange={(event) => setUsername(event.target.value)} />
                        <input type='text' placeholder='Địa chỉ' className='form-control'
                            value={address} onChange={(event) => setAddress(event.target.value)} />
                        <input type='text' placeholder='Số điện thoại' className='form-control'
                            value={phone} onChange={(event) => setPhone(event.target.value)} />
                        <input type='password' placeholder='Mật khẩu' className={objCheckInput.isValidPassword ? 'form-control' : 'form-control is-invalid'}
                            value={password} onChange={(event) => setPassword(event.target.value)} />
                        <input type='password' placeholder='Nhập lại mật khẩu' className={objCheckInput.isValidConfirmPassword ? 'form-control' : 'form-control is-invalid'}
                            value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                        <button className='btn btn-primary' onClick={() => handleRegister()}>Đăng ký</button>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleLogin()}>
                                Đã có tài khoản
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register