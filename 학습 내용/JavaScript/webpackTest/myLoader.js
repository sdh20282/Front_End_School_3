module.exports = function myLoader(item) {
    console.log('hello loader!');

    return item.replace('console.log(', 'alert(');
}