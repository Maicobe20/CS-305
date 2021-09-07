module.exports = {addBook, findTitle, findAuthor, findIds };

const library= [];
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

 return library.push(obj);
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
        ids.push(key.libraryId)
    }
    return ids.sort();
}
// console.log(findIds())


    