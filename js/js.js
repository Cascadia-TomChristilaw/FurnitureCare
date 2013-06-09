$(document).ready(function() {	
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
			$(this).parent().addClass('shrunk');	
		}
		else {
			$(this).removeClass('selected');
			$(this).parent().removeClass('shrunk')
				.next().removeClass('shrunk')
				.children().removeClass('selected');
		}	
	});
	

	$('#photos div.thumbs img').click(function() {
		$('#photos div.imgView').empty();
		$(this).clone().appendTo('#photos div.imgView');
	});
	
	$(document).delegate("#categories", "pagebeforeshow", function() {		
		$('#categories .icons:first-of-type figure').addClass('visible');
		$('#categories .icons:last-of-type figure').removeClass('visible');
		$('.icons').removeClass('shrunk');
		$('figure').removeClass('selected');
	});	
});

