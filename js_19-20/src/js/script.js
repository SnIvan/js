//banner
$(document).ready(function() {
	var $links = $('.banner__title');

	$links.on('click', function(e) {
		e.preventDefault();
		var $subBanner = $(this).siblings('.subBanner');
		$subBanner.slideToggle();
		if ($(this).hasClass('activeBanner')) {
			$(this).removeClass('activeBanner');
		} else {
			$(this).addClass('activeBanner');
		}
	});
});

//lodash

//all uniq skills
var sortSkills = _.sortBy(_.uniq(_.flatten(_.map(data, 'skills'))));
console.log('sortSkills', sortSkills);

//all uniq names
var sortNames = _.map(_.sortBy(data, 'friends'), 'name');
console.log('sortNames', sortNames);

//all uniq friends
var sortFriends = _.uniq(_.map(_.flatten(_.map(data, 'friends')), 'name'));
console.log('sortFriends', sortFriends);
