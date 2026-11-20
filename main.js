const form = document.querySelector('#form1');
const input = document.querySelector('#input1');
const list = document.querySelector('.list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newItem = input.value;
  createPurchase(newItem);
  input.value = "";
  input.focus();
});

function createPurchase(item) {
  const newHTML = `<li style="margin: 10px;">${item} <button onclick="deletePurchase(this)">Delete</button></li>`;
  list.insertAdjacentHTML('beforeend', newHTML);
};

function deletePurchase(ele) {
  console.log(ele.parentElement);
  ele.parentElement.remove();
};

// Local Storage, Session Storage, Cookies, Cache storage