$(document).ready(function() {
   	 $( "#mood" ).selectmenu();
   	 $( "#cuisine" ).selectmenu();
   	 $("#dietary").selectmenu();
   	 $("#price").selectmenu();
   	 $("#foodType").selectmenu();


$("#mood").on( "click", function() {
  var FoodPlaces= ["Delilahs", "Peter Lugers"];
 	
 	
 	
	 	// var cuisine = $("#cuisine").val();
	 	// var price = $("#price").val();
	 	// var foodType = $("#foodType").val();
	 	// var dietary = $("#dietary").val();
 	if($('mood').val() == "Sad"){
 		console.log(FoodPlaces[0]);
 		$('#foodDecision').append(FoodPlaces[0]);
 	}else{
 		$('#foodDecision').append(FoodPlaces[1])
 		console.log(FoodPlaces[1])
 	}	
});
 	
 	
});