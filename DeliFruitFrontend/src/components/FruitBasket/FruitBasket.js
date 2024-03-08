import React, { useEffect } from 'react'
import './FruitBasket.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFB300, fetchFruitBasket, fetchFB400, fetchFB500, fetchFB600, fetchFB700 } from '../../redux/actions/adminActions'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { toast } from 'react-toastify'
import { addToCart } from '../../redux/actions/userActions'

const FruitBasket = () => {
    const id = useSelector((state) => state.user.userInfor?.id)
    const history = useHistory()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.admin.fruitBasket)
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)

    useEffect(() => {
        dispatch(fetchFruitBasket())
    }, [])

    const handleFB300 = () => {
        dispatch(fetchFB300())
    }

    const handleFB400 = () => {
        dispatch(fetchFB400())
    }

    const handleFB500 = () => {
        dispatch(fetchFB500())
    }

    const handleFB600 = () => {
        dispatch(fetchFB600())
    }

    const handleFB700 = () => {
        dispatch(fetchFB700())
    }

    const handleViewDetailItem = (item) => {
        history.push(`/detail-item/${item.id}`)
    }

    const handleAddToCart = (item) => {
        if (isAuthenticated === true) {
            dispatch(addToCart(item, id))
        } else {
            toast.error('Please login')
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <div className="list-group">
                        <button type="button" className="list-group-item list-group-item-action" onClick={() => handleFB300()}>Giỏ trái cây 300k</button>
                        <button type="button" className="list-group-item list-group-item-action" onClick={() => handleFB400()}>Giỏ trái cây 400k</button>
                        <button type="button" className="list-group-item list-group-item-action" onClick={() => handleFB500()}>Giỏ trái cây 500k</button>
                        <button type="button" className="list-group-item list-group-item-action" onClick={() => handleFB600()}>Giỏ trái cây 600k</button>
                        <button type="button" className="list-group-item list-group-item-action" onClick={() => handleFB700()}>Giỏ trái cây 700k</button>
                    </div>
                </div>
                <div className='row row-cols-4 col-9'>
                    {
                        data && data.length > 0 &&
                        <>
                            {
                                data.slice(0, 12).map((item, index) => {
                                    return (
                                        <div className="card col">
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
            </div>
        </div>
    )
}

export default FruitBasket