titconst { Model, Datatypes, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id : {
            type : Datatypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true,
        },
        title :{
           type: Datatypes.STRING,
            allowNull: false,
        },
        content : {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model:"user",
                key: 'id'
            }
        }
        //? Date
        //? leave a comment

    },
    {sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
}
);

module.exports = Post;