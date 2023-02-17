function checkEvenOdd(i) {
    return i % 2 === 0;
}

var i = 3;
if (checkEvenOdd(i)) {
    console.log('Pair');
} else {
    console.log('Impair');
}
module.exports = checkEvenOdd


