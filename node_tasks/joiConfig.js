const joi=require('joi');
module.exports={
     schema: joi.object({
        id:joi.string().required(),
        login:joi.string().required(),
        password:joi.string().alphanum().required(),
        age:joi.number().integer().min(4).max(130).required(),
        isDeleted:joi.boolean().required()
    })
    
}