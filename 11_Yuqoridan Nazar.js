const form = document.querySelector("#form1");
const input = document.querySelector("#input1");
const list = document.querySelector(".list");

// // to check does it connected
// console.log(form);
// console.log(input);
// console.log(list);

// // hard coding
// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // it prevents to take futher action when 'ok' button is clicked
//   // alert('Submit is done!'); 
//   const newItem = input.value; // gets new item
//  // console.log("new item:", newItem);
//   input.value = ""; // erases
//   input.focus(); // cursor goes to the beginning
// });



form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const newItem = input.value;
  createPurchase(newItem); 
  input.value = ""; 
  input.focus(); 
});

function createPurchase(item) {
  const newHTML = `<li style="margin: 10px">${item}<button onclick="deletePurchase(this)">delete</button></li>`;
  list.insertAdjacentHTML('beforeend', newHTML); // puts intered item to the end of the list
};

function deletePurchase(ele) {
  console.log(ele.parentElement);
  ele.parentElement.remove();
}

