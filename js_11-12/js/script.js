// Carousel

$(function() {

	$('.fcarousel-hider').carousel();

});

// Template

$(document).ready(function() {
	var html = $('#test').html();
	var info = [{
		title: 'Сахань Иван',
		content: 'Студент III курса КНУ'
		
		},
		{
		title: 'Хочу учить форонтенд потому что:',
		itemOne: 'Мне это нравится',
		itemTwo: 'Хорошая зарплата',
		itemThree: 'Сайты нужны сейчас и будут нужны в будущем'

		},
		{
		title: 'Мой контактный телефон',
		content: '+380955960218'
		}
	];

	var content = tmpl(html, {
		data: info
	});

	$('body').append(content);
})
