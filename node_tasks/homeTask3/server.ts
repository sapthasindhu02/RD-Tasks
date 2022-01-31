const express=require('express');
const app = express();
const router=express.Router();
const bodyParser=require('body-parser')
const userRouter=require('./routers-controllers/routes.ts');
const Sequelize=require('sequelize');
const sequelize=require('./database.ts').sequelize;
const User=require('./models/Users1.ts').user
app.use(bodyParser.json());

app.use((req,res,next)=>{
    next();
})
app.use('/',userRouter);

//check database connection 
sequelize
.authenticate()
.then(() => {
        console.log('Connection has been established successfully.');
    })
.catch(err => {
        console.error('Unable to connect to the database:', err);
            })

User.sync({alter:true});

app.listen(3000, () =>
     console.log(' app is listening on port 3000. go to http://localhost:3000')
     );
    