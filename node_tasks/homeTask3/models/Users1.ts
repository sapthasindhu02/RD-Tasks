const {DataTypes} = require('sequelize');
let sequelize=require('../database.ts').sequelize;

module.exports={
    user:sequelize.define("User", {
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey:true
        },
        login:{
            type:DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                is:{
                    args:["^[a-zA-Z0-9]{6,32}$"],
                    msg:"Password must be alphanumeric"
                }
            }
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull: false,
            validate: { min: 4, max: 130 }
        },
        isDeleted:{
            type:DataTypes.BOOLEAN,
            allowNull: true,
            default:false
        }
    })
}