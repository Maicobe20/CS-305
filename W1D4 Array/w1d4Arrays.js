module.exports = {maxOfThree, sum, multiply,findLongestWord,scoreExams,reverseArray,reverseArrayInPlace};




// Question 1

function maxOfThree(a,b,c){
    if (a >= b && a >= c){
        return a;
    }
    else if(b >= a && b >= c){
        return b;
    
    }
    else {
        return c;  
    }
}
// console.log(maxOfThree(1,5,3))

// Question 2a

function sum(array){
    let sum = 0
for (let key of array){
    sum += key;
}
return sum
}
// Question 2b
function multiply(array){
    let multi = 1;
    for(let key of array){
        multi *= key
    }
    return multi;
}

// console.log(sum([1,2,3,4]))
// console.log(multiply([1,2,3,4]))


// Question 3 

function  findLongestWord(letters){
  let leng = 0
  let longest;
 
    for(let i = 0; i < letters.length; i++){
        if (letters[i].length > leng){ 
            leng = letters[i].length
            longest = letters[i]
        }

    }
    return longest.length;
}



// Question 4

function reverseArray(list){
    let revArr =[];
    for (let i = (list.length - 1); i >= 0; i--){
        revArr.push(list[i]);
    }
    return revArr;
}

// // console.log(reverseArray([1,2,3,4,5]));
let arrayValue = [1, 2, 3, 4, 5];
function reverseArrayInPlace(arrayValue){
    let revArrInPl = [];
for (let i =(arrayValue.length - 1); i >= 0; i--){
    revArrInPl.push(arrayValue[i])
}
return revArrInPl;
}

// console.log(reverseArray(["A","B","c","d"]));
 console.log(reverseArrayInPlace(arrayValue));
//  Question 5

function scoreExams(studentAnswers,correctAnswers){
    let score = [];
    let counter;
    for (let key of studentAnswers){
        counter = 0
        for (let i = 0; i <= (key.length -1) ; i++){
              if (key[i] == correctAnswers[i]){
                  counter++;
                
              }
             
        }
        score.push(counter)
    }
    return score;
}
// console.log(scoreExams([[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]],[3, 1, 2,4]))                                                          