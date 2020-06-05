//function to validate the name*****************
let validateName = function (name) {
  console.log('validateName runs');
  if (typeof name === undefined || name === '') {
    throw new TypeError('Name must not be blank');
  }
};

//function to access the name*****************
let create = function (name) {
  return {
    'id' : cuid(),
    'name' : name,
    'checked' : false,
  };
};

//export function to other modules MUST BE PLACED AT BOTTOM OF DOC AFTER VARIABLES ARE DEFINED************
export default {
    validateName,
    create,
};


