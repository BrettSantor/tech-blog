const { Model, Datatypes, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Post.init(
    {
        id : {
            type : Datatypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true,
        },
        content :{
           type: Datatypes.TEXT,
           allowNull: true,
        },
            post_id:{
                type: DataTypes.INTEGER,
                references: {
                    model: 'post',
                    key: 'id',
                }
            },
            user_id : {
                type: DataTypes.INTEGER,
                references: {
                    model: 'user',
                    key: 'id'
                }
            }
        

    },
    {sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Comment',
}
);

module.exports = Comment;