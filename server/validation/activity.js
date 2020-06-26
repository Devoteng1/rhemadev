const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateActivityInput(data){

    let errors = {}

    data.clientName = !isEmpty(data.clientName) ? data.clientName : '';
   



    if(Validator.isEmpty(data.clientName)){
        errors.clientName = 'Email field is required';
    }

    
    return{
        errors,
        isValid: isEmpty(errors)
    }

 
}