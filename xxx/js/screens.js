

////////////
// Note: All 'acceptable' and all switch cases must be all lower case
//		The value is .toLowerCase() before being sent to the next function
//   ALSO SCREENS CAN HAVE AN OPTION ENTER FUNCTION

$.getScript('js/transmissions.js', function() {});

var screens = {
	login : {
		message : 'LOGIN',
		next : function() {
			goToScreen(screens.welcome);
			return screens.welcome;
		}
	},

	/* TEST SCREENS */
	welcome : {
		message : 'Welcome to Galaxia',
		submessage : 'Type "start" to begin',
		next : function(value) {
			var nextScreen;

			

			switch(value) {
				case 'test screwdriver':
					saveItem('screwdriver', function() {
						isItemOwned('screwdriver', function(data) {
							if (data) {
								alert("DOPENESS");
							}
						});
					});
					nextScreen = this;
					break;
				case 'test':
					nextScreen = changeMessage(this, 'BLAHBLAHBLAH');
					break;
				case 'start':
					nextScreen = screens.screen1;
					break;
				default:
					nextScreen = screens.death;
					break;
			}

			goToScreen(nextScreen);
			return nextScreen;
		}
	},
	screen1 : {
		message : 'Your name is Steve. \
		This adventure begins on a spaceship named Galaxia where you have been \
		the janitor for 10 years now.',
		submessage : 'Type "start" to begin',
		next : function (value) {
			var nextScreen;

			switch(value) {
				case 'start':
					nextScreen = screens.screen2;
					break;
				case 'cheese' :
					nextScreen = screens.cheese;
					break;
				default:
					nextScreen = screens.death;
					break;
			}

			goToScreen(nextScreen);
			return nextScreen;
		}
	},
	screen2 : {
		message : 'Your journey begins in the Mens bathroom, what will you do now?',
		submessage : 'Type "wipe"',
		next : function (value) {
			var nextScreen;

			switch(value) {
				case 'wipe':
					nextScreen = screens.victory;
					break;
				default:
					nextScreen = screens.death;
					break;
			}

			goToScreen(nextScreen);
			return nextScreen;
		}
	},
	cheese : {
		message : 'You typed cheese, why?',
		submessage : 'Type "Im Stupid" to try again',
		next : function (value) {
			var nextScreen;

			switch(value) {
				case "i'm stupid":
				case 'im stupid':
					nextScreen = screens.welcome;
					break;
				default:
					nextScreen = screens.death;
					break;
			}
			$('#innerwindow').css({background : '#444'});
			goToScreen(nextScreen);
			return nextScreen;
		},
		enter : function () {
			$('#innerwindow').css({
				background : 'url(images/testGameBackground.png) no-repeat'
			});
		}
	},


	/* REAL SCREENS */

	//Not Implemented
	mensBathroomStall : {
		message : 'You find yourself inside a stainless steel bathroom stall \
					sitting atop a toilet. \r\n What would you like to do?',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case 'look':
					nextscreen = changeMessage(this,
						'You see a toilet paper holder to your left which contains two rolls of toilet paper \
						You let out a sigh of relief. Good thing you restocked the bathroom this morning.');
					break;
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	mensBathroom : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	floorOneSouthHall : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	floorOneMidHall : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	floorOneNorthHall : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	womensBathroom : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	womensBathroomStall : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	engineRoom : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	medBay : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	armory : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	supplies : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	stairs : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	cockpit : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	floorTwoNorthHall : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	floorTwoMidHall : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	floorTwoSouthHall : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	kitchen : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	bedrooms : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	captainsBedroom : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	recRoom : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	lockerRoom : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

	//Not Implemented
	dockingBay : {
		message : '',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case '':
				default:
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},




	//NEW SCREENS GO HERE
	victory : {
		message : 'You win!',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case 'again':
					nextScreen = screens.welcome;
					break;
				default:
					nextScreen = this;
			}

			goToScreen(nextScreen);
			return nextScreen;
 		}
	},
	death : {
		message : 'You died',
		submessage : 'Type "retry" to try again',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case 'retry':
					nextScreen = screens.welcome;
					break;
				default:
					nextScreen = screens.death;
					break;
			}
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
	if (typeof(screen.enter) == typeof(Function)) {
		screen.enter();
	}

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

saveItem = function (item, callback) {
	$.getScript('js/transmissions.js', function() {
		saveItemToDB(item, 1, function() {
			callback();
		});
		
	});
},

isItemOwned = function(item, callback) {
	$.getScript('js/transmissions.js', function() {
		saveItemToDB(item, 0, function(data) {
			if (data) {
				callback(true);
			} else {
				callback(false);
			}
		});
	});
}