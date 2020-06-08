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


let findAndToggleChecked = function (id) {
  let listItem = this.findById(id);
  listItem.checked = !listItem.checked;    
};



let findAndUpdateName = function (id, newName) {
  try {
    item.validateName(newName);
    let listItem = this.findById(id);
    listItem.name = newName;
  } catch (error) {
    console.log(`Cannot update name: ${error.message}`);   
  }
};


let findAndDelete= function (id){
  const index = items.findIndex(item => item.id === id);
  items.splice(index,1);
  console.log('findAndDelete working');
};


let toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};


export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};
