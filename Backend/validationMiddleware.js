const Joi = require('joi');

exports.registration = (req,res,next) => {

    const profileSchema = Joi.object({

        name: Joi.string().trim().min(2).max(30).empty('').required().messages({
            'string.min':'Name must have at least 2 characters',
            'string.max':'Name mustn\'t have more than 30 characters',
            'any.required':'Please enter your full name.'
        }),
        
        email: Joi.string().lowercase().trim().email({ minDomainSegments: 2, tlds: { allow: ['com','net','ca','org'] }}).empty('').required().messages({
            'string.email':'Please enter a valid email address.',
            'any.required':'Please enter an email address.',
            'string.lowercase':'Please enter your email address in lowercase.'
        }),

        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9!#$%]{8,30}$')).empty('').required().messages({

            'any.required':'Please enter a password.',
            'string.pattern.base':'Password should include letters, numbers and special characters such as "!#$%".'
        }),
        confirm: Joi.ref('password'),

        location: Joi.string().trim().min(1).max(30).empty('').required().messages({
            'string.min':'Name should at least be 1 character.',
            'string.max':'Please try to limit to 30 characters.',
            'any.required':'Please enter your full name.'
        }),

        gender: Joi.array().items(Joi.string().valid('male','female','binary','other')).empty('').required().max(1).messages({
            'any.required':'Please select 1 identity.',
            'array.max':'Please choose only 1 identity.',
            'any.only':'Please only choose from the listed identities.'
        }),

        concerns: Joi.array().items(Joi.string().valid('acne','dryness','oilyness','blemishes','dark spots','pores','red lines','fine lines')).messages({
            'any.only':'Please only choose from the listed options.'
        })
    });

    const {value,error} = profileSchema.validate(req.body, {abortEarly:false});
        
    req.body = value;

    if (error!=undefined) {

        console.error(error);

        alert(error.details);

        res.send(error);
    
    } else {
        
        next();
    }
}