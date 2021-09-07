module.exports = {addBook, findTitle, findAuthor, findIds };

// const library= [];

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];
// const titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];
//     const authors = ["Bill Gates", "Steve Jobs", "Suzanne Collins"];
//    const ids = [1254, 3245, 4264];
/**
 * 
 * @param {string} title 
 * @param {string} author 
 * @param {number} libraryId 
 * @returns 
 */
function addBook(title,author,libraryId){
    let obj = {};

    obj.title = title;
    obj.author = author;
    obj.libraryID = libraryId;
    
    console.log(library.push(obj));
    
 return obj;
}

// addBook("mike","efi",123);
// addBook("Winta","filli",345)
// addBook("smega","shizzi",567)
// console.log(library);

/**
 * 
 * @returns returns list of titles
 */
function findTitle(){
let titles = []

for (let key of library){
    titles.push(key.title)
}
return titles.sort();
}

// console.log(findTitle())

/**
 * 
 * @returns returns list of authors
 */
function findAuthor(){
    let authors = []
    
    for (let key of library){
        authors.push(key.author)
    }
    return authors.sort();
}
    // console.log(findAuthor())

/**
 * 
 * @returns returns Library Id's
 */
function findIds(){
    let ids = []
    
    for (let key of library){
        ids.push(key.libraryID)
        
    }
    return ids;
}
// console.log(findIds())


    