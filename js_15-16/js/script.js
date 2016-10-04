// search form


$('#header button').click(function(event) {

	searching();
	});

$('#search').keydown(function(event) {

	if(event.keyCode == 13) {
		searching();
	}
});

function searching() { 

	$('img').remove();
	$('p').remove();

	var txt = $('#search').val();

	$('<p>').attr('class', 'result').text('result of your searching ' + txt + ' ...').appendTo('#src_img');
	
	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags="+txt+"&tagmode=any&format=json&jsoncallback=?",
		
		function(data) {

			$.each(data.items, function(i, item) {

				$('<img/>').attr("src", item.media.m).appendTo('#src_img');
				if ( i == 20 ) return false;
			});
		}
	);
};





// proto

function Human() {
	this.name = 'Vika';
	this.age = 17;
	this.sex = 'female';
	this.heigth = 170;
	this.weight = 50;
};


function Worker() {
	this.company = 'Google';
	this.salary = 5000;
	this.work = function() {
		console.log('Работать!!!');
	};
};

Worker.prototype = new Human();
var newWorker = new Worker();

function Student() {
	this.university = 'KPI';
	this.scholarship = 900;
	this.hobby = function() {
		console.log('Смотреть сериалы!!!');
	};
};

Student.prototype = new Human();
var newStudent = new Student();

console.log(newWorker);
newWorker.work();

console.log(newStudent);
newStudent.hobby();

