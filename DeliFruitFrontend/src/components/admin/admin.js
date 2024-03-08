import React, { useState, useEffect } from 'react'
import './admin.scss'
import { deleteItem, fetchAllItem } from '../../services/adminService'
import ReactPaginate from 'react-paginate'
import { toast } from 'react-toastify'
import ModalItem from './ModalItem'
import ModalDelete from './ModalDelete'

const Admin = () => {
    const [listItems, setListItems] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [currentLimit, setCurrentLimit] = useState(10)
    const [totalPages, setTotalPages] = useState(0)

    //modal delete
    const [isShowModalDelete, setIsShowModalDelete] = useState(false)
    const [dataModal, setDataModal] = useState({})

    //modal update/create item
    const [isShowModalItem, setIsShowModalItem] = useState(false)
    const [actionModalItem, setActionModalItem] = useState('CREATE')
    const [dataModalItem, setDataModalItem] = useState({})


    useEffect(() => {
        fetchItems()
    }, [currentPage])

    const fetchItems = async () => {
        let response = await fetchAllItem(currentPage, currentLimit)
        if (response && response.EC === 0) {
            setTotalPages(response.DT.totalPages)
            setListItems(response.DT.items)
        }
    }

    const handlePageClick = async (event) => {
        setCurrentPage(+event.selected + 1)
    }

    const handleDeleteItem = async (item) => {
        setDataModal(item)
        setIsShowModalDelete(true)
    }

    const handleClose = () => {
        setIsShowModalDelete(false)
        setDataModal({})
    }

    const confirmDeleteItem = async () => {
        let response = await deleteItem(dataModal)
        if (response && response.EC === 0) {
            toast.success(response.EM)
            await fetchItems()
            setIsShowModalDelete(false)
        } else {
            toast.error(response.EM)
        }
    }

    const onHideModalItem = async () => {
        setIsShowModalItem(false)
        setDataModalItem({})
        await fetchItems()
    }

    const handleEditItem = (item) => {
        setActionModalItem('UPDATE')
        setDataModalItem(item)
        setIsShowModalItem(true)
    }

    const handleRefresh = async () => {
        await fetchItems()
    }

    return (
        <>
            <div className='container'>
                <div className='items-container'>
                    <div className='user-header'>
                        <div className='title mt-3'>
                            <h3>Danh sách sản phẩm</h3>
                        </div>
                        <div className='actions my-3'>
                            <button
                                className='btn btn-success refresh'
                                onClick={() => handleRefresh()}
                            ><i className='fa fa-refresh'></i>Refresh</button>
                            <button className='btn btn-primary ms-1'
                                onClick={() => {
                                    setIsShowModalItem(true);
                                    setActionModalItem('CREATE')
                                }}
                            >
                                <i className='fa fa-plus-circle'></i>
                                Thêm mới sản phẩm
                            </button>
                        </div>
                    </div>
                    <div className='user-body'>
                        <table className='table table-bordered table-hover text-center'>
                            <thead>
                                <tr>
                                    <th scope='col'>STT</th>
                                    <th scope='col'>Loại hàng hóa</th>
                                    <th scope='col'>Tên sản phẩm</th>
                                    <th scope='col'>Mã sản phẩm</th>
                                    <th scope='col'>Giá</th>
                                    <th scope='col'>Số lượng</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listItems && listItems.length > 0 ?
                                        <>
                                            {
                                                listItems.map((item, index) => {
                                                    return (
                                                        <tr key={`row-${index}`}>
                                                            <td>{(currentPage - 1) * currentLimit + index + 1}</td>
                                                            <td>{item.item === 'BASKETFRUIT' ? 'Giỏ trái cây' : 'Trái cây'}</td>
                                                            <td>
                                                                {item.name === 'BASKETFRUIT300' && 'Giỏ trái cây 300k'}
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
                                                                {item.name === 'TANGERINE' && 'Quýt'}
                                                            </td>
                                                            <td>{item.code}</td>
                                                            <td>{item.price}đ</td>
                                                            <td>{item.value}</td>
                                                            <td>
                                                                <span
                                                                    title='Edit'
                                                                    className='edit'
                                                                    onClick={() => handleEditItem(item)}
                                                                >
                                                                    <i className='fa fa-pencil'></i>
                                                                </span>
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
                    </div>
                </div>
                {
                    totalPages > 0 &&
                    <div className='user-footer'>
                        <ReactPaginate
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={1}
                            pageCount={totalPages}
                            previousLabel="< previous"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                }
            </div>
            <ModalDelete
                show={isShowModalDelete}
                handleClose={handleClose}
                confirmDeleteItem={confirmDeleteItem}
                dataModal={dataModal}
            />

            <ModalItem
                onHide={onHideModalItem}
                show={isShowModalItem}
                action={actionModalItem}
                dataModalItem={dataModalItem}
            />
        </>
    )
}

export default Admin