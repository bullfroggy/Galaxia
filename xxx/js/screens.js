

////////////
//Note: All 'acceptable' and all switch cases must be all lower case
//		The value is .toLowerCase() before being sent to the next function

var screens = {
	login : {
		message : 'LOGIN',
		next : function() {
			goToScreen(screens.welcome);
			return screens.welcome;
		}
	},
	welcome : {
		message : 'Welcome to Galaxia',
		submessage : 'Type "start" to begin',
		acceptable : ['start', 'test'],
		next : function(value) {
			var nextScreen;

			parseAnswer(value, this.acceptable, _(function(accepted) {
				if (accepted) {
					if (value === 'test') {
						nextScreen = changeMessage(this, 'BLAHBLAHBLAH');
					} else {
						nextScreen = screens.screen1;
					}
				} else {
					nextScreen = screens.death;
				}
			}).bind(this));
			
			/*
			//If the callback isn't needed, parseAnswer can be used this way as well

			if (parseAnswer(value, this.acceptable)) {
				nextScreen = screens.screen1;
			} else {
				nextScreen = screens.death;
			}
			*/

			goToScreen(nextScreen);
			return nextScreen;
		}
	},
	screen1 : {
		message : 'Your name is Steve. \
		This adventure begins on a spaceship named Galaxia where you have been \
		the janitor for 10 years now.',
		submessage : 'Type "start" to begin',
		acceptable : ['start', 'cheese'],
		next : function (value) {
			var nextScreen;

			parseAnswer(value, this.acceptable, function(accepted) {
				if (accepted) {
					switch(value) {
						case 'start':
							nextScreen = screens.screen2;
							break;
						case 'cheese':
							nextScreen = screens.cheese;
							break;
					}
				} else {
					nextScreen = screens.death;
				}
			});
			goToScreen(nextScreen);
			return nextScreen;
		}
	},
	screen2 : {
		message : 'Your journey begins in the Mens bathroom, what will you do now?',
		submessage : 'Type "wipe"',
		acceptable : ['wipe'],
		next : function (value) {
			var nextScreen;
			parseAnswer(value, this.acceptable, function(accepted) {
				if (accepted) {
					switch(value) {
						case 'wipe':
							nextScreen = screens.victory;
							break;
					}
				} else {
					nextScreen = screens.death;
				}
			});
			goToScreen(nextScreen);
			return nextScreen;
		}
	},
	cheese : {
		message : 'You typed cheese, why?',
		submessage : 'Type "Im Stupid" to try again',
		acceptable : ['im stupid'],
		next : function (value) {
			var nextScreen;

			parseAnswer(value, this.acceptable, function(accepted) {
				if (accepted) {
					switch(value) {
						case "i'm stupid":
						case 'im stupid':
							nextScreen = screens.welcome;
							break;
					}
				} else {
					nextScreen = screens.death;
				}
			});
			goToScreen(nextScreen);
			return nextScreen;
		}
	},
	//NEW SCREENS GO HERE
	victory : {
		message : 'You win!',
		acceptable : ['again'],
	},
	death : {
		message : 'You died',
		submessage : 'Type "retry" to try again',
		acceptable : ['retry'],
		next : function(value) {
			parseAnswer(value, this.acceptable, function(accepted) {
				if (accepted) {
					nextScreen = screens.welcome;
				} else {
					nextScreen = screens.death;
				}
			})
			goToScreen(nextScreen);
			return nextScreen;
		}
	}
},

/**
 * Sets up messages in html for the next screen
 * @param {Object screen} The next screen we are navigating to
 */
goToScreen = function(screen) {

	$('#showmsg').html(screen.message)
	.append('</br>').append(screen.description);

	if (screen.submessage) {
		$('#showmsg').append('</br>' + screen.submessage);
	} else {
		$('#showmsg').append('</br>');
	}
	$('#textbox').val('');
},

/**
 * Changes the message, but keeps the same screen (so that acceptable answers and such stay the same)
 * @param {Object screen} just pass this in (if you used _().bind(this) )
 * @param {String newMessage} The new message
 * @returns {Object screen} The same screen, but the message is now changed
 */
changeMessage = function(screen, newMessage) {
	screen.message = newMessage;
	goToScreen(screen);
	return screen;
},

/**
 * Goes through acceptable list and checks if the input matches one of the values
 * @param {String value} the string input from the text field
 * @param {List acceptable} List of acceptable answers on the current screen
 * @return {Boolean} True if found, False if not
 */
parseAnswer = function(value, acceptable, callback) {
	var reValue = false;
	_.each(acceptable, (function (accept) {
		if (accept === value) {
			reValue = true;
			//This return exits the each
			return false;
		}
	}));

	//This may or may not be useful later
	//So for now im using this way because it's cooler
	if(callback) {
		callback(reValue);
	}

	//If using the callback ends up being useless, this can still be used
	if (reValue) {
		return true;
	} else {
		return false;
	}

};