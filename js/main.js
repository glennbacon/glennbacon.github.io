(function () {
	'use strict';
	// start particle
	window.onload = function () {
		Particles.init({
			// normal options
			selector: '.particle-bg',
			maxParticles: 55,
			minDistance: 175,
			speed: 0.3,
			connectParticles: true,
			sizeVariations: 1,
			color: ['6bf6fb', '69f3fb', '52cbf9', '#55cef5'],
			// options for breakpoints
			responsive: [{
				breakpoint: 992,
				options: {
					maxParticles: 40,
					minDistance: 175,
					speed: 0.3,
					connectParticles: true,
					sizeVariations: 1,
					color: ['6bf6fb', '69f3fb', '52cbf9', '#55cef5'],
				}
			}, {
				breakpoint: 768,
				options: {
					maxParticles: 35,
					minDistance: 175,
					speed: 0.3,
					connectParticles: true,
					sizeVariations: 1,
					color: ['6bf6fb', '69f3fb', '52cbf9', '#55cef5'],
				}
			}, {
				breakpoint: 576,
				options: {
					maxParticles: 25,
					minDistance: 175,
					speed: 0.3,
					connectParticles: true,
					sizeVariations: 1,
					color: ['6bf6fb', '69f3fb', '52cbf9', '#55cef5'],
				}
			}]
		});
	};
	// end particle
	// start canvas size http://jsfiddle.net/PQS3A/7/
	let canvas = document.querySelector('canvas');
	fitToContainer(canvas);

	function fitToContainer(canvas) {
		canvas.style.width = '100%';
		canvas.style.height = '100%';
		canvas.width = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;
	}
	// end canvas size http://jsfiddle.net/PQS3A/7/
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
