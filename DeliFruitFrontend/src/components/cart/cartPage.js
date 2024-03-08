import React, { useEffect, useState } from 'react'
import './cartPage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, editCart, fetchCart } from '../../redux/actions/userActions'

const CartPage = () => {
    const dispatch = useDispatch()
    const listItems = useSelector((state) => state.user.cart)
    const userInfor = useSelector((state) => state.user.userInfor)
    let [total, setTotal] = useState(0)

    useEffect(() => {
        dispatch(fetchCart(userInfor.id))
    }, [])

    useEffect(() => {
        if (listItems && listItems.length > 0) {
            for (let i = 0; i < listItems.length; i++) {
                total += +listItems[i].price * listItems[i].value
            }
            return setTotal(total)
        }
    }, [])

    const handleDeleteItem = (item) => {
        dispatch(deleteCart(item, userInfor.id))
    }

    return (
        <>
            <div className='container'>
                <div className='items-container'>
                    <div className='user-body'>
                        <table className='table table-bordered table-hover text-center'>
                            <thead>
                                <tr>
                                    <th scope='col'>STT</th>
                                    <th scope='col'>Hình ảnh</th>
                                    <th scope='col'>Sản phẩm</th>
                                    <th scope='col'>Số lượng</th>
                                    <th scope='col'>Giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listItems && listItems.length > 0 ?
                                        <>
                                            {
                                                listItems.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td><img src={item.image} className='cart-img' /></td>
                                                            <td>{item.name === 'BASKETFRUIT300' && 'Giỏ trái cây 300k'}
                                                                {item.name === 'BASKETFRUIT400' && 'Giỏ trái cây 400k'}
                                                                {item.name === 'BASKETFRUIT500' && 'Giỏ trái cây 500k'}
                                                                {item.name === 'BASKETFRUIT600' && 'Giỏ trái cây 600k'}
                                                                {item.name === 'BASKETFRUIT700' && 'Giỏ trái cây 700k'}

                                                                {item.name === 'CHERRY' && 'Cherry'}
                                                                {item.name === 'BLUEBERRY' && 'Việt Quất'}
                                                                {item.name === 'APPLE' && 'Táo'}
                                                                {item.name === 'GRAPE' && 'Nho'}
                                                                {item.name === 'KIWI' && 'Kiwi'}
                                                                {item.name === 'ORANGE' && 'Cam'}
                                                                {item.name === 'TANGERINE' && 'Quýt'} {item.code}
                                                            </td>
                                                            <td>{item.value}</td>
                                                            <td>{item.price}đ</td>
                                                            <td>
                                                                <span
                                                                    title='Delete'
                                                                    className='delete'
                                                                    onClick={() => handleDeleteItem(item)}
                                                                >
                                                                    <i className='fa fa-trash-o'></i>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </>
                                        :
                                        <>
                                            <tr>
                                                <td colspan="6">
                                                    Not found items
                                                </td>
                                            </tr>
                                        </>
                                }
                            </tbody>
                        </table>
                        <div className='row pt-5'>
                            <div className='col'>
                                <h4>THÔNG TIN THANH TOÁN</h4>
                                <hr />
                                <h5 className='bg-secondary-subtle p-2'>Tên</h5>
                                <p>{userInfor.username}</p>
                                <h5 className='bg-secondary-subtle p-2'>Địa chỉ</h5>
                                <p>{userInfor.address}</p>
                                <h5 className='bg-secondary-subtle p-2'>Số điện thoại</h5>
                                <p>{userInfor.phone}</p>
                            </div>
                            <div className='col'>
                                <h4>ĐƠN HÀNG CỦA BẠN</h4>
                                <hr />

                                <table className='table table-bordered table-hover text-center'>
                                    <thead>
                                        <tr>
                                            <th scope='col'><h5>Sản phẩm</h5></th>
                                            <th scope='col'><h5>Số lượng</h5></th>
                                            <th scope='col'><h5>Giá</h5></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            listItems && listItems.length > 0 ?
                                                <>
                                                    {
                                                        listItems.map((item, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td>{item.name === 'BASKETFRUIT300' && 'Giỏ trái cây 300k'}
                                                                        {item.name === 'BASKETFRUIT400' && 'Giỏ trái cây 400k'}
                                                                        {item.name === 'BASKETFRUIT500' && 'Giỏ trái cây 500k'}
                                                                        {item.name === 'BASKETFRUIT600' && 'Giỏ trái cây 600k'}
                                                                        {item.name === 'BASKETFRUIT700' && 'Giỏ trái cây 700k'}

                                                                        {item.name === 'CHERRY' && 'Cherry'}
                                                                        {item.name === 'BLUEBERRY' && 'Việt Quất'}
                                                                        {item.name === 'APPLE' && 'Táo'}
                                                                        {item.name === 'GRAPE' && 'Nho'}
                                                                        {item.name === 'KIWI' && 'Kiwi'}
                                                                        {item.name === 'ORANGE' && 'Cam'}
                                                                        {item.name === 'TANGERINE' && 'Quýt'} {item.code}</td>

                                                                    <td>{item.value}</td>
                                                                    <td>{item.price}đ</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </>
                                                :
                                                <>
                                                    <tr>
                                                        <td colspan="2">
                                                            Not found items
                                                        </td>
                                                    </tr>
                                                </>
                                        }
                                    </tbody>
                                </table>
                                <div>
                                    <h5>Tổng: {total}đ</h5>
                                </div>
                                <div>
                                    <h5 className='bg-secondary-subtle p-3'> <i className="fa fa-check-square-o pe-3"></i>
                                        Trả tiền mặt khi nhận hàng
                                    </h5>
                                </div>
                                <button className='cartPage-btn'>
                                    <h4 className='text-white'>ĐẶT HÀNG</h4>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage