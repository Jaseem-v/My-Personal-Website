$(window).on("load",function(){
	$(".loader-wrapper").fadeOut("slow");
  });





// skills //
function skill(){

	setTimeout(function(){
	$('.skill-per').each(function () {
		var $this = $(this);
		var per = $this.attr('per');
		$this.css("width", per + '%');


		$({ animatedValue: 0 }).animate({ animatedValue: per }, {
			duration: 1000,
			step: function () {
				$this.attr('per', Math.floor(this.animatedValue) + '%');
			},
			complete: function () {
				$this.attr('per', Math.floor(this.animatedValue) + '%');
			}
		});
	
	});

},1000);
}

// menu-tab


(function () {

	'use strict';



	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var getHeight = function () {
		var extraHeight = 0;

		if (isMobile.any()) extraHeight = 50;

		setTimeout(function () {
			$('#profile-main').stop().animate({
				'height': $('.profile-tab-content.active').height() + extraHeight
			});
		}, 200)
	};


	var tabContainer = function () {
		getHeight();
		$(window).resize(function () {
			getHeight();
		})
	};

	var tabClickTrigger = function () {
		$('.profile-tab-menu a').on('click', function (event) {
			event.preventDefault();
			var $this = $(this),
				data = $this.data('tab');

			// add/remove active class
			$('.profile-tab-menu li').removeClass('active');
			$this.closest('li').addClass('active');

			$('.profile-tab-content.active').addClass('animated slideOutUp');

			setTimeout(function () {
				$('.profile-tab-content.active').removeClass('active slideOutUp slideInUp');
				$('.profile-tab-content[data-content="' + data + '"]').addClass('animated slideInDown active');
				getHeight();
			}, 600);


		})
	};

	// Document on load.
	$(function () {
		tabContainer();
		tabClickTrigger();

	});


}());


// portofolio-filter

$(document).ready(function () {


    let $btns = $('.portfolio .button-group button');


    $btns.click(function (e) {

        $('.portfolio .button-group button').removeClass('active');
		e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.portfolio .row').isotope({
            filter: selector
        });

        return false;
	})
});



// portofolio-color-change


function BgColorChange(color) {
	const colorChange = document.querySelector('#profile-main')
	colorChange.style.background = color;
}


// magnificPopup


$('.portfolio-items .our-project .img .text-popup-link').magnificPopup({
	type:'image',
	gallery:{
		enabled:true
	}
})

