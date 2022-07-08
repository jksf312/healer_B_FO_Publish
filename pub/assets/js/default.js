$(function(){ //ready
	ly_sett();
	popup_event();
	tabs();
	dropdown();
});

$(window).resize(function(){
	ly_sett();
});

function ly_sett(){
	var pos_btm_h = $(".pos_bottom_layer").outerHeight();
	$('.contents').css('padding-bottom', pos_btm_h+'px');
};

function popup_event(){
	
};

function tabs(){
	$('.tabs button').click(function(){
		var this_val = $(this).attr('name');
		$(this).parent().addClass('active').siblings().removeClass('active');
		$('#'+this_val).addClass('active').siblings().removeClass('active');
	});
};

function dropdown(){
	$('.dropdown .sel').click(function(){
		$(this).parent().toggleClass('active');
	});
	
	$('.dropdown .opt_item').click(function(){
		var select_txt = $(this).text();
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parents('.dropdown').removeClass('active').find('.sel').text(select_txt);
	});
		
};