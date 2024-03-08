import React, { useEffect } from 'react'
import './FruitBasketHome.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFruitBasket } from '../../../redux/actions/adminActions'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { toast } from 'react-toastify'
import { addToCart } from '../../../redux/actions/userActions'


const FruitBasketHome = () => {
    const userInfor = useSelector((state) => state.user.userInfor)
    const history = useHistory()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
    const data = useSelector((state) => state.admin.fruitBasket)

    const handleSeeMore = () => {
        history.push('/fruit-basket')
    }

    useEffect(() => {
        dispatch(fetchFruitBasket())
    }, [])

    const handleViewDetailItem = (item) => {
        history.push(`/detail-item/${item.id}`)
    }

    const handleAddToCart = (item) => {
        if (isAuthenticated === true) {
            dispatch(addToCart(item, userInfor?.id))
        } else {
            toast.error('Please login')
        }
    }

    return (
        <div className='container pt-5'>
            <div className='title-container pb-3'>
                <span className='line'></span>
                <span className='title'>Giỏ trái cây</span>
                <span className='line'></span>
            </div>
            <div className='row row-cols-4'>
                {
                    data && data.length > 0 &&
                    <>
                        {
                            data.slice(0, 8).map((item, index) => {
                                return (
                                    <div key={index} className="card col">
                                        <img src={item.image} className="card-img-top" onClick={() => handleViewDetailItem(item)} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{item.name === 'BASKETFRUIT300' && 'Giỏ trái cây 300k'}
                                                {item.name === 'BASKETFRUIT400' && 'Giỏ trái cây 400k'}
                                                {item.name === 'BASKETFRUIT500' && 'Giỏ trái cây 500k'}
                                                {item.name === 'BASKETFRUIT600' && 'Giỏ trái cây 600k'}
                                                {item.name === 'BASKETFRUIT700' && 'Giỏ trái cây 700k'} - {item.code}</h5>
                                            <p className="card-text text-danger fw-medium">{item.price}đ</p>
                                            <a className="btn btn-success" onClick={() => handleAddToCart(item)}>Thêm vào giỏ hàng</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </>
                }
            </div>
            <div className='text-center'>
                <button className='btn btn-primary' onClick={() => handleSeeMore()}>Xem thêm</button>
            </div>
        </div>
    )
}

export default FruitBasketHome