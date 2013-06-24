
$(document).ready(function() {

	//import screens.js then continue
	$.getScript('js/screens.js', function () {

		/**
		 * Creates a jQuery plugin for the game,
		 *    this way we can move it around in the html easilly
		 * Usage : $("#game_object").galaxia();
		 */
		$.fn.extend({
			galaxia: function () {

				//should return '#game_object'
				var element = '#' + $(this).attr('id'),
				addHTML = function(callback)   {
					$(element).html('<div id="innerwindow"></div>');

					//just playing around doing some dynamic css
					$('#innerwindow').css({
						position: 'absolute',
						width: '475px',
						height: '475px',
						padding: '5px',
						margin: '5px',
						border: '1px solid gray',

						'text-align':'center'
					});

					//add the html here this way we just have to move the div around on the html file
					$('#innerwindow').html("<div id='showmsg'> <p>" + screens.currentScreen.message + "</p></div>")
						.append('<label class="uspw for="username">Username:</label>')
						.append('<input class="uspw id="username" width="300"></br>')
						.append('<label class="uspw for="password">Password:</label>')
						.append('<input type="password" class="uspw" id="password" width="300">')
						.append('<input class="hidden" id="textbox">');

					callback();
				};

				addHTML( function() {

					// event handler for password box
					// TODO: add validation and database support
					$('#password').keypress( function(e) {
						var code = (e.keyCode ? e.keyCode : e.which);
						if (code === 13) {
							screens.next();
							$('.uspw').hide();
							$('#textbox').removeClass('hidden');
						}
					});

					// event handler for textbox
					$('#textbox').keypress(function(e) {

						// if e.keyCode is available then use that, otherwise use e.which
						// probably for browser portability or something
						// Enter = 13
						var code = (e.keyCode ? e.keyCode : e.which);
						if (code === 13) {
							_.each(screens.currentScreen.acceptable, _(function (ans) {
								if (ans === this.value) {
									screens.next();
								} else {
									screens.death();
								}
							}).bind(this));
						}
					});
					
				});

			}
		});

		// Run the game
		$("#game_object").galaxia();
	});
})
