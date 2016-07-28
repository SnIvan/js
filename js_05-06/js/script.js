btStart.addEventListener('click', start_click);
btReset.addEventListener('click', reset_click);
for_count.innerHTML = '00:00:00:000';

var count = 0, timerId, go = 0;

function start_click() {

	btStart.removeAttribute('value');
	btStart.setAttribute('value', 'Pause');

	if (go == 0) {

	timerId = setInterval(function() {
	count += 3;

	var hour = Math.floor(count/3600000)%24;
	if (hour < 10) hour = '0' + hour;

	var min = Math.floor(count/60000)%60;
	if (min < 10) min = '0' + min;

	var sec = Math.floor(count/1000)%60;
	if (sec < 10) sec = '0' + sec;

	var mil = count % 1000;
	if (mil < 100) mil = '0' + mil;
	if (mil < 10) mil = '0' + mil;

	var str = hour + ':' + min + ':' + sec + ':' + mil;

	for_count.innerHTML = str;
	}, 1);
	go = 1;

} else {

	clearInterval(timerId);
	go = 0;
	btStart.removeAttribute('value');
	btStart.setAttribute('value', 'Start');
}
}

function reset_click() {
	clearInterval(timerId);
	go = 0;
	count = 0;
	for_count.innerHTML = '00:00:00:000';
}
