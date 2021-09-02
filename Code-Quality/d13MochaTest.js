"use strict";
const assert = require("assert");
const functionsModule = require("./d13codeQuality");
const isVowel = functionsModule.isVowel;
const computeSalesCommission = functionsModule.computeSalesCommission; 
const calcBal = functionsModule.calcBal; 
const calcDowPay = functionsModule.calcDowPay; 
const calcTemp = functionsModule.calcTemp;
const calcDist = functionsModule.calcDist;


describe("isVowel", function () {
    it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
    assert.equal(isVowel("5"), false);
    });
   });


 describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 3500), 70);
    });
    it("tests not salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 3500), 105);
    });
   });


   describe("test of calcBal", function(){
    it("calculates compound interest", function(){
    assert.strictEqual(calcBal(100, 10,1), 110.47130674412968);
    });
    it("calculates compound interest", function(){
    assert.strictEqual(calcBal(10000, 5, 10), 16470.0949769028);
    });
    
});


describe("test of Down Payment", function(){
    it("calculates Down Payment", function(){
    assert.strictEqual(calcDowPay(40000), 2000);
    });
    it("calculates Down Payment", function(){
    assert.strictEqual(calcDowPay(50000), 2500);
    });
    it("calculates Down Payment", function(){
    assert.strictEqual(calcDowPay(100000), 7500);
    });
    it("calculates Down Payment", function(){
    assert.strictEqual(calcDowPay(250000), 10000);
    });
});

describe("test conversion to degree celsius", function(){
    it("converts to degree celsius", function(){
    assert.strictEqual(calcTemp(32), 0);
    });
    it("converts to degree celsius", function(){
    assert.strictEqual(calcTemp(0), -17.77777777777778);
    });
    it("converts to degree celsius", function(){
    assert.strictEqual(calcTemp(212), 100);
    });
    it("converts to degree celsius", function(){
    assert.strictEqual(calcTemp(100), 37.77777777777778);
    });
});

describe("test of distance", function(){
    it("calculates distance ", function(){
    assert.strictEqual(calcDist(0,0,5,5), 7.0710678118654755);
    });
});
