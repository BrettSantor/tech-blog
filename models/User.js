const { Model, Datatypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Reader extends Model {}

Reader.init(
    {
        id : {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
    username : {
        type: Datatypes.STRING,
        allowNull: false,
    },
    password : {
        type: Datatypes.STRING,
        allowNull: false,
        validate: {
            len: [1],
        }
    }
},
{
    hooks: {
        beforeCreate: async (newUser) => {
            try {
                newUser.password = await bcrypt.hash(newUser.password, 10);
                return newUser;
            } catch (err) {
                console.log(err);
                return err;
            }
        }
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
}
);

module.exports = User;