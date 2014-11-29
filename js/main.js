$(document).on('ready',function(){
	$( ".icon-star" ).click(function() {
	  $(this).closest('.columnas3').toggleClass( "seleccionado" );
	  $(this).toggleClass( "icon-star-2" );

	});

});


$(document).on('ready',function(){
	$( ".icon-cart" ).click(function() {
	  $(this).hide();
	  if(typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Usted ha añadido " + sessionStorage.clickcount + " carritos";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
 
	});

});


function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}