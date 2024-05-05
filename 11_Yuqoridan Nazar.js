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
  const newHTML = `<li style="margin: 10px">${item}<button onclick="deletePurchase(this)">delete</button></li>`; // this here is (deletePurchase(this)) is button. 
  list.insertAdjacentHTML('beforeend', newHTML); // puts intered item to the end of the list
};

// item in above code is button

function deletePurchase(ele) {
  console.log(ele.parentElement);
  ele.parentElement.remove();
}

// update qilganda stored itemlar o`chib ketmasligi uchun quyidagi xotiralar mavjud
// Local Storage, Session Storage, Cookies, Cache
// Element yonidagi Application qismida topish mumkin
// Biz itemlarni shu xotiralarga yozsak ham, saqlanadi ammo faqat bizni komputerizmida saqlanadi. Hammada emas.
// Har qanday devicedan kiritilgan itemni saqlash uchun bizga backend kerak


// // Gorizontal Bilim - front, back, database
// // Horizontal Bilim - others: Security, Devops, and others

// // Front End => Back End => Database
// // Database => Back End => Front End