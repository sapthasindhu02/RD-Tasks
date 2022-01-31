const User=require('../models/Users1.ts').user
const uuid=require('uuid');

let userObj;
let users;
let user;
const USER_NOT_EXIST="User doesnot exist";
let ERROR;

const getUser=(req,res,next)=>{
    User.findOne({where:{login:req.params.login}})
        .then((usr)=>{
            if(!usr){
                console.log(USER_NOT_EXIST);
                getAutoSuggestedUsers(req,res,next);
            }
            else{
            res.status(200).json(usr);
            }
        })
        .catch((err)=>{
            ERROR=err;
            next(ERROR)
        })
}

async function getAutoSuggestedUsers(req,res,next){
    
    try{
    users=await User.findAll();
    let loginIDs=users.map((usr)=>usr.login);
    res.status(400).send(`${USER_NOT_EXIST} suggested users are ${JSON.stringify(loginIDs)}`);
    }
    catch(err){
        ERROR=err;
        next(ERROR);
    }
}

const editUser=(req,res,next)=>{

    User.update({password:req.body.password},{where:{login:req.params.login}})
        .then((no_users_updated)=>{
            if(no_users_updated===0){
                next(USER_NOT_EXIST);
            }
            else{
            res.status(200).send(`User updated successfully`);
            }
        })
        .catch((err)=>{
            ERROR=err;
            next(ERROR);
            
        })
    }

const deleteUser=(req,res,next)=>{
    User.destroy({where:{login:req.params.login}})
        .then((no_users_deleted)=>{
            if(no_users_deleted==0){
                next(USER_NOT_EXIST);
            }
            else{
            res.status(200).send(`User deleted successfully ${usr}`);
            }
        })
        .catch((err)=>{
            ERROR=err;
            next(ERROR);
        })
}

const createUser=(req,res,next)=>{
    userObj={'id':uuid.v4(),'login':req.body.login,'password':req.body.password,'age':req.body.age,'isDeleted':false};
    User.create(userObj)
        .then((usr)=>{
            res.status(200).send(`user created Succesfully `);
        })
        .catch((err)=>{
            ERROR=err;
            next(ERROR);
        })
}

module.exports={getUser,editUser,deleteUser,createUser}
/*
var users=[];
let ID;
let userObj;
let validationResponse;
let user;

app.route('/:login')
.get((req,res,next)=>{
    User.findOne({where:{login:req.params.login}})
        .then((usr)=>{
            if(!usr){
                console.log("User doesnot exist");
                next();
            }
            else{
            res.status(200);
            res.json(usr);
            }
        })
        .catch((err)=>{
            res.status(400);
            res.send(`Error occured: ${err}`);
        })
},async function getAutoSuggestUsers(req,res,next){
  // let usrIDs=users.map((user)=>user.id);
    res.status(400);
    try{
    user=await User.findAll();
    res.send(`Requested User Not found suggested users are ${JSON.stringify(user)}`);
    }
    catch(e){
        next(e);
    }
})

.put((req,res,next)=>{

    User.update({password:req.body.password},{returning:true,where:{login:req.params.login}})
        .then(([rowsUpdated,[usr]])=>{
            res.status(200);
            res.send(`User updated successfully`);
        })
        .catch((err)=>{
            res.status(400);
            res.send(`Error occured : ${err}`);
        })
    })

.delete((req,res,next)=>{
    User.update({isDeleted:true},{where:{login:req.params.login}})
        .then((usr)=>{
            res.status(200);
            res.send(`User deleted successfully`);
        })
        .catch((err)=>{
            res.status(400);
            res.send(`Error occured : ${err}`);
        })
})

app.post('/create',(req,res,next)=>{
    userObj={'id':uuid.v4(),'login':req.body.login,'password':req.body.password,'age':req.body.age,'isDeleted':false};
    User.create(userObj)
        .then((usr)=>{
            res.status(200);
            res.send(`user created Succesfully userid is ${ usr.id} `);
        })
        .catch((err)=>{
            res.status(400);
            res.send(`Error occured : ${err}`);
        })
})

app.use((err,req,res,next)=>{
    if(err){
        res.send(`error occured is ${err}`);
    }
})
*/