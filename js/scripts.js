$(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#top']").on('click', function(event) {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){
     
            if(hash == '#top'){
                window.location.hash = '';
            } else {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;                
            }

        });
    });


    $('.navbar-collapse li').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    
    $(window).scroll(function() {
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
                if (pos < winTop + 600) {
                    $(this).addClass("slide");
                }
        });
    });

    $("#contact-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 900, function(){
            window.location.hash = "contact";
        });
    });


    // CONTACT FORM

    $("#contact-form").submit(function(event) {

        $.ajax({
                type: "POST",
                url: "php/form_send.php",
                data: $(this).serialize(),
            }).done(function(data) {
                $("#msgSubmit").removeClass("hidden");
            }).fail(function(data) {
                alert(data);
            });

        $(this)[0].reset();  // clear form
        event.preventDefault(); // avoid to execute the actual submit of the form.
    });

})


// GOOGLE MAPS

var loc = new google.maps.LatLng(33.8110243,-84.4223106);

function initialize() {
var mapProp = {
    center:loc,
    zoom:12,
    scrollwheel:false,
    draggable:false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
    };

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
    position:loc,
    // animation:google.maps.Animation.BOUNCE
    });

marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:"<strong>Mojo Climbing &amp; Fitness</strong> <br>at Atlanta Rocks!"
  });

infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', initialize);




