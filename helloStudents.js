'use strict'

// 1. Read the JSON file into a variable called students
const students = require('./students.json');

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker
//forEach loop 
//console.log

students.forEach(student => {
    console.log(`Hello ${student.firstName} ${student.lastName}`);
});
//filter and charAt
// 3. Print out the number of last names starting with the letter D

let filteredArr = students.filter(student => student.lastName.charAt(0)==="D");
console.log("Count of last names starting with D is " + filteredArr.length);

// e.g. Count of last names starting with D is 1