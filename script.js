// -------CHA # 14 - 16-----------

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// Answer--------

// let studentName = [];

// console.log(studentName);


// 2. Declare an empty array using JS object notation to store
// student names in future

// Answer---------

// let studentNamesObject = new Array();

// console.log(studentNamesObject);


// 3. Declare and initialize a strings array

//Answer--------

// let newArray = ["Aly", "sara", "sana"];

// console.log(newArray);


// 4. Declare and initialize a numbers array.

//Answer-------

// let newNum = [2, 3, 4, 5];

// console.log(newNum);


// 5. Declare and initialize a boolean array.

//Answer-------

// let booleanArray = ["true", "false", "true", "false"];

// console.log(booleanArray);


// 6. Declare and initialize a mixed array.

//Answer---------

// let mixedArray = ["zarnab", 26, "Islamabad", 1997];

// console.log(mixedArray);


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

//Answer--------

// let qualifications = ["SSC", "BSC", "HSC", "BS", "BCOM", "MS", "M.PHIL", "PHD"];

// console.log(qualifications);


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// qualifications in your browser like:

//Answer--------

// let student_Names = ["Michael", "John", "Tony"];
// let student_score = [320, 230, 480];
// let totalMarks = 500;
// for (let i = 0; i < student_Names.length; i++) {
//     let percentage = (student_score[i] / totalMarks) * 100;
//     console.log(`Score of ${student_Names[i]} is ${student_score[i]}. Percentage: ${percentage.toFixed(2)}%`);
// }



// 9. Initialize an array with color names. Display the array
// elements in your browser.

//Answer--------

// let colorsName = ["white", "blue", "brown", "yellow"];

// console.log(colorsName);



// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

//Answer-------

// let colors = ["white", "blue", "brown", "yellow"];
// let newcolor = prompt("What color do you want to add to the beginning?");
// colors.unshift(newcolor);
// console.log(colors);


// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

//Answer-------

// let color = ["white", "blue", "brown", "yellow"];
// let addColor = prompt("What color do you want to add to the end?");
// color.push(addColor);
// console.log(color);


// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

//Answer-------

// let color_ = ["white", "blue", "brown", "yellow"];
// let color_1 = prompt("Enter the first color to add at the beginning:");
// let color_2 = prompt("Enter the second color to add at the beginning:");
// color_.unshift(color_1, color_2);
// document.write("Updated Array: " + color_.join(", "));


// d. Delete the first color in the array. Display the updated
// array in your browser.

//Answer------

// let color_ = ["white", "blue", "brown", "yellow"];

// color_.shift(color_);
// console.log(color_);


// e. Delete the last color in the array. Display the updated
// array in your browser.

//Answer-------

// let color_1 = ["white", "blue", "brown", "yellow"];

// color_1.pop(color_1);
// console.log(color_1);


// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

//Answer--------

// let color = ["white", "blue", "brown", "yellow"];
// let indexToAdd = parseInt(prompt("At which index do you want to add a color?"));
// let newColor = prompt("Enter the color name you want to add:");
// colors.splice(indexToAdd, 0, newColor); 
// document.write("Updated Array:  + colors.join(", " )") ;

// g. Ask the user at which index hx he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

//Answer--------

// let colors = ["white", "blue", "brown", "yellow"];
// let userColor = prompt("At which index do you want to delete color(s)?");
// colors.unshift(userColor);
// let indexToDelete = parseInt(prompt("At which index do you want to delete color(s)?"));
// let numberToDelete = parseInt(prompt("How many colors do you want to delete?"));
// colors.splice(indexToDelete, numberToDelete);
// document.write(colors.join(", "));


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

//Answer--------

// let arr = ["monitor", "mouse", "printer", "keyboard"];
// for (let i = 0; i < arr.length; i++) {
//     document.write(`Out: <br> ${arr[i]} <br>`);
// }


// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

//Answer-------

// let arr = [];
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");

// for (let i = arr.length - 1; i >= 0; i--) {
//     document.write(`Out: <br> ${arr[i]} <br>`);
// }

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

//Answer-------

// let phone = ["Apple","Samsung","Motorola","Nokia","Sonay & Haier "];
// document.write(phone);



//----------------------------------------------------//-----------------------

