$(document).ready(function(){

	//  Get the modal
	var modal = document.getElementsByClassName("modal")[0];

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = $('.myImg');
	var modalImg = $(".modal-content");
	var captionText = document.getElementsByClassName("caption")[0];
	$(".myImg").click(function(){
	    modal.style.display = "block";
	    var newSrc = this.src;
	    modalImg.attr('src', newSrc);
	    captionText.innerHTML = this.alt;
	});

	// Close the modal when user clicks on window

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

}); // ready function closed