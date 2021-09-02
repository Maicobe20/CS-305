"use strict"
module.exports = {isVowel, computeSalesCommission, calcBal,calcDowPay,calcTemp,calcDist}

/**
 * 
 * @param {string} letter letter checking
 * @returns {Boolean} true or false
 */


function isVowel(letter){
    if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
        return true;
    }else{
        return false;
    }
}
/**
 * 
 * @param {number} salesman   salaried or not
 * @param {number} sales      sold
 * @returns {number}         returns commission
 */
function computeSalesCommission(salesman,sales){
    
    
    let commission = 0;

if (salesman == true){
 if (sales < 300){
     return commission
 }
 else if (sales >= 300 && sales <= 500){
    commission = (1/100)* sales;
    return commission
 }
 else {
    commission = (2/100)* sales;
    return commission
     
 }
}
else {
    if(sales < 300){
        return commission
    }
    else if(sales >= 300 && sales <= 500){
        commission = (2/100)*sales;
       return commission
    }
    else {
        commission = (3/100)*sales;
        return commission
    }
}
}
/**
 * 
 * @param {number} p   principal
 * @param {number} r   interest rate
 * @param {number} t   time periods
 * @returns {number}    returns compoud interest
 */
function calcBal(p,r,t){

    let compIntr = 0;
    let n = 12;
    let m = n * t
    
        for(let i=1; i <= m; i++){
    
           compIntr = p *((1 + (r/100)/n)** m)
            }
    
    return compIntr;
    }
/**
 * 
 * @param {number} cost    cost of house
 * @returns {number}      returns downpayment
 */

    function calcDowPay(cost){
   
        let downPay = 0
    
    if (cost < 50000){
       downPay = ((5/100)*cost);
    }
    else if (cost >= 50000 && cost < 100000){
       downPay= (2500+((10/100)*(cost-50000)))
    }
    else if (cost >= 100000 && cost < 200000){
       downPay= (7500+((15/100)*(cost-100000)))
    }else if(cost >= 200000){
       downPay= (5000+((10/100)*(cost-200000)))
    
    }
    return downPay;
    }
    console.log(calcDowPay(250000))
  /**
   * 
   * @param {number} fahr   given fahrenheigt
   * @returns {number}      returns celsius
   */  
    
function calcTemp(fahr){
    let cels = 0
  cels = (fahr-32)*(5/9)
  return cels;
}
/**
 * 
 * @param {number} x1  x coordinate 1
 * @param {number} y1  y coordinate 1
 * @param {number} x2  x coordinate 2
 * @param {number} y2  y coordinate 2
 * @returns {number}    returns distance
 */

function calcDist(x1,y1,x2,y2){
    let dist=0
    dist = Math.sqrt((( x2 - x1 )** 2) + (( y2 - y1 )** 2))
    return dist;
}