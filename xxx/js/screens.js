var welcome = {
		message : 'Welcome to Galaxia',
		submessage : 'Type "start" to begin',
		acceptable : ['start']
	},
	death = {
		message : 'You died',
		submessage : 'Type "retry" to try again',
		acceptable : ['retry']
	},
	screen1 = {
		message : 'This is the first screen',
		submessage : 'Type next',
		acceptable : ['next']
	},
	screen2 = {
		message : 'This is the second screen',
		submessage : 'Type next',
		acceptable : ['next']
	},
	//NEW SCREENS GO HERE
	victory = {
		message : 'You win!',
		acceptable : ['again']
	}
	screenList = [death, welcome, screen1, screen2, victory],
	screens = {
		screenIndex : 1,
		currentScreen : welcome,
		next : nextScreen,
		death : deathScreen
	};

function nextScreen() {
	if (this.currentScreen === victory) {
		this.screenIndex = 1;
	} else {
		this.screenIndex += 1;
	}
	this.currentScreen = screenList[this.screenIndex];
	$('#showmsg').html(this.currentScreen.message);

	if (this.currentScreen.submessage) {
		$('#showmsg').append('</br>' + this.currentScreen.submessage);
	} else {
		$('#showmsg').append('</br>');
	}
	$('#textbox').val('');
}

function deathScreen() {
	this.currentScreen = death;
	this.screenIndex = 0;
	$('#showmsg').html(this.currentScreen.message)
		.append('</br>' + this.currentScreen.submessage);
	$('#textbox').val('');
}