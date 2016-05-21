// ============= Global Variables ======================
var players = [

	ryu = {
		name: "ryu",
		health: 160,
		attack: function() {

		}
	},

	ken = {
	name: "ken",
	health: 140,
	attack: function() {

		}
	},

	guile = {
	name: "guile",
	health: 120,
	attack: function() {

		}
	},

	chunli = {
	name: "chunli",
	health: 100,
	attack: function() {

	}
}

];

// ============= Global Variables ======================
var heroCounter = 0;
var isDefenderSelected = true;

// ============= Functions ======================
// Step1: Function that will select the figther and move remaining fighters to enemies available to attack
	// a.) Changes classes to selectedHero and unselected Heros
	// b.) Changes background color to red. 

// Step2: 


// ============= Programs ======================
//Step 1: Selects the Hero and adds background color of green and moves remainder to enemies making background color red

$(document).ready(function() {

	
		$('.heroes').click(function(){
			if (heroCounter === 0) {
			//console.log(event); to check selection
				$(this).addClass("heroSelected").removeClass("heroes");
				$(".heroSelected").css({"background-color": "green"});
				var enemies = $('.heroes').detach("heroes");
				enemies.appendTo('#enemyWrapper').addClass("enemies").css({"background-color": "red"});
				heroCounter++;
				console.log(heroCounter);
				attachEvent();
		};
	});

	//Step 2: Select the Defender and change class to Defender selected 

function attachEvent() {
		if (isDefenderSelected) {
			$('.enemies').click(function() {
				$(this).addClass("defender");
				var defenderSelected = $(".defender").detach("defender");
				defenderSelected.appendTo('#defenderWrapper').addClass("defender").css({"background-color":"gray"});
				isDefenderSelected == false;
				console.log(isDefenderSelected); // Why is GLOBAL VARIABLE NOT SWITCHING TO FALSE
			});
		};	
	};
});








