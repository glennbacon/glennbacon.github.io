(function () {
	'use strict';

	// start https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-4-navbar-on-click
	$('.navbar-nav>li>a').on('click', function () {
		$('.navbar-collapse').collapse('hide');
	});
	// end https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-4-navbar-on-click
	// start aos
	AOS.init({
		easing: 'ease-out-back',
		duration: 1000
	});
	// end aos
})();
