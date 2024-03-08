'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Cart.belongsTo(models.User)
        }
    };
    Cart.init({
        name: DataTypes.STRING,
        code: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.STRING,
        image: DataTypes.STRING,
        value: DataTypes.STRING,
        userId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Cart',
    });
    return Cart;
};