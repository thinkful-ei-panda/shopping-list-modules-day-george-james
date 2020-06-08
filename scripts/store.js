import item from './item.js';

let items = [];
let hideCheckedItems = false;


let findById = function (id) {
  return items.find(object => object.id === id);
};

let addItem = function (name) {
  try {
    item.validateName(name);
    let listItem = item.create(name);
    this.items.push(listItem);
    console.log('addItem working');
  } catch (error) {  
    console.log(`Cannot add item: ${error.message}`);
  }
};
///////////////////////////////////////ERROR HAPPENING HERE////////////////////////
let findAndToggleChecked = function (id) {
  let listItem = this.findById(id);
  listItem.checked = !listItem.checked;    
};
//////////////////////////////////////////////////////////////////////////////



let findAndUpdateName = function (id, newName) {
  try {
    item.validateName(newName);
    let listItem = this.findById(id);
    listItem.name = newName;
  } catch (error) {
    console.log(`Cannot update name: ${error.message}`);   
  }
};

let findAndDelete = function (id) {
  let listItem = this.findById(id);
  this.items = this.items.filter(object => object.id !== listItem.id);
  console.log('findAndDelete working');
};

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};