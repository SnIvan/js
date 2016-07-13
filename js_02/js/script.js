var firstName = prompt('Insert fisrt name ', '');
var secondName = prompt('Insert second name ', '');
var thirdName = prompt('Insert third name ', '');
var fourthName = prompt('Insert fourth name ', '');
var fifthName = prompt('Insert fifth name ', '');

var arrNames = [];
var n = 5;

function pushNames(arrNames){
	arrNames.push(firstName);
	arrNames.push(secondName);
	arrNames.push(thirdName);
	arrNames.push(fourthName);
	arrNames.push(fifthName);
}
pushNames(arrNames);

console.log(arrNames); 

var userName = prompt('Insert your name', ''); 

for (n = 0; n < arrNames.length; n++) { 
	if (userName == arrNames[n]) { 
		var result = true; 
		break;
	} else { 
		result = false; 
	} 
} 

if (result === true) { 
	alert(userName + ', вы успешно вошли!'); 
} else { 
	alert('Wrong name!'); 
}


