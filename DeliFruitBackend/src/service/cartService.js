import db from '../models/index'

const getAllItem = async (id) => {
    try {
        let items = await db.Cart.findAll({
            where: { userId: id },
            order: [['name', 'ASC']]
        })
        if (items && items.length > 0) {
            items.map(item => {
                item.image = new Buffer.from(item.image, 'base64').toString('binary')
                return item
            })
        }
        if (items) {
            return {
                EM: 'get data success',
                EC: 0,
                DT: items
            }
        } else {
            return {
                EM: 'get data success',
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        console.log(error);
        return {
            EM: 'something wrongs with service',
            EC: 1,
            DT: []
        }
    }
}

const createNewItem = async (data) => {
    try {
        await db.Cart.create({
            item: data.item,
            name: data.name,
            code: data.code,
            description: data.description,
            price: data.price,
            image: data.image,
            value: data.quantity ? data.quantity : 1,
            userId: data.id
        })

        return {
            EM: 'Create ok',
            EC: 0,
            DT: []
        }
    } catch (error) {
        console.log(error);
        return {
            EM: `Something wrongs with service`,
            EC: 1,
            DT: []
        }
    }
}

const updateItem = async (data) => {
    try {
        let item = await db.Cart.findOne({
            where: { id: data.id }
        })
        if (item) {
            await item.update({
                item: data.item,
                name: data.name,
                code: data.code,
                description: data.description,
                price: data.price,
                image: data.image,
                value: data.quantity
            })

            return {
                EM: 'Update item succeeds',
                EC: 0,
                DT: ''
            }
        } else {
            return {
                EM: 'Item not found',
                EC: 2,
                DT: ''
            }
        }
    } catch (error) {
        console.log(error);
        return {
            EM: 'something wrongs with services',
            EC: 1,
            DT: []
        }
    }
}

const deleteItem = async (id) => {
    try {
        let item = await db.Cart.findOne({
            where: { id: id }
        })
        if (item) {
            await item.destroy()
            return {
                EM: 'Delete item succeeds',
                EC: 0,
                DT: []
            }
        } else {
            return {
                EM: 'Item not exist',
                EC: 2,
                DT: []
            }
        }
    } catch (error) {
        console.log(error);
        return {
            EM: 'error from service',
            EC: 1,
            DT: []
        }
    }
}

module.exports = {
    getAllItem, createNewItem, updateItem, deleteItem
}