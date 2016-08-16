$(document).ready(function() {
   	//Select Menu functionality
     $( "#mood" ).selectmenu();
   	 $( "#cuisine" ).selectmenu();
   	 $("#dietary").selectmenu();
   	 $("#price").selectmenu();
   	 $("#foodType").selectmenu();

//Adds an event listener when a user chooses from select menu
$("#mood").on( "click", function() {

  //declares array of restaurants
  var FoodPlaces= ["Delilahs", "Peter Lugers"];
 	
  //adds an if else function to add food place decision to div that gives user the program's decision.
 	
	 	// var cuisine = $("#cuisine").val();
	 	// var price = $("#price").val();
	 	// var foodType = $("#foodType").val();
	 	// var dietary = $("#dietary").val();

  /*food decision algorithm:
    1. USER chooses what mood they have currently
    2. The program stores the data when chosen.
    3. The program uses logic to decide which restaurant should be chosen.
    4. The program displays this decision on a GrubDecide div.

  */

 	if($('mood').val() == "Sad"){
 		console.log(FoodPlaces[0]);
 		$('#foodDecision').append(FoodPlaces[0]);
 	}else{
 		$('#foodDecision').append(FoodPlaces[1])
 		console.log(FoodPlaces[1])
 	}	
});
 	
 	
});