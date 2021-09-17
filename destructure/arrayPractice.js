"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests


function doubleNums(array){
    return array.map((item) => item * 2);
}

function doubleAges(array){

}

function filterEven(array){
    return array.filter((item) => item % 2 == 0);
}

function filterOver10(array) {
    return array.filter((item) => item.age > 10);
}

function findEvenNum(array){
    return array.find((item) => item % 2 == 0);
}

function findEvenAge(array){
    return array.find((item) => item.age % 2 == 0);
}

