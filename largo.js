var Largo = {
	player2Image: 0,
	player1Image: 0, 
	canSwitchPicture: 1,
	init: function() {
		Largo.firstLevel();
	},
	firstLevel: function() {
		$('#player2 .person > img').attr('src', people[0].img);
		
		$.each(people[0].code,function(index, value){
			//$('#player1 .code-selection > ul').append('<li>'+ value +'</li>');
			$('.code-selection > ul').append('<li>' + people[0].words[index] + '      ' + value +'</li>');
		});
		Largo.switchPicture();
	},
	switchPicture: function() {
		if (Largo.canSwitchPicture == 1) {
			if (Largo.player1Image < people.length -1) {
				Largo.player1Image++;
			} else {
				Largo.player1Image = 0;
			}

			var person = people[Largo.player1Image];

			$('#player1 .person > img').attr('src', person.img);

			window.setTimeout("Largo.switchPicture()", 2000);
		}
	},
	stopSwitchPicture: function() {
		Largo.canSwitchPicture = 0;
	},
	addCode: function(code) {
		$('#sent-codes > ul').append('<li>'+ code +'</li>');
	}
};

$(document).ready(function() {
	Game.init();
	Largo.init();
});