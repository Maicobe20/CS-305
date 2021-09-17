"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { topSalary, getDateAgo }; //add all of your function names here that you need for the node mocha tests


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function topSalary(salaries) {
  if (Object.entries(salaries).length <= 0) return null;
  let name = "";
  return Object.entries(salaries).reduce((acc, cur) => {
    if (cur[1] > acc) {
      acc = cur[1];
      name = cur[0];
    }
    return name;
  }, Object.entries(salaries)[0][1]);
};


  function getDateAgo(date, days) {
    
    let mik = JSON.parse(JSON.stringify(user));
      
  }