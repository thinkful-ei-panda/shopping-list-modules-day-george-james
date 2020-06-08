
//IMPORTS FUNCTIONS & DATA FROM OTHER MODULES*********************************
import shoppingList from './shopping-list.js';
import store from './store.js';
import item from './item.js';



const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);