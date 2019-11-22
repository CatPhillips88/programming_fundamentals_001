function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName (firstName, lastName) {
   getFullName = firstName + " " + lastName
   return getFullName
}
function makeHalfPrice(price) {
    return price * 0.5;
   
}

// const book = ['Harry Potter', '1984', 'The Prince', 'After Sun', 'Funny Bones']

function countBooks(book) {
    
}



module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks
};

