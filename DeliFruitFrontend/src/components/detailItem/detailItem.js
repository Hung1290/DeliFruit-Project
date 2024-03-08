import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetailItemById } from '../../redux/actions/adminActions'
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
import './detailItem.scss'
import { toast } from 'react-toastify'
import { addToCart } from '../../redux/actions/userActions'

const DetailItem = () => {
    const id = useSelector((state) => state.user.userInfor?.id)
    const route = useRouteMatch()
    const data = useSelector((state) => state.admin.detailItem)
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)

    useEffect(() => {
        dispatch(fetchDetailItemById(route.params.id))
    }, [])

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        if (quantity < data.value) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = (item) => {
        if (isAuthenticated === true) {
            dispatch(addToCart(item, id, quantity))
        } else {
            toast.error('Please login')
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <img src={data.image} />
                </div>
                <div className='col'>
                    <h2>{data.name === 'BASKETFRUIT300' && 'Giỏ trái cây 300k'}
                        {data.name === 'BASKETFRUIT400' && 'Giỏ trái cây 400k'}
                        {data.name === 'BASKETFRUIT500' && 'Giỏ trái cây 500k'}
                        {data.name === 'BASKETFRUIT600' && 'Giỏ trái cây 600k'}
                        {data.name === 'BASKETFRUIT700' && 'Giỏ trái cây 700k'}

                        {data.name === 'CHERRY' && 'Cherry'}
                        {data.name === 'BLUEBERRY' && 'Việt Quất'}
                        {data.name === 'APPLE' && 'Táo'}
                        {data.name === 'GRAPE' && 'Nho'}
                        {data.name === 'KIWI' && 'Kiwi'}
                        {data.name === 'ORANGE' && 'Cam'}
                        {data.name === 'TANGERINE' && 'Quýt'} {data.code}</h2>
                    <hr />
                    <h1 className='text-danger'>{data.price}đ</h1>
                    <hr />
                    <div className='quantity-container'>
                        <button className='btn btn-warning' onClick={handleDecrement}>-</button>
                        <div className='quantity'>{quantity}</div>
                        <button className='btn btn-warning' onClick={handleIncrement}>+</button>
                    </div>
                    <div className='py-3'>Sản phẩm có sẵn: {data.value}</div>
                    <button className='btn btn-success' onClick={() => handleAddToCart(data)}>Thêm vào giỏ hàng</button>
                    <div className='pt-5'>
                        <h3>Mô tả</h3>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailItem