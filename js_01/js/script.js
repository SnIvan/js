var insertedNumber = prompt('Число', '')
var insertedPow = prompt('Степень ', '');

function power(insertedNumber, insertedPow) {
    var pow = insertedNumber;
    for (var i = 1; i < insertedPow; i++) {
        pow *= insertedNumber;
    }
    return pow;
}

var result = power(insertedNumber, insertedPow);
console.log('result = ', result);
