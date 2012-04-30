var Game = {
	codeAmount : 4,
	timer : 0,
	intervalId: 0,
	pushes: '',
	timerRunning : false,
	timerStart : function() {
		if(Game.timerRunning == false) {
			console.log("start called");
			Game.intervalId = setInterval("Game.timerAdd()", 100);
			Game.timerRunning = true;
		}
	},
	timerStop : function() {
		clearInterval(Game.intervalId);
		Game.timerRunning = false;
		returnTimer = Game.timer;
		timer = 0;
		return Game.timer;
	},
	timerAdd : function() {
		console.log(Game.timer);
		Game.timer += 100;
	},
	init: function() {
		/* generate Code
		$.each(people,function(index, value){
			value.codes = Array();
			$.each(value.words, function(wordIndex, word) {
				var codeString = Game.generateCodeString(value);
				value.codes.push(codeString);
			});
		});*/
		// register events
		$(window).keydown(function(event) {
			if(event.keyCode == 76) {
				Game.timerStart();
			}
			else if(event.keyCode == 65) {
				Largo.stopSwitchPicture();
			}
		});
		$(window).keyup(function(event){
			if(event.keyCode == 76) {
				var time = Game.timerStop();
				if(time >= 500) {
					Game.longPush();
				} else {
					Game.shortPush();
				}
			}
		});
			
	},
	// recruisve method for code NOT USED
	generateCodeString: function(value) {
		var codeString = '';
		for(var i = 0; i < Game.codeAmount; i++) {
			if(Math.random() >= .5) {
				codeString +='x';
			} 
			else {
				codeString += '-';
			}
		}
		$.each(value.codes, function(codeIndex, code){
			if(code == codeString) {
				codeString = Game.generateCodeString(value);
			}
		});
		return codeString;
	},
	longPush : function() {
		Game.addPush('x');
	},
	shortPush : function() {
		Game.addPush('-');
	},
	addPush: function(char) {
		console.log(char);
		if(Game.pushes.length < 4) {
			Game.pushes += char;
		} else {
			Largo.addCode(Game.pushes);
			Game.pushes = '';
		}
	}
};

/*$(document).ready(function() {
	Game.init();
});*/