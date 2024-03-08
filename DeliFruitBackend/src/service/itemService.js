import db from '../models/index'

const getAllItem = async () => {
    try {
        let items = await db.Item.findAll({
            order: [['item', 'ASC']]
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
        await db.Item.create({
            item: data.item,
            name: data.name,
            code: data.code,
            description: data.description,
            price: data.price,
            image: data.image,
            value: data.value
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
        let item = await db.Item.findOne({
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
                value: data.value
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
        let item = await db.Item.findOne({
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

const getItemWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit

        const { count, rows } = await db.Item.findAndCountAll({
            offset: offset,
            limit: limit,
            attribute: ['id', 'item', 'name', 'code', 'description', 'price', 'value', 'image'],
            order: [['item', 'DESC']]
        })

        let totalPages = Math.ceil(count / limit)

        if (rows && rows.length > 0) {
            rows.map(item => {
                item.image = new Buffer.from(item.image, 'base64').toString('binary')
                return item
            })
        }

        let data = {
            totalRows: count,
            totalPages: totalPages,
            items: rows
        }

        return {
            EM: 'fetch ok',
            EC: 0,
            DT: data
        }
    } catch (error) {
        return {
            EM: 'something wrongs with services',
            EC: 1,
            DT: []
        }
    }
}

const getItem = async (item) => {
    try {
        if (!item) {
            return {
                EM: 'Missing required parameters!',
                EC: 0,
            }
        }
        let items = await db.Item.findAll({
            where: { item },
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

const getItemName = async (name) => {
    try {
        if (!name) {
            return {
                EM: 'Missing required parameters!',
                EC: 0,
            }
        }
        let items = await db.Item.findAll({
            where: { name },
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

let getDetailItemById = async (inputId) => {
    try {
        if (!inputId) {
            return {
                EC: 1,
                EM: 'Missing required parameter!'
            }
        } else {
            let data = await db.Item.findOne({
                where: { id: inputId }
            })
            if (data && data.image) {
                data.image = new Buffer.from(data.image, 'base64').toString('binary')
            }
            if (!data) data = {}
            return {
                EM: 'get data success',
                EC: 0,
                DT: data
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

module.exports = {
    getAllItem, createNewItem, updateItem, deleteItem, getItemWithPagination, getItem, getItemName, getDetailItemById
}