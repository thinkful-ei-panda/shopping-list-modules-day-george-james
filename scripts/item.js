//VALIDATE NAME *********************************
let validateName = function (name) {
  console.log('validateName runs');
  if (typeof name === undefined || name === '') {
    throw new TypeError('Name must not be blank');
  }
};
  
//CREATE & ACCESS NAME *********************************
let create = function (name) {
  return {
    'id' : cuid(),
    'name' : name,
    'checked' : false,
  };
};
  
//EXPORT FUNCTIONS TO OTHER MODULES********* 
//MUST BE PLACED AT BOTTOM OF DOC AFTER VARIABLES ARE DEFINED************
export default {
  validateName,
  create,
};
  