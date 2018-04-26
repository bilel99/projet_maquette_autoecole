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
 * Accordion Style
 */
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/**
 * To Top Page Button floating
 */
var amountScrolled = 300;
$(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
        $('a#back-to-top').fadeIn('slow');
    } else {
        $('a#back-to-top').fadeOut('slow');
    }
});
$('a#back-to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 700);
    return false;
});

/** 
 * Random Text for Loop span block html
 * Static home page Function
 */
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
let text = new Array();
text[0] = "Votre auto école et vraiment cool, vous m'avez permis d'avoir mon permis trés rapidement. Vos moniteur sont vraiment gentil et cool. Merci à vous et bonne continuation :-)";
text[1] = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus id provident voluptatum accusamus maiores delectus molestiae vel consequatur hic fugiat minus nihil saepe ut labore, nemo ducimus tempore sint.";
text[2] = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus id provident voluptatum accusamus maiores delectus molestiae vel consequatur hic fugiat minus nihil saepe ut labore, nemo ducimus tempore sint.";
setInterval(function(){
	let size = text.length;
	let rand = getRandomInt(0, 2);
	document.getElementById('statistics').innerHTML = text[rand];
}, 3000);