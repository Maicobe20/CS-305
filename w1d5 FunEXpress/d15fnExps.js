module.exports = {double, times100, myMap };

/**
 * 
 * @param {number} n   
 * @returns {number}   returns double of the input
 */
function double(n){
    return n*2
}
/**
 * 
 * @param {number} number 
 * @returns {number}     returns 100 times the input
 */
function times100(number){
    return 100* number
}
/**
 * 
 * @param {arr} arr
 * @param {fun} function
 * @returns  arr applied by the function param
 */

function myMap(arr, fun) {
    let newArr = [];
    for (let ele of arr) {
      newArr.push(fun(ele));
    }
    return newArr;
  }
  
//   console.log(myMap([1, 2, 3], double));
//   console.log(myMap([1, 2, 3], times100));
  
console.log(
    myMap([1, 2, 3],num => num * 3)
    
  );
// // console.log(myMap([1, 2, 3], double));
// // console.log(myMap([1, 2, 3], times100));

// console.log(myMap([1, 2, 3], function(num) {return num * 3}))
