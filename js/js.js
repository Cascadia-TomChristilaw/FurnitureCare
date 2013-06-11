document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	
	$('#companyLink').click(function() {
		window.open(encodeURI('http://thomasfurniturerepair.com'), '_blank', 'location=yes');
	})
}

$(document).ready(function() {	
	$('.icons figure').click(function() {
		if (!$(this).hasClass('selected')) {
			$(this).addClass('selected');		
			if ($(this).hasClass('care') || $(this).hasClass('upholstery')) {
				$(this).next().removeClass('visible');
			} else {
				$(this).prev().removeClass('visible');
			}
			if ($(this).parent().hasClass('topIconBox')) {
				$('.subIconBox figure').addClass('visible');
			}
			$(this).parent().addClass('shrunk');	
		}
		else {
			$(this).removeClass('selected');
			if ($(this).hasClass('care') || $(this).hasClass('upholstery')) {
				$(this).next().addClass('visible');
			} else {
				$(this).prev().addClass('visible');
			}
			if ($(this).parent().hasClass('topIconBox')) {
				$('.subIconBox figure').removeClass('visible selected')
				.parent().removeClass('shrunk');
			}
			$(this).parent().removeClass('shrunk');
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

