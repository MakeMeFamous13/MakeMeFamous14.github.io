(function () {
	$('.section').height($(window).height());

// 	$(window).resize(function(){
// 		$('.section').height($(window).height());
// });
	$(document).ready(function() {
			$('#fullpage').fullpage({
				verticalCentered: false,
				easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
				// responsiveHeight: 600, //отключается при высоте экрана 600рх
				css3: true,
				scrollOverflow: true,
				scrollOverflowOptions: {
					scrollbars: true,
			        mouseWheel: true,
			        hideScrollbars: false,
			        fadeScrollbars: false,
			        disableMouse: true
				}

			});
		});
	



})();

