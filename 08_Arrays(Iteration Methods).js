// //To run the code, uncommand each code
// // 08 Arraylarning Iteration metodlari


// // Iteration asosiy methods: forEach, map and filter => immutable
// // Iteration yordamchi methods: reduce, some, every

// // Iteration = looping over a sequence of elements.
// // map yangi arrayni chaqirish uchun kerak
// // map har bir o`qilayotgan value uchun qiymat qaytaradi 

//  //forEach, map and filter

// // map 1
// const list = [1, 4, 7, 9];

// const newList = list.map(ele => ele * ele);
// console.log('newList:', newList);

// // map 2
// const list = [1, 4, 7, 9];

// const newList = list.map((ele, index) => {
//   console.log(`${index} => ${ele}`);
//   return ele * 10;
// });
// console.log('newList:', newList);


// // using operation in map
// const list = [1, 4, 7, 9];

// const newList = list.map((ele, index) => {
//   return ele === 4 ? ele : null; // ele 4ga teng bo`lsa eleni qaytar aks holda nullni qaytar
// }); // above is called ternary operation = has 3 operants(amallar)
// console.log('newList:', newList);

// // filter = only gives what you want, it filters out
// // getting values only we want not unnecessary values(eg, null)
// const newList2 = list.filter((ele, index) => {
//   return ele === 4 ? ele : null; 
//   // return true; it prints only true values, not false 
// }); 
// console.log('newList2:', newList2);


// // // reduce, some, every
// // reduce
// const numbers = [2, 4, 5, 6, 8, 9, 11];

// const result = numbers.reduce((total, curValue, curIndex) => {
//   console.log(`${curIndex}: ${curValue}`);
//   console.log('total: ', total);
//   return total + curValue;
// }, 100); // 0 yozildi nima yozilmadi nima farqi yo`q. it is initial data whihc we want to set
// console.log('result:', result);


// // some & every
// // arrayni malum valuelariga shart qo`yib bittasini bajarsa ham true beradi, bitta sharti ham topilmasa false beradi
// // everyda har bir element shartni bajarishi kerak
// const numbers = [2, 4, 7, 9];

// const result = numbers.some((ele, index) => {
//   console.log(`${index}: ${ele}`);
//   return ele === 1;
// });
// console.log('result:', result);


