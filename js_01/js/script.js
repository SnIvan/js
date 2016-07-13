var insertedNumber = prompt('Число', '')
var insertedPow = prompt('Степень ', '');

function power(insertedNumber, insertedPow) {
    if (insertedPow == 0){
    	var pow = 1;
    } else{
    	var pow = insertedNumber;
    	for (var i = 1; i < insertedPow; i++) {
        pow *= insertedNumber;
    	}
	}
    return pow;
}

var result = power(insertedNumber, insertedPow);
console.log('result = ', result);
