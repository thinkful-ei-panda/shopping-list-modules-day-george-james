import store from './store.js';
import item from './item.js';



const generateItemElement = function (item) {
  let itemTitle = `<span class="shopping-item shopping-item__checked">${item.name}</span>`;
  if (!item.checked) {
    itemTitle = `
      <form class="js-edit-item">
        <input class="shopping-item" type="text" value="${item.name}" />
      </form>
    `;
  }

  return `
    <li class="js-item-element" data-item-id="${item.id}">
      ${itemTitle}
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
};

const generateShoppingItemsString = function (shoppingList) {
  const items = shoppingList.map((item) => generateItemElement(item));
  return items.join('');
};

const render = function () {
  let items = [...store.items];
  if (store.hideCheckedItems) {
    items = items.filter(item => !item.checked);
  }
  const shoppingListItemsString = generateShoppingItemsString(items);
  $('.js-shopping-list').html(shoppingListItemsString);
};


//******UPDATED TO USE ITEM MODULE*************************************
const addItemToShoppingList = function (itemName) {
  console.log('addItemToShoppingList runs');
  try {
    item.validateName(itemName);
    let newItemName = item.create(itemName);
    store.items.push(newItemName);
    render();
  } catch (error) {
    `Cannot add item: ${error.message}`;
  }
};
//******UPDATED TO USE ITEM MODULE*************************************
const handleNewItemSubmit = function () {
  $('#js-shopping-list-form').submit(function (event) {
    event.preventDefault();
    const newItemName = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    addItemToShoppingList(newItemName);
    render();
  });
};

// DELETE THIS AFTER CONFIRMING WORKING CODE/////////////////////////
// const toggleCheckedForListItem = function (id) {
//   const foundItem = store.items.find(item => item.id === id);
//   foundItem.checked = !foundItem.checked;
// };


///////////////////////////////////////ERROR HAPPENING HERE////////////////////////
const handleItemCheckClicked = function () {
  $('.js-shopping-list').on('click', '.js-item-toggle', event => {
    const id = getItemIdFromElement(event.currentTarget);
    // toggleCheckedForListItem(id);//<====DELETE THIS AFTER CONFIRMING WORKING CODE///
    store.findAndToggleChecked(id);
    render();
  });
};
//////////////////////////////////////////////////////////////////////////////


const getItemIdFromElement = function (item) {
  return $(item)
    .closest('.js-item-element')
    .data('item-id');
};

/**
 * Responsible for deleting a list item.
 * @param {string} id 
 */

// DELETE THIS AFTER CONFIRMING WORKING CODE/////////////////////////
// const deleteListItem = function (id) {
//   const index = store.items.findIndex(item => item.id === id);
//   store.items.splice(index, 1);
// };

const handleDeleteItemClicked = function () {
  // like in `handleItemCheckClicked`, we use event delegation
  $('.js-shopping-list').on('click', '.js-item-delete', event => {
    // get the index of the item in store.items
    const id = getItemIdFromElement(event.currentTarget);
    // delete the item
    // deleteListItem(id);//<====DELETE THIS AFTER CONFIRMING WORKING CODE///
    store.findAndDelete(id);
    // render the updated shopping list
    render();
  });
};


// DELETE THIS AFTER CONFIRMING WORKING CODE/////////////////////////
// const editListItemName = function (id, itemName) {
//   const item = store.items.find(item => item.id === id);
//   item.name = itemName;
// };

/**
 * Toggles the store.hideCheckedItems property
 */
const toggleCheckedItemsFilter = function () {
  store.hideCheckedItems = !store.hideCheckedItems;
};

/**
 * Places an event listener on the checkbox
 * for hiding completed items.
 */
const handleToggleFilterClick = function () {
  $('.js-filter-checked').click(() => {
    toggleCheckedItemsFilter();
    render();
  });
};

const handleEditShoppingItemSubmit = function () {
  $('.js-shopping-list').on('submit', '.js-edit-item', event => {
    event.preventDefault();
    const id = getItemIdFromElement(event.currentTarget);
    const itemName = $(event.currentTarget).find('.shopping-item').val();
    // editListItemName(id, itemName);//<====DELETE THIS AFTER CONFIRMING WORKING CODE///
    store.findAndUpdateName(id, itemName);
    render();
  });
};

const bindEventListeners = function () {
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
  handleEditShoppingItemSubmit();
  handleToggleFilterClick();
};

export default {
  render,
  bindEventListeners
};