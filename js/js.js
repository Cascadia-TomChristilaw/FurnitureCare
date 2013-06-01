$('#categories').live('pageshow', function () {
	$('#categories .icons:first-of-type figure').addClass('visible');
	$('.icons figure').click(function() {
		if (!$(this).hasClass('selected')) {		
			if ($(this).hasClass('care') || $(this).hasClass('upholstery')) {
				$(this).addClass('selected')
					.next().removeClass('visible');
			} else {
				$(this).addClass('selected')
					.prev().removeClass('visible');
			}
			if ($(this).parent().hasClass('topIconBox')) {
				$('.subIconBox figure').addClass('visible');
			}
			$(this).parent().css('display', 'inline-block')
				.css('width', '125px');	
		}	
	});
});