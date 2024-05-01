// //To run the code, uncommand each part first. Total 3 parts.

// // Array va uning xususiyatlari
// // Arraylarda index va value tushunchasi
// // Arraylaring state propertilari
// // Arraydago odatiy metodlar


// // PART 1 Array va uning xususiyatlari
// // Array - o`zining ichki tartibiga ega bo`lgan maxsus object.
// // hosil qilinsiga ko`ra 2 xil, literal & constructor

// //literal usuli
// const list = [1, 2, 3, 7, 5];
// console.log(`list:`,list);

// // constructor usuli
//  const list2 = new Array('apple', 'cherry', 'banana');
//  console.log(`list2:`, list2);


// // // Part 2 - Arraylarda index va value tushunchasi
//  const fruits = ['apple', 'melon', 'cherry', 'banana']
//  console.log(`fruits:`, fruits);
 
//  // Value: 'apple', 'melon', 'cherry', 'banana'
//  // index: 0, 1, 2, 3
//  // JavaScript arrays don't support negative indexes.

//  const fruit = fruits[0];
//  console.log('fruit:', fruit);

//  // biz bir arrayda turli typedagi qiymatlari saqlashimiz mumkin
//  const mixed = ['apple', true, 3];
//  console.log(`mixed:`, mixed);

// // to change values
// const mevalar = ['apple', 'melon', 'cherry'];
// console.log(`avval: `, mevalar);

// mevalar[0] = 'dates';
// console.log(`keyin: `, mevalar);


// // // PART 3 Property(only 1, length) & Methods(many, Regular-common) 
// // Property: length; 
// const mevalar = ['apple', 'melon', 'cherry'];
// const size = mevalar.length;
// console.log(size);

// // agar 3ta valuega ega bo`lgan arrayning 5-indexiga item qo`shsak unda 4 index avtomak "empty" bo`lib saqlanadi.
// // buni oldini olish uchun push()dan foydalanamiz
// // push(), pop(). unshift(), shift(), sort(), reverse => mutable - libale to change
// mevalar.push('lemon'); // oxiridan qo`shadi
// mevalar.unshift('cherry'); // boshidan qo`shadi
// mevalar.pop(); // oxirgi itemni o`chiradi
// mevalar.shift(); // boshidagi itemni o`chiradi

// const list2 = [5, 3, 6, 1, 7, 0];
// list2.sort(); // sorts number, cons: it sorts based on first digit. Eg: it puts 21 before 3
// list2.reverse(); // reverse the list
// console.log(list2);

// // if array has string, num, boolean, it sorts with num, string. (boolean is also considered as string)
// const list2 = [5, 3, true, "banana", 'zed', 'cherry', 6, 1, 7, 0];
// list2.sort(); // sorts number, cons: it sorts based on first digit. Eg: it puts 21 before 3
// console.log(list2);


// // includes, indexOf(), toString(), join() => immutable (does not change array values)
// const mevalar = ['apple', 'melon', 'cherry'];
// mevalar.includes('cherry'); // check if an item is in the list
// mevalar.indexOf('cherry'); // check index of an item
// const result = mevalar.toString(); // chamges all item data types to string
// console.log(typeof result);

// const result2 = mevalar.join("+"); // joinni toStringdan faqri: joinda qo`shimcha mantiq yozishimiz mumkin. Eg: mevalar.join("+"), puts + ding between values.
// console.log(result2);
// console.log(typeof result2);


// // slice(), => immutable 
// const mevalar = ['apple', 'melon', 'cherry', 'watermelon', 'banana'];
// const newList = mevalar.slice(1,2); // = [1, 2) .slice(inclusive, exclusive) 
// console.log("newList:", newList);

// // splice(), => mutable
// mevalar.splice(1, 2); // delets y elements starting from x-index
// mevalar.splice(1, 0, "MIT"); // adds "MIT" to the index-1
// mevalar.splice(1, 1, "MIT"); // adds "MIT" to the index-1, also deletes 2nd index
// console.log(mevalar);



// //concat(); => immutable
// const mevalar = ['apple', 'melon', 'cherry', 'watermelon', 'banana'];
// const numbers = [1, 4, 7, 9];
// const newList = mevalar.concat(numbers); // joins two or more arrays
// console.log(mevalar);
// console.log(newList);


