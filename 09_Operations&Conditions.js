// // //To run the code, uncommand each code

// // // 09 Operatorlar va Conditionlar


// // // OPERATORS: 
// const a = 1;   // number
// const b = '1'; // string 

// //  ==   'equality' number or string doesnt matter;
// //  ===  'strict equality'number string matters; data type matter in 3-operants(===)
// //  !=   
// //  !== 
// //  => 
// //  &&    a > b && b < 0
// //  ||    a > b || b < 0

// // !!
// // truthy: true, 5, "hello" ...           => true
// // falsy: false, null, 0, '', undefined   => false
// // !!a => returns true

// // ! (not operator)
// // !!a => returns false



// // Ternary Operator
// // varibaleni qiymatini biz qo`ygan conditiondan kelib chiqib qo`yadi 
// const b = 5; 
// const a = b > 0 ? 'positive' : 'negative';
// console.log(a);


// // Nullish Operator
// // nullmi nullmasmi shuni aniqlab beradi/
// const a = 5; 
// // const a = null;
// const b = a ?? 100; // note: ??
// // null bo`lmasa chap tomondagi qiymatni beradi, null no`lsa o`ng tomondagi. 
// console.log(b);



// // CONDITIONS: if and switch

// // if
// const apple = 100;

// if(apple>= 50 && apple < 50) {
//   console.log('Your apple is less than 50:');
// };

// // efficient scripting
// // in else if statements, start with backward, meaning start with the last condition
// if(apple >= 100) {
//   console.log('Your apple is not less than 100:');
// } else if(apple >= 50) {
//   console.log('Your apple is not less than 50 and less than 100:');
// } else if(apple < 50){
//   console.log('Your apple is less than 50:');
// };



// // SWITCH
// const grade = 'A';

// switch(grade) {
//   case 'A':
//     console.log('Your grade is best');
//     break; // must to write
//   case 'B':
//     console.log('Your grade is good');
//     break;
//   case 'C':
//     console.log('Your grade is bad');
//     break;
//   default:
//     console.log('The grade is not registered');
// // when a condition and default merges(qachonki c bo`lsa yoki boshqa holatlarda)
// //case 'C':
// //default:
// //  console.log('The grade is not registered');
// };
