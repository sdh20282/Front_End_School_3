function addComma(num) {
    return num.toString().split('').reverse().map((value, index) => index % 3 === 0 && index !== 0 ? value + ',' : value).reverse().join('');
}

function deleteComma(str) {
    return str.split(',').join('');
}

export { addComma, deleteComma };