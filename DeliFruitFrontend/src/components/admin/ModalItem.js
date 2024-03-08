import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createNewItem, updateCurrentItem } from '../../services/adminService';
import { toast } from 'react-toastify';
import _ from 'lodash'
import CommonUtils from '../../utils/CommonUtils'
import './ModalItem.scss'

const ModalItem = (props) => {

    const { action, dataModalItem } = props

    const defaultItemData = {
        item: '',
        name: '',
        code: '',
        description: '',
        price: '',
        image: '',
        value: '',

        previewImgURL: ''
    }

    const validInputsDefault = {
        item: true,
        name: true,
        code: true,
        description: true,
        price: true,
        image: true,
        value: true
    }

    const [itemData, setItemData] = useState(defaultItemData)
    const [validInputs, setValidInputs] = useState(validInputsDefault)

    useEffect(() => {
        if (action === 'UPDATE') {
            setItemData({ ...dataModalItem })
        }
    }, [dataModalItem])

    useEffect(() => {
        if (action === 'CREATE') {
            setItemData({ ...itemData })
        }
    }, [action])

    const handleOnchangeInput = (value, name) => {
        let _itemData = _.cloneDeep(itemData)
        _itemData[name] = value
        setItemData(_itemData)
    }

    const checkValidateInputs = () => {
        if (action === 'UPDATE') return true
        setValidInputs(validInputsDefault)
        let arr = ['item', 'name', 'code', 'price', 'value', 'image']
        let check = true
        for (let i = 0; i < arr.length; i++) {
            if (!itemData[arr[i]]) {
                let _validInputs = _.cloneDeep(validInputsDefault);
                _validInputs[arr[i]] = false;
                setValidInputs(_validInputs);

                toast.error(`Empty input ${arr[i]}`);
                check = false;
                break;
            }
        }

        return check
    }

    const handleConfirmItem = async () => {
        let check = checkValidateInputs()
        if (check === true) {
            let res = action === 'CREATE' ?
                await createNewItem({ ...itemData })
                :
                await updateCurrentItem({ ...itemData })

            if (res && res.EC === 0) {
                props.onHide()
                setItemData({ ...defaultItemData })
            }
            if (res && res.EC !== 0) {
                toast.error(res.EM)
                let _validInputs = _.cloneDeep(validInputsDefault)
                _validInputs[res.DT] = false
                setValidInputs(_validInputs)
            }
        }
    }

    const handleCloseModalUser = () => {
        props.onHide()
        setItemData(defaultItemData)
        setValidInputs(validInputsDefault)
    }

    const handleOnchangeImage = async (event) => {
        let data = event.target.files
        let file = data[0]
        if (file) {
            let base64 = await CommonUtils.getBase64(file)
            let objectUrl = URL.createObjectURL(file)
            setItemData({
                ...itemData,
                previewImgURL: objectUrl,
                image: base64
            })
        }
    }

    return (
        <>
            <Modal size='lg' show={props.show} className='modal-user' onHide={() => handleCloseModalUser()}>
                <Modal.Header closeButton>
                    <Modal.Title id='container-modal-title-center'>
                        <span>{props.action === 'CREATE' ? 'Thêm mới sản phẩm' : 'Chỉnh sửa'}</span>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className='content-body row'>
                        <div className='col-12 col-sm-6 form-group'>
                            <label>Loại hàng hóa(<span className='red'>*</span>)</label>
                            <select
                                className={validInputs.item ? 'form-select' : 'form-select is-invalid'}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'item')}
                                value={itemData.item}
                            >
                                <option defaultValue=''></option>
                                <option value='BASKETFRUIT'>Giỏ trái cây</option>
                                <option value='FRUIT'>Trái cây</option>
                            </select>
                        </div>
                        <div className='col-12 col-sm-6 form-group'>
                            <label>Tên sản phẩm(<span className='red'>*</span>)</label>
                            <select
                                className={validInputs.name ? 'form-select' : 'form-select is-invalid'}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'name')}
                                value={itemData.name}
                            >
                                <option defaultValue=''></option>
                                <option value='BASKETFRUIT300'>Giỏ trái cây 300k</option>
                                <option value='BASKETFRUIT400'>Giỏ trái cây 400k</option>
                                <option value='BASKETFRUIT500'>Giỏ trái cây 500k</option>
                                <option value='BASKETFRUIT600'>Giỏ trái cây 600k</option>
                                <option value='BASKETFRUIT700'>Giỏ trái cây 700k</option>
                                <option value='CHERRY'>Cherry</option>
                                <option value='BLUEBERRY'>Việt Quất</option>
                                <option value='APPLE'>Táo</option>
                                <option value='GRAPE'>Nho</option>
                                <option value='KIWI'>Kiwi</option>
                                <option value='ORANGE'>Cam</option>
                                <option value='TANGERINE'>Quýt</option>
                            </select>
                        </div>
                        <div className='col-12 col-sm-6 form-group'>
                            <label>Mã(<span className='red'>*</span>)</label>
                            <input
                                className={validInputs.code ? 'form-control' : 'form-control is-invalid'}
                                type='text' value={itemData.code}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'code')}
                            />
                        </div>
                        <div className='col-12 col-sm-6 form-group'>
                            <label>Giá(<span className='red'>*</span>)</label>
                            <input
                                className={validInputs.price ? 'form-control' : 'form-control is-invalid'}
                                type='text' value={itemData.price}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'price')}
                            />
                        </div>
                        <div className='col-12 col-sm-6 form-group'>
                            <label>Số lượng(<span className='red'>*</span>)</label>
                            <input
                                className={validInputs.value ? 'form-control' : 'form-control is-invalid'}
                                type='email' value={itemData.value}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'value')}
                            />
                        </div>
                        <div className='col-12 col-sm-6 form-group'>
                            <label>Mô tả</label>
                            <input
                                className={validInputs.description ? 'form-control' : 'form-control is-invalid'}
                                type='text' value={itemData.description}
                                onChange={(event) => handleOnchangeInput(event.target.value, 'description')}
                            />
                        </div>
                        <div className='col-12 col-sm-12 form-group'>
                            <div className='preview-img-container'>
                                <input id='previewImg' type='file' hidden
                                    onChange={(event) => handleOnchangeImage(event)} />
                                <label className='label-upload' htmlFor='previewImg'>Tải ảnh <i className="fa fa-upload"></i>(<span className='red'>*</span>)</label>
                                <div className='preview-image'
                                    style={{ backgroundImage: `url(${itemData.previewImgURL})` }}
                                ><img className='preview-image' src={itemData.image} /></div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleCloseModalUser()}>Close</Button>
                    <Button variant="primary" onClick={() => handleConfirmItem()}>
                        {action === 'CREATE' ? 'Create' : 'Save'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalItem