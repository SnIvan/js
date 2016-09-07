//localStorage
'use strict'

var form = {

	questions: [{
		'name': 'q0',
		'title': '1. 55 times 4 = ',
		'id':['q0a0','q0a1','q0a2'],
		'answers': ['230', '220', '165'],
		'correct': 'q0a1'
	}, {
		'name': 'q1',
		'title': '2. 876 times 4 = ',
		'id':['q1a0', 'q1a1', 'q1a2'],
		'answers': ['3500', '3508', '3504'],
		'correct': 'q1a2'
	}, {
		'name': 'q2',
		'title': '3. 5443 times 3 = ',
		'id':['q2a0','q2a1', 'q2a2'],
		'answers': ['15789', '16329', '17239'],
		'correct': 'q2a1'
	}]
}

// write our variable into localStorage

try {

	var formStr = JSON.stringify(form);
	localStorage.setItem('programTest', formStr);

} catch (e) {

	alert(e);
}

// get variable from localStorage

try {
	var formLocalStorage = localStorage.getItem('programTest');
	formLocalStorage = JSON.parse(formStr);

} catch (e) {

	alert(e);
}

// Template

var html = $('#test').html();
var content = tmpl(html, formLocalStorage);
$('body').append(content);

// Show modal


$(document).ready(function(){
	$('#check').modalWindow();
});