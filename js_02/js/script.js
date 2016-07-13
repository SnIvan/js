var firstName = prompt('Insert fisrt name ', '');
var secondName = prompt('Insert second name ', '');
var thirdName = prompt('Insert third name ', '');
var fourthName = prompt('Insert fourth name ', '');
var fifthName = prompt('Insert fifth name ', '');

var arrNames = [];

function pushNames(arrNames){
	arrNames.push(firstName);
	arrNames.push(secondName);
	arrNames.push(thirdName);
	arrNames.push(fourthName);
	arrNames.push(fifthName);
}

pushNames(arrNames);

var userName = prompt('Insert your name ', '');

if (arrNames.indexOf(userName, 0)){
	alert(userName);
} else {
	alert('no name');
}



