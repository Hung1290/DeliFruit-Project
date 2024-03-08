import { useEffect, useState } from 'react';
import './login.scss'
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/actions/userActions'

const Login = () => {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
    const [valueLogin, setValueLogin] = useState('')
    const [password, setPassword] = useState('')
    const defaultObjCheckInput = {
        isValidValueLogin: true,
        isValidPassword: true
    }
    const [objCheckInput, setObjCheckInput] = useState(defaultObjCheckInput)

    let history = useHistory();
    const handleRegister = () => {
        history.push('/register')
    }

    const isValidInput = () => {
        setObjCheckInput(defaultObjCheckInput)
        if (!valueLogin) {
            setObjCheckInput({ ...defaultObjCheckInput, isValidValueLogin: false })
            toast.error("Username is required!")
            return
        }
        if (!password) {
            setObjCheckInput({ ...defaultObjCheckInput, isValidPassword: false })
            toast.error("Password is required!")
            return
        }
    }

    const handleLogin = () => {
        isValidInput()
        dispatch(userLogin(valueLogin, password))
        history.push('/')
    }

    const handlePressEnter = (event) => {
        if (event.key === 'Enter') {
            handleLogin()
        }
    }

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/')
        }
    }, [])

    return (
        <div className="login-container ">
            <div className='container pt-3'>
                <div className='row px-3 px-sm-0 d-flex justify-content-center align-items-center'>
                    <div className='right-content col-sm-5 col-12 d-flex flex-column gap-3 py-3'>
                        <input
                            type='text'
                            placeholder='Tên tài khoản'
                            className={objCheckInput.isValidValueLogin ? 'form-control' : 'form-control is-invalid'}
                            value={valueLogin}
                            onChange={(event) => setValueLogin(event.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='Mật khẩu'
                            className={objCheckInput.isValidPassword ? 'form-control' : 'form-control is-invalid'}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            onKeyDown={(event) => handlePressEnter(event)}
                        />
                        <button
                            className='btn btn-primary'
                            onClick={() => handleLogin()}
                        >Đăng nhập</button>
                        <span className='text-center'><a className='forgotten-password' href='#'>Quên mật khẩu?</a></span>
                        <hr />
                        <span className='text-center'><a className='forgotten-password' href='/'><i className="fa fa-arrow-left" aria-hidden="true"></i>Trở lại trang chủ</a></span>
                        <div className='text-center'>
                            <button
                                className='btn btn-success'
                                onClick={() => handleRegister()}
                            >
                                Tạo tài khoản mới
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login