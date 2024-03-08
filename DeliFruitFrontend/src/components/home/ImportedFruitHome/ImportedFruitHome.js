import React, { useEffect } from 'react'
import './ImportedFruitHome.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchImportedFruit } from '../../../redux/actions/adminActions'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { toast } from 'react-toastify'
import { addToCart } from '../../../redux/actions/userActions'

const ImportedFruitHome = () => {
    const userInfor = useSelector((state) => state.user.userInfor)
    const history = useHistory()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
    const data = useSelector((state) => state.admin.importedFruit)

    const handleSeeMore = () => {
        history.push('/fruit')
    }

    useEffect(() => {
        dispatch(fetchImportedFruit())
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
                <span className='title'>Trái cây nhập khẩu</span>
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
                                            <h5 className="card-title">{item.name === 'CHERRY' && 'Cherry'}
                                                {item.name === 'BLUEBERRY' && 'Việt Quất'}
                                                {item.name === 'APPLE' && 'Táo'}
                                                {item.name === 'GRAPE' && 'Nho'}
                                                {item.name === 'KIWI' && 'Kiwi'}
                                                {item.name === 'ORANGE' && 'Cam'}
                                                {item.name === 'TANGERINE' && 'Quýt'} {item.code}</h5>
                                            <p className="card-text text-danger fw-medium">{item.price}đ</p>
                                            <a onClick={() => handleAddToCart(item)} className="btn btn-success">Thêm vào giỏ hàng</a>
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

export default ImportedFruitHome