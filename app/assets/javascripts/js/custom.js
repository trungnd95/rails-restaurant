var customScripts = {
    profile: function () {
     	 var portfolio = $('#portfolio');
		var items = $('.items', portfolio);
		var filters = $('.filters li a', portfolio);

		items.imagesLoaded(function() {
			items.isotope({
				itemSelector: '.item',
				layoutMode: 'fitRows',
				transitionDuration: '0.7s'
			});
		});

		filters.click(function(){
			var el = $(this);
			filters.removeClass('active');
			el.addClass('active');
			var selector = el.attr('data-filter');
			items.isotope({ filter: selector });
			return false;
		});
    },
    fancybox: function () {
        $(".fancybox").fancybox();
    },
    onePageNav: function () {
        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting
            },
            end: function () {
                   //I get fired when the animation is ending
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}

            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
			}
        });

		$("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
    },
    bannerHeight: function () {
        var bHeight = $(".banner-container").height();
        $('#da-slider').height(bHeight);
        $(window).resize(function () {
            var bHeight = $(".banner-container").height();
            $('#da-slider').height(bHeight);
        });
    },
	waySlide: function(){
		  	/* Waypoints Animations
		   ------------------------------------------------------ */


		},
		fitText: function(){
				setTimeout(function() {
				$('h1.responsive-headline').fitText(1.2, { minFontSize: '16px', maxFontSize: '30px' });
				}, 100);
		},
    init: function () {
        customScripts.onePageNav();
        customScripts.profile();
        customScripts.fancybox();
		customScripts.waySlide();
		customScripts.fitText();
        customScripts.bannerHeight();
    }
}
$(document).on('turbolinks:load', function(){
    customScripts.init();
    $('.navbar-brand').on('click', function(){
        $(window).reload();
    });

  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    data = $(this).serialize();
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'JSON',
      data: data,
      success: function(result) {
        var comments =  $('.comments_number').html();
        var comments_number =  parseInt(comments);
        comments_number += 1;
        $('.comments_number').html(comments_number);
        var html = '<div class="comment">';
        html +=  '<div class="review-rating" data-score="' + result.rating + '"></div>';
        html += '<p>' + result.body + '</p>';
        html += '<hr class="comment-hr" />';
        html += '</div>';
        $('.display_comments').prepend(html);
        $('.comment').find('.review-rating').raty({
            readOnly: true,
            score: function(){
              return $(this).attr('data-score');
          },
          path: '/assets/'

      });

      },
      error: function(error) {
        alert(error);
      },
      complete: function(){
        $('#new_comment')[0].reset();
        $('#new_comment').find('input[type="submit"]').removeAttr('disabled');
      }

    })
  });

  $("#new_order").on ('keyup', '#coupon_code', function(){
    var coupon = $(this).val();
    if(coupon == 'CODERSCHOOL')
    {
      $('.result-coupon').html('<p class="text-success">Pefect!!! You will be gave 50% discount in toal</p>');
      var price =  $('.price-food').html();
      $('.price-food').html(Math.ceil(price/2));
    }
    else {
     $('.result-coupon').html('<p class="text-danger">Wrong =( Try again !</p>');
    }
  });

  $("#new_order").on ('change', '#order_number_of_foot_items', function(){
    var number = parseInt($(this).val());
    var price =  parseInt($(this).parent().parent().find('.food_item_price').val());
    $('.price-food').html(number*price);
  });

  $("#new_order").on ('submit', function(){
    $(this).find('input[type="submit"]').removeAttr('disabled');
  })

})
