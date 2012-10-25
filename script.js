if (window.location.href.indexOf('#') != -1)
	window.location = "./";


//Load the object of snacks to a list
function populateSnackList ({

});

//Submit snack vote to object
function writeSnack({
});

//Write vote to Snack and send to voted page
function voteSnack({

});




$(document).ready( function() {
//Get IP address
	$.getJSON( "http://smart-ip.net/geoip-json?callback=?",
        function(data){
            alert (data.host);
        }
    );

//If exists go to voted page

//Else create new IP address and show voting page
});