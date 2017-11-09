$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		$('.navbar__nav').toggleClass('open');
	});
});

//scroll to nav links

$( '.scrollTo' ).on( 'click', function(e) {
    e.preventDefault();
    var href = $( this ).attr( 'href' );
    $( 'html, body' ).animate( {
        scrollTop: $( href ).offset().top - 81 + 'px'
    }, 500, function() {

    //  hash do adresu (padding do poprawy)    location.hash = href;
    } );
} );

//google maps
function initMap() {
  var uluru = {lat: 53.126360, lng: 23.160219};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
