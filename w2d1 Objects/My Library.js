const books= [];
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
    obj.libraryId = libraryId;

 return books.push(obj);
}

addBook("mike","efi",123);
addBook("Winta","filli",345)
addBook("smega","shizzi",567)
console.log(books);

/**
 * 
 * @returns returns list of titles
 */
function findTitle(){
let titleList = []

for (let key of books){
    titleList.push(key.title)
}
return titleList.sort();
}

console.log(findTitle())

/**
 * 
 * @returns returns list of authors
 */
function findAuthor(){
    let authorList = []
    
    for (let key of books){
        authorList.push(key.author)
    }
    return authorList.sort();
}
    console.log(findAuthor())

/**
 * 
 * @returns returns Library Id's
 */
function findIds(){
    let idList = []
    
    for (let key of books){
        idList.push(key.libraryId)
    }
    return idList.sort();
}
console.log(findIds())


    