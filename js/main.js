$(document).ready(function(){

   	//Select Menu functionality
     $( "#mood" ).selectmenu();
   	 $( "#cuisine" ).selectmenu();
   	 $("#dietary").selectmenu();
   	 $("#price").selectmenu();
   	 $("#foodType").selectmenu();

//Adds an event listener when a user chooses from select menu


  //declares array of restaurants
  var FoodPlaces= ["Delilahs", "Peter Lugers", "Champs Diner", "Green Symphony", "V Spot", "Dirt Candy",  "Kajitsu", "Strictly Vegetarian Restaurant", " Red Bamboo", "Vegetarian Dim Sum House", "Outpost Cafe",  "Le Village", "Cafe Rakka", "Zestt", "Ikraveit Foods", "Bombay Sandwich", "Andaz Indian Restaurant","Terri",
   "Organique", "Pho Sure", "Love Mamak", "Boulevard Restaurant", "Puerto Viejo", "Tablao", "Bite", "Cafe Tarantin", "Cafe Medi", "Hana Food", "The Graffiti Room", "Van Leeuwen"];
 	
  //adds an if else function to add food place decision to div that gives user the program's decision.
 	
	 	// var cuisine = $("#cuisine").val();
	 	// var price = $("#price").val();
	 	// var foodType = $("#foodType").val();
	 	// var dietary = $("#dietary").val();

  /*food decision algorithm:
    1. USER chooses parameters from drop down menus
    2. The program stores the data when chosen.
    3. The program uses logic to decide which restaurant should be chosen.
    4. The program displays this decision on a GrubDecide div.

  */
  $("form").on('submit', function (e) {
    // $.cookie('mood', $(this).find('[name=mood]').val());
    // $.cookie('cuisine', $(this).find('[name=cuisine]').val());
    // $.cookie('dietary', $(this).find('[name=dietary]').val());
    // $.cookie('price', $(this).find('[name=price]').val());
    // $.cookie('foodType', $(this).find('[name=foodType]').val());
    //stop form from submitting to another page
    e.preventDefault();
    var mood = $("#mood").val();
    var cuisine = $("#cuisine").val();
    var dietary = $("#dietary").val();
    var price = $("#price").val();
    var foodType = $("#foodType").val();

    if(mood == "Sad" && cuisine == "American" && dietary == "No preference" && price == "$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[0]);
      }else if(mood == "Happy" && cuisine == "American" && dietary == "No preference" && price == "$$$$" && foodType =="Steak"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[1]);
      }else if(mood == "No preference" && cuisine == "American" && dietary == "Vegan" && price == "$$" && foodType =="No preference"){
         $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[2]);
      }else if(mood == "Happy" && cuisine == "American" && dietary == "Vegan" && price == "$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[3]);
      }else if(mood == "Happy" && cuisine == "American" && dietary == "Vegan" && price == "$$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[4] );
      }else if(mood == "Happy" && cuisine == "American" && dietary == "Vegan" && price == "$$$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[5]);
      }else if (mood == "Happy" && cuisine == "American" && dietary == "Vegan" && price == "$$$$" && foodType =="Sandwich"){
         $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[6]);
      }else if (mood == "Happy" && cuisine == "Caribbean" && dietary == "Vegan" && price == "$" && foodType =="Sandwich"){
         $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[7]);
      }else if (mood == "Happy" && cuisine == "Caribbean" && dietary == "Vegan" && price == "$$" && foodType =="Sandwich"){
         $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[8]);
       }else if (mood == "Happy" && cuisine == "Vietnamese" && dietary == "Vegan" && price == "$" && foodType =="Sandwich"){
         $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[9]);
       }else if (mood == "Happy" && cuisine == "Vietnamese" && dietary == "Vegan" && price == "$$" && foodType =="Sandwich"){
         $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[20]);
       }else if (mood == "Happy" && cuisine == "Vietnamese" && dietary == "Vegan" && price == "$$$" && foodType =="Sandwich"){
         $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[21]);
       }else if (mood == "Happy" && cuisine == "French" && dietary == "Vegan" && price == "$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[10]);
       }else if (mood == "Happy" && cuisine == "French" && dietary == "Vegan" && price == "$$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[11]);
      }else if (mood == "Happy" && cuisine == "Greek" && dietary == "Vegan" && price == "$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[12]);
      }else if (mood == "Happy" && cuisine == "Greek" && dietary == "Vegan" && price == "$$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[13]);
      }else if (mood == "Happy" && cuisine == "Greek" && dietary == "Vegan" && price == "$$$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[14]);
      }else if (mood == "Happy" && cuisine == "Indian" && dietary == "Vegan" && price == "$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[15]);
      }else if (mood == "Happy" && cuisine == "Indian" && dietary == "Vegan" && price == "$$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[16]);
      }else if (mood == "Happy" && cuisine == "Indian" && dietary == "Vegan" && price == "$$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[17]);
      }else if (mood == "Happy" && cuisine == "Thai" && dietary == "Vegan" && price == "$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[18]);
      }else if (mood == "Happy" && cuisine == "Thai" && dietary == "Vegan" && price == "$$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[19]);
      }else if (mood == "Happy" && cuisine == "Spanish" && dietary == "Vegan" && price == "$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[22]);
      }else if (mood == "Happy" && cuisine == "Spanish" && dietary == "Vegan" && price == "$$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[23]);
      }else if (mood == "Happy" && cuisine == "Spanish" && dietary == "Vegan" && price == "$$$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[24]);
      } else if (mood == "Happy" && cuisine == "Mediterranean" && dietary == "Vegan" && price == "$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[25]);
      }else if (mood == "Happy" && cuisine == "Mediterranean" && dietary == "Vegan" && price == "$$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[26]);
      }else if (mood == "Happy" && cuisine == "Mediterranean" && dietary == "Vegan" && price == "$$$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[26]);
      }else if (mood == "Happy" && cuisine == "Japanese" && dietary == "Vegan" && price == "$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[27]);
      }else if (mood == "Happy" && cuisine == "Japanese" && dietary == "Vegan" && price == "$$" && foodType =="Sandwich"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[28]);
      }else if (mood == "Sad" && cuisine == "American" && dietary == "Vegan" && price == "$$" && foodType =="Ice Cream"){
        $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + FoodPlaces[29]);
      }else{
         $('#foodDecision').html('<h1>' + "GrubDecide's Decision:" + '</h1>' + '<h2>' + "Choose again, please!" +'</h2>')
      }
    
  });

});

 	
 	