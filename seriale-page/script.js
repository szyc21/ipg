$( document ).ready(function() {
	


	var lastImgNumber = $("#pics img:last-child").attr("no");
	var actualImage = 0;

		setInterval(function(){
			console.log(lastImgNumber);
			$("#pics img").addClass('hidden');
			$('#pics img[no="' + actualImage + '"]').removeClass('hidden');
			actualImage++;

			if (actualImage>=lastImgNumber) {actualImage=0}

		}, 5500)







});