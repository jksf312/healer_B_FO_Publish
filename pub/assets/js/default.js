$(function(){ //ready
	ly_sett();
	popup_event();
	tabs();
	dropdown();
	signature();
});

$(window).resize(function(){
	ly_sett();
});

function ly_sett(){
	var pos_btm_h = $(".pos_bottom_layer").outerHeight();
	$('.contents').css('padding-bottom', pos_btm_h+'px');
};

function popup_event(){
	$('.popup .pop_close').click(function(){
		$(this).parents('.popup').removeClass('active');
	});
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

function signature(){
	var sign_El = $('.signature_item');
	if(sign_El.length > 0) {
		$('.signature_item').jqSignature();
		$('.signature_item').on('jq.signature.changed', function() {
			sign_El.find('.placeholder').hide();
		});
	}
	$('.signature_wrap .btn_reset').click(function(){
		$('.signature_item').jqSignature('clearCanvas');
		sign_El.find('.placeholder').show();
	});
	
}