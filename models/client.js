const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Client extends Model {}

Client.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10, 12]
            }
        },
        email_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'client'
    }
);

module.exports = Client;