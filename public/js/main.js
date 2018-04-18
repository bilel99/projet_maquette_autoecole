function myMap()
{
  	myCenter=new google.maps.LatLng(41.878114, -87.629798);
  	var mapOptions= {
    	center:myCenter,
    	zoom:12, scrollwheel: false, draggable: false,
    	mapTypeId:google.maps.MapTypeId.ROADMAP
  	};
  	var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  	var marker = new google.maps.Marker({
    	position: myCenter,
  	});
  	marker.setMap(map);
}

// Modal Image Gallery
function onClick(element) {
  	document.getElementById("img01").src = element.src;
  	document.getElementById("modal01").style.display = "block";
  	var captionText = document.getElementById("caption");
  	captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}


/**
 * Form animate the span placeholder
 */
/* ----------------------------------------
  - Function
  ------------------------------------------- */
  function creativeinputs() {
	$("#contact input, #contact textarea").each(function() {
		$(this).addClass('populated');
	});
}
/* ----------------------------------------
- Focus - Animating the labels on input focus
------------------------------------------- */
$("#contact input, #contact textarea").focusin(function() {
	$(this).removeClass('populated');
});

$("#contact input, #contact textarea").focusout(function() {
	if ($(this).val() != '') {
		$(this).addClass('populated');
	} else {
		$(this).removeClass('populated');
	}
});

/* ----------------------------------------
- On load
------------------------------------------- */
creativeinputs();

/* ----------------------------------------
- On Document ready
------------------------------------------- */
$(document).ready(function() {
	creativeinputs();
});

/**
 * Carousel OWL Carousel Library
 */
/*$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		center: true
	});
});*/
