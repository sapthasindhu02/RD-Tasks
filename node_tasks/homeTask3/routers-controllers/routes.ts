const express = require('express')
const router=express.Router();
const ctrl=require('./controllers.ts')

router.get('/:login',ctrl.getUser);
router.post('/create',ctrl.createUser);
router.put('/edit/:login',ctrl.editUser);
router.delete('/delete/:login',ctrl.deleteUser);

router.use((err,req,res,next)=>{
    if(err){
        res.status(400).send(`Error occured: ${err}`);
    }
})
router.use((req,res)=>{
    res.status(404);
    res.send("Requested page not found.\n Route paths: /[login],\n  /create, \n /edit/[login],\n /delete/[login]  ");
})

module.exports=router;
      
