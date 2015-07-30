$(document).ready(function(){

	$('.galleryItemColor').hide();

	$('.galleryItemWrapper').hover(function(){
		$(this).find('.galleryItemColor').stop().fadeIn();
	},function(){
		$(this).find('.galleryItemColor').stop().fadeOut();
	});

	$('.navBarScrollWrapper').hide();

	$(window).scroll(function(){
		if($(window).scrollTop() > 400){
			$('.navBarScrollWrapper').slideDown();
		}
		else{
			$('.navBarScrollWrapper').slideUp();			
		}
		if($(window).width() < 767){
			$('.navBarScroll').hide();
		}
		else{
			$('.navBarScroll').show();			
		}
	});


	$('#with-my-template').gCalFlow({
		calid: 'tuckerjeremyw@gmail.com',
		apikey: 'AIzaSyALRJp62wy9XbHSNB_ZjhIq5eVP3tdQugI',
		mode: 'upcoming',
		maxitem: 12,
		auto_scroll: false,
		daterange_formatter: function (start_date, end_date, allday_p) {
			function pad(n) { return n < 10 ? "0"+n : n; }
			console.log(moment().add(6,'days').isAfter(moment(start_date)));
			if(moment().add(6,'days').isAfter(moment(start_date))){
				return pad(moment(start_date).format('dddd'));
			}
			else{
				return pad(start_date.getMonth()+1) + "/" + pad(start_date.getDate());
			}
		}
	});


});