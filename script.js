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

//Check the List of emails
function checkIPAddress({
//Get IP address

//If exists go to voted page

//Else create new IP address and show voting page
});


$(document).ready( function() {
    $.getJSON( "http://smart-ip.net/geoip-json?callback=?",
        function(data){
            alert (data.host);
        }
    );
});