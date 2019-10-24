var game = [ 
	// question 1 
	{q: "Where was Dale Cooper born and raised?", 
	o: ["Missouri", "Oregon", "Indiana", "Pennsylvania"],
	a: "Pennsylvania",
	ff: "He was a member of the Boy Scouts and lived in Philadelphia."}, 
    //

	// question 2 
	{q: "What is the population of Twin Peaks?", 
	o: ["5,021", "5,201", "51,201", "51,101"],
	a: "51,201",
	ff: "ABC executives were allegedly worried that TV shows in rural settings didn't attract viewers, so they added another digit onto the end so the population swelled to 51,201."}, 
	// https://www.vulture.com/2017/05/surprising-twin-peaks-trivia.html

	// question 3 
	{q: "What is the name of the hotel Dale stay's at in Twin Peaks?",
	o: ["the Great Falls Lodge", "the Grand Northern Lodge", "the Great Northern Hotel", "Salish Lodge"],
	a: "the Great Northern Hotel",
	ff: ""}, 

	// question 4 
	{q: "Who does Dale speak to everyday but we never see?", 
	o: ["Laura", "Donna", "Diane", "Bob", "Diane"],
	ff: "It's the first word spoken by Dale in the pilot episode."}, 

	// question 5 
	{q: "Who invites Icelandic business men to the Great Northern in an attempt to close a deal?", 
	o: ["Leo and Bobby", "Jacques and Bernard", "Catherine and Ben", "Ben and Jerry"],
	a: "Ben and Jerry"},

	// question 6
	{q: "Who tells Dale that 'the owls are not what they seem'?", 
	o: ["Leland", "the Giant", "the Old Man", "the Log Lady"],
	a: "the Giant",
	ff: ""}, 

	// question 7
	{q: "What is the popular TV drama everyone watches?",
	o: ["Invitation to Love", "All Tied Up", "Lover's Lane", "Forbidden"],
	a: "Invitation to Love",
	ff: ""}, 

	// question 8
	{q: "What kind of bird was present at the murder of Laura Palmer?",
	o: ["Owl", "Bewick's Wren", "Myna", "Parrot"],
	a: "Myna",
	ff: "Bewick's Wren (boo-icks) is the bird in the opening credits of the show. "}, 

	// question 9
	{q: "Where did Dr. Jacoby keep the other half of the heart necklace?",
	o: ["In his spice cabinet", "In a coconut", "Under his pillow", "In his wallet"],
	a: "In a coconut",
	ff: ""}, 

	// question 10
	{q: "Finish the quote: 'Through the darkness, future past. The magician longs to see. One chants out between two worlds. ____ ____ ____ ____.'", 
	o: ["Answer, come to me", "Owls, help me see", "Please, help me see", "Fire, walk with me"],
	a: "Fire, walk with me",
	ff: ""}, 
]

// console.log("Question 8: " + game[7].q);
// console.log(game[7].o[0]);
// console.log(game[7].o[1]);
// console.log(game[7].o[2]);
// console.log(game[7].o[3]);
// console.log("Answer: " + game[7].a);
// console.log("Fun Fact: " + game[7].ff);
// console.log(game);

var winCount = 0;
var lossCount = 0;
var skipCount = 0;

// when the player starts the game... run the following
$("#start-btn").on("click", function() {
	
	// hide A screen (class=rules, id=start-btn)
	$("#start-btn").hide();
	$(".rules").hide(); 

	// test and debug
	console.log("start button pressed"); 

	// display B screen (id=timer, id=subject, id=results)

	// B - subect div - create div for question

	var question = document.createElement("h2");
	question.innerHTML= game[0].q; 
	document.getElementById("#subject").appendChild(question);

	// B - results div - create 4 buttons for answers
	// https://www.w3schools.com/jsref/met_document_createelement.asp

	var option1 = document.createElement("button");
	option1.innerHTML = game[0].o[1]; 
	document.getElementById("#results").appendChild(option1); 

	// B - timer
	

	// test and debug 
	console.log(game[0].q);
	console.log(question);
	console.log(game[0].o[1]);

}); 