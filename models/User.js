const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const DataTypes = require('sequelize/lib/data-types');

const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password)
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: { args: [4, 12], msg: 'Password must be between 4 and 12 characters' }
            },
        },
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
            },
            async beforeUpdate(newUserData) {
                newUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            }

        },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;


