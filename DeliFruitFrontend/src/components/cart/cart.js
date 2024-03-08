import React, { useEffect } from 'react'
import './cart.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const Cart = () => {
    const listItems = useSelector((state) => state.user.cart)
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
    const history = useHistory()
    const location = useLocation()

    const handleClick = () => {
        history.push('/cart')
    }

    if (location.pathname === '/admin' || location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/cart' || isAuthenticated === false) {
        return <></>
    } else {
        return (
            <div className='btn-cart-container'>
                <button className='cart-btn rounded-circle' onClick={() => handleClick()}>
                    {
                        listItems && listItems.length ?
                            <span className='rounded-circle'></span>
                            :
                            ''
                    }
                    <i className="fa fa-shopping-cart fs-3" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}

export default Cart