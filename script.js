

$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will call the function for that button the functions are below 
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.sleep-button').click(clickedSleepButton); // 4.) add a button: this links the new button to the function
 })
  
  // 1.) Create a pet_info object with keys "name", "weight", "happiness" and set initial values. 
  //     Set this equal to variable "pet_info" 
  // 4.) add the energy attribute 
  // 5.) energy attribute 
  // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Jet", weight: 12, happiness: 5, energy: 50}; 

    // 2.) Add a behavior to button interaction. When your pet receives a treat, add to its happiness and weight. 
    //     When your pet exercises, reduce its happiness and weight. When your pet plays, add to its happiness and reduce its weight
    function clickedTreatButton() {
      pet_info.happiness = pet_info.happiness + 1; // increase happiness by 1
      pet_info.weight = pet_info.weight + 1;       // increase weight by 1
      showPetMessage("Yum! Thanks for the treat!"); // 6.) the message for step 6
    //----------------------------------------------------------
        // FIRST METHOD .animate()
    //----------------------------------------------------------
      animatePetImage(); // step 7.) method 1 on the button click

    //----------------------------------------------------------
      // SECOND METHOD .fadeToggle() 
    //----------------------------------------------------------
      $(".pet-image").fadeToggle(150).fadeToggle(150);  // step 7.) method 2 adds a quick flash effect on the image when clicked
      document.getElementById('pet-sound').currentTime = 0;  // Play the bark sound extra feature
      document.getElementById('pet-sound').play();      
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      pet_info.happiness = pet_info.happiness + 2; // increase happiness by 2
      pet_info.weight = pet_info.weight - 1;       // lose 1 pound from playing
      showPetMessage("That was fun! Let's play again!"); // 6.) the message for step 6

    //----------------------------------------------------------
        // FIRST METHOD .animate()
    //----------------------------------------------------------
      animatePetImage(); // step 7.) method 1 on the button click

    //----------------------------------------------------------
      // SECOND METHOD .fadeToggle() 
    //----------------------------------------------------------
      $(".pet-image").fadeToggle(150).fadeToggle(150);  // step 7.) method 2 adds a quick flash effect on the image when clicked
      document.getElementById('pet-sound').currentTime = 0;    // Play the bark sound extra feature
      document.getElementById('pet-sound').play();
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      pet_info.happiness = pet_info.happiness - 1; // lose happiness by 1
      pet_info.weight = pet_info.weight - 2;       // lose 2 pounds
      showPetMessage("Phew! That was a workout!"); // 6.) the message for step 6
    
    //----------------------------------------------------------
        // FIRST METHOD .animate()
    //----------------------------------------------------------
      animatePetImage(); // step 7.) method 1 on the button click

    //----------------------------------------------------------
      // SECOND METHOD .fadeToggle() 
    //----------------------------------------------------------
      $(".pet-image").fadeToggle(150).fadeToggle(150);  // step 7.) method 2 adds a quick flash effect on the image when clicked
      document.getElementById('pet-sound').currentTime = 0;   // Play the bark sound extra feature
      document.getElementById('pet-sound').play();
      checkAndUpdatePetInfoInHtml();
    }

    // 4.) add a new action button this is the js for it 
    function clickedSleepButton() {
      pet_info.energy = pet_info.energy + 20;  // 5.) restore energy
      pet_info.happiness = pet_info.happiness + 1;  // happy from rest
      pet_info.weight = pet_info.weight - 0.5; // small weight loss from rest
      showPetMessage("Zzz… I feel rested!"); // 6.) the message for step 6

    //----------------------------------------------------------
        // FIRST METHOD .animate()
    //----------------------------------------------------------
      animatePetImage(); // step 7.) method 1 on the button click

    //----------------------------------------------------------
      // SECOND METHOD .fadeToggle() 
    //----------------------------------------------------------
      $(".pet-image").fadeToggle(150).fadeToggle(150);  // step 7.) method 2 adds a quick flash effect on the image when clicked
      checkAndUpdatePetInfoInHtml();
    }

    function checkAndUpdatePetInfoInHtml() { 
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    // 3.) Fix key bugs to make sure certain key values can't go below zero. (can use conditional). I used two if statements
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if (pet_info.weight < 0) {  // if weight is less than 0
        pet_info.weight = 0;      // set weight to 0
      }
      if (pet_info.happiness < 0) {  // if happiness is less than 0
        pet_info.happiness = 0;   // set happiness to 0
      }
    }
    
    // Updates your HTML with the current values in your pet_info object from step 1
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.energy').text(pet_info['energy']); // 4.) add a button: updates the display function
    }

    // 6.) added the helper function to step 6 which is: 
    // This shows a message from your pet in the #pet-msg HTML element
    // Add a visual notification after each button press with a comment from your pet. 
    // For this requirement you can not use console.log() or alert()
    function showPetMessage(text) {
      $('#pet-msg')
        .stop(true, true)        // cancel any previous animation
        .text(text)              // set the message
        .css('opacity', 0)     // ensure we start fully transparent for step 6.) the message to show up

    //--------------------------------------------------------------------->
        //-- EXTRA FEATURE: .fadeTo(): fade back out message for step 6.) the message to show up  -->
    //--------------------------------------------------------------------->
        .fadeTo(200, 1)        

        .delay(900)              // keep it on screen briefly

    //--------------------------------------------------------------------->
        //-- EXTRA FEATURE: .fadeTo(): fade back out message for step 6.) the message to show up-->
    //--------------------------------------------------------------------->
        .fadeTo(400, 0);       
    }

    //----------------------------------------------------------
        // FIRST METHOD .animate()
    //----------------------------------------------------------
    // 7.) New jQuery method 1: .animate()
    // This moves the pet image slightly left and right to make it "wiggle" happily when clicked.
    function animatePetImage() {
      $('.pet-image')
        .stop(true, true)
        .animate({ left: "10px" }, 100)  // move image slightly right
        .animate({ left: "-10px" }, 100) // move image slightly left
        .animate({ left: "0px" }, 100);  // return to original position
    }
      