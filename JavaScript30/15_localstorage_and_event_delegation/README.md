# Day 15: LocalStorage and Event Delegation

## Step by step JavaScript guide

   1. we add 'load' event to window object with handle function named init

      ```javascript
      window.addEventListener('load', init);

      function init() {
        // ...
      }
      ```

   2. inside *init* function

      we declare variables

      ```javascript
      const addItems = document.querySelector('.add-items');
      const itemsList = document.querySelector('.plates');
      let items = JSON.parse(localStorage.getItem('items')) || [];
      const checkAll = document.querySelector('#check');
      const unCheckAll = document.querySelector('#uncheck');
      const clearAll = document.querySelector('#clear');
      ```

      we add events to these elements

      ```javascript
      addItems.addEventListener('submit', addItem);
      itemsList.addEventListener('click', toggleDone);
      checkAll.addEventListener('click', toggleAll);
      unCheckAll.addEventListener('click', toggleAll);
      clearAll.addEventListener('click', removeAll);
      ```

   3. and declare all helper functions

      - handle for add an item into list
        ```javascript
        function addItem(event) {
          event.preventDefault();
          const textField = this.querySelector('[name="item"]');
          const text = textField.value;
          const item = {
            name: text,
            done: false
          };

          items.push(item);
          populateList(items, itemsList);
          localStorage.setItem('items', JSON.stringify(items));
          this.reset();
          textField.focus(); // allow user keep on submitting without click into text field again.
        }
        ```
      - handle display list
        ```javascript
        function populateList(plates = [], platesList) {
          platesList.innerHTML = plates.map((plate, index) => {
            return `
              <li>
                <input type="checkbox" data-index="${index}" id="item${index}" ${plate.done ? 'checked' : ''}>
                <label for="item${index}">${plate.name}</label>
              </li>
            `;
          }).join('');
        }
        ```

      - allow user check/ uncheck an item in list
        ```javascript
        function toggleDone(e) {
          if (!e.target.matches('input')) return;
          const el = e.target;
          const index = el.dataset.index;
          items[index].done = !items[index].done;
          localStorage.setItem('items', JSON.stringify(items));
          populateList(items, itemsList);
        }
        ```

      - handle check/ uncheck all of item in list
        ```javascript
        function toggleAll(event) {
          const elementID = event.target.id;
          const inputFields = document.querySelectorAll('[data-index]');
          if (elementID == 'check') {
            inputFields.forEach(inputField => {
              inputField.checked = true;
            });
          } else if (elementID == 'uncheck') {
            inputFields.forEach(inputField => {
              inputField.checked = false;
            });
          }
        }
        ```

      - remove all of oitem in localstorage
        ```javascript
        function removeAll() {
          const customerConfirm = confirm('are you sure? all tapas will be deleted from menu.');
          if (customerConfirm) {
            localStorage.clear();
            items = [];
            itemsList.innerHTML = '';
          }
        }
        ```

## Putting it all together

```javascript
window.addEventListener('load', init);

function init() {
  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  let items = JSON.parse(localStorage.getItem('items')) || [];
  const checkAll = document.querySelector('#check');
  const unCheckAll = document.querySelector('#uncheck');
  const clearAll = document.querySelector('#clear');
  
  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone);
  checkAll.addEventListener('click', toggleAll);
  unCheckAll.addEventListener('click', toggleAll);
  clearAll.addEventListener('click', removeAll);

  function addItem(event) {
    event.preventDefault();
    const textField = this.querySelector('[name="item"]');
    const text = textField.value;
    const item = {
      name: text,
      done: false
    };

    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
    textField.focus();
  }

  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, index) => {
      return `
        <li>
          <input type="checkbox" data-index="${index}" id="item${index}" ${plate.done ? 'checked' : ''}>
          <label for="item${index}">${plate.name}</label>
        </li>
      `;
    }).join('');
  }

  function toggleDone(e) {
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }

  populateList(items, itemsList);

  function toggleAll(event) {
    const elementID = event.target.id;
    const inputFields = document.querySelectorAll('[data-index]');
    if (elementID == 'check') {
      inputFields.forEach(inputField => {
        inputField.checked = true;
      });
    } else if (elementID == 'uncheck') {
      inputFields.forEach(inputField => {
        inputField.checked = false;
      });
    }
  }

  function removeAll() {
    const customerConfirm = confirm('are you sure? all tapas will be deleted from menu.');
    if (customerConfirm) {
      localStorage.clear();
      items = [];
      itemsList.innerHTML = '';
    }
  }
}
```

## Something cool in the future

 I added three buttons:

 1. check all items
 2. uncheck all items
 3. clear all of item from list
