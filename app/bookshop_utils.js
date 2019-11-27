function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(firstName, lastName) {
    getFullName = firstName + " " + lastName
    return getFullName
}

function makeHalfPrice(price) {
    return price * 0.5;

}

 
function countBooks(book) {
    return book.length
}

function isInStock(foundStock) {
    if(foundStock.quantity > 0) {
        return true
    } else {
        return false
    }
}


function getTotalOrderPrice(price, quantity) {
    WithoutVat = price * quantity
    WithVat = WithoutVat * 0.2
    totalPrice = WithoutVat + WithVat
    return totalPrice
}


 


module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice,
    
    
};

