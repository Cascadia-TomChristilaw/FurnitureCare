document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	
	$('#companyLink').click(function() {
		window.open(encodeURI('http://thomasfurniturerepair.com'), '_blank', 'location=yes');
	})
}
var touched, mainCat, subCat;

$(document).ready(function() {	
	$('.icons figure').click(function() {		
		touched = $(this).attr('class').split(' ')[0];
		console.log('touched = ' + touched);
		if (!$(this).hasClass('selected')) {
			$(this).addClass('selected');		
			if ($(this).hasClass('care') || $(this).hasClass('upholstery')) {
				$(this).next().removeClass('visible');
			} else {
				$(this).prev().removeClass('visible');
			}
			if ($(this).parent().hasClass('topIconBox')) {
				mainCat = touched;
				console.log('mainCat = ' + mainCat);
				$('.subIconBox figure').addClass('visible');
			}
			if ($(this).parent().hasClass('subIconBox')) {
				subCat = touched;
				console.log('subCat = ' + subCat);
				console.log('ID to target = ' + subCat + mainCat);
				$('#tutSelectionBox #' + subCat + mainCat).addClass('selectedCategory');				
			}
			$(this).parent().addClass('shrunk');	
		}
		else {
			$('#tutSelectionBox>div').removeClass('selectedCategory');
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

	$('topIconBox').click(function() {

	})
	

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

