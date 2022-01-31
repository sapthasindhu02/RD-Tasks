const Sequelize = require('sequelize');
// connect db
module.exports={
     sequelize:     new Sequelize("myDataBase", "postgres", "sindhu@1", {
                    host: 'localhost',
                    dialect: 'postgres',
                    pool: {
                    max: 5,
                    min: 0,
                    idle: 10000
                    }
        })
}
