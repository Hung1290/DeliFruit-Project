import React, { useEffect } from 'react'
import './ImportedFruit.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApple, fetchBlueberry, fetchCherry, fetchGrape, fetchImportedFruit, fetchKiwi, fetchOrange, fetchTangerine } from '../../redux/actions/adminActions'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { toast } from 'react-toastify'
import { addToCart } from '../../redux/actions/userActions'

const ImportedFruit = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
    const data = useSelector((state) => state.admin.importedFruit)
    const id = useSelector((state) => state.user.userInfor?.id)

    useEffect(() => {
        dispatch(fetchImportedFruit())
    }, [])

    const handleGetCherry = () => {
        dispatch(fetchCherry())
    }

    const handleGetBlueBerry = () => {
        dispatch(fetchBlueberry())
    }

    const handleGetApple = () => {
        dispatch(fetchApple())
    }

    const handleGetGrape = () => {
        dispatch(fetchGrape())
    }

    const handleGetKiwi = () => {
        dispatch(fetchKiwi())
    }

    const handleGetOrange = () => {
        dispatch(fetchOrange())
    }

    const handleGetTangerine = () => {
        dispatch(fetchTangerine())
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
                        <button type="button" className="list-group-item list-group-item-action" onClick={() => handleGetCherry()}>Cherry</button>
                        <button type="button" className="list-group-item list-group-item-action" onClick={() => handleGetBlueBerry()}>Việt Quất</button>
                        <button type="button" className="list-group-item list-group-item-action" onClick={() => handleGetApple()}>Táo</button>
                        <button type="button" className="list-group-item list-group-item-action" onClick={() => handleGetGrape()}>Nho</button>
                        <button type="button" className="list-group-item list-group-item-action" onClick={() => handleGetKiwi()}>Kiwi</button>
                        <button type="button" className="list-group-item list-group-item-action" onClick={() => handleGetOrange()}>Cam</button>
                        <button type="button" className="list-group-item list-group-item-action" onClick={() => handleGetTangerine()}>Quýt</button>
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
                                                <h5 className="card-title">{item.name === 'CHERRY' && 'Cherry'}
                                                    {item.name === 'BLUEBERRY' && 'Việt Quất'}
                                                    {item.name === 'APPLE' && 'Táo'}
                                                    {item.name === 'GRAPE' && 'Nho'}
                                                    {item.name === 'KIWI' && 'Kiwi'}
                                                    {item.name === 'ORANGE' && 'Cam'}
                                                    {item.name === 'TANGERINE' && 'Quýt'} {item.code}</h5>
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

export default ImportedFruit