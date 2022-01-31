const express=require('express');
const app = express();
const router=express.Router();
const uuid=require('uuid');
const bodyParser=require('body-parser')
const joi_config=require('./joiConfig')

var users=[];
let ID;
let userObj;
let validationResponse;

app.use(bodyParser.json());

app.use((req,res,next)=>{
    next();
})

app.route('/:id')
.get((req,res,next)=>{
    ID=(req.params.id);
    userObj=users.find(usr=>usr.id===ID);
    if(userObj){
        res.status(200);
        res.json(userObj);
    }
    else{
        res.status(400);
        next();
    }
},function getAutoSuggestUsers(req,res){
   let usrIDs=users.map((user)=>user.id);
    res.send(`Requested User Not found suggested users are ${usrIDs}`);
})

.put((req,res,next)=>{
    ID=(req.params.id);
    userObj=users.find(usr=>usr.id===ID);
    let newPassword=req.body.password;
    userObj.password=newPassword;
    validationResponse=joi_config.schema.validate(userObj);
    if(validationResponse.error){
        res.status(400);
        res.send(validationResponse.console.error.details);
    }
    else{
        users=users.map(usr=>usr.id===ID?userObj:usr);
        res.status(200);
        res.send("User updated successfully");

    }
    next();
    })

.delete((req,res,next)=>{
    ID=(req.params.id);
    userObj=users.find(usr=>usr.id===ID);
    if(userObj){
        userObj.isDeleted=true;
        users=users.map(usr=>usr.id===ID?userObj:usr);
        res.status(200);
        res.send("user deleted");
    }
    else{
        res.status(400);
        res.send("User Not Found");
    }
})

app.post('/create',(req,res,next)=>{
    userObj=req.body;
    userObj.id=uuid.v4();
    userObj.isDeleted=false;
    let validationResponse=joi_config.schema.validate(userObj)
    if(validationResponse.error){
        res.status(400);
        res.send(validationResponse.error.details);
    }
    else{
        users.push(userObj);
        res.status(200);
        res.send(`user created Succesfully userid is ${ userObj.id}`);
    }
})
app.use((err,req,res,next)=>{
    if(err){
        res.send(`error occured is ${err}`);
    }
})
app.use((req,res)=>{
    res.status(404);
    res.send("Bad Request, available pages are /create and /[enter id],");
})
app.listen(3000, () =>
     console.log(' app is listening on port 3000. go to http://localhost:3000')
     );
    