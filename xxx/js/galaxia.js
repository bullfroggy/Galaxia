
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
				currentScreen = screens.login,

				showLogin = function(callback) {
					$('#innerwindow').html("Login</br></br></br>")
						.append('<label class="uspw" for="username">Username:</label>')
						.append('<input class="uspw" id="username" width="300"></br>')
						.append('<label class="uspw" for="password">Password:</label>')
						.append('<input type="password" class="uspw" id="password" width="300">')
						.append('<input class="hidden" id="textbox">')
						.append('</br></br>')
						.append('<a class="uspw" id="createAccount" href="#">Create Account?</a>');

					$('#createAccount').click(showCreateAccount);

					if (callback) {
						callback();
					}

				};

				showCreateAccount = function(callback) {
						$('#innerwindow').html("<div id ='showmsg'> <p>" + 'New Account' + "</p></div>")
							.append('</br>')
							.append('<form action="./../scripts/test.php", method="POST"')
							.append('<label class="uspw" for="newUsername">Username: </label>')
							.append('<input class="uspw" id="newUsername" name="uname" width="300">')
							.append('</br>')
							.append('<label class="uspw" for="newPassword">Password:</label>')
							.append('<input class="uspw, textbox" id="newPassword" name="pw" width="300">')
							.append('</br>')
							.append('<label class="uspw" for="confirmPassword">Confirm Password:</label>')
							.append('<input class="uspw. textbox" id="confirmPassword" width="300">')
							.append('</br>')
							.append('<input type = "submit" class="uspw, button" width="300">')
							.append('</form>')
							.append('</br></br>')
							.append('<a class="uspw" id="back" href="#">Back</a>');
						$('#back').click(showLogin);
					if (callback) {
						callback();
					}
				};

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

					showLogin();
					if (callback) {
						callback();
					}
				};

				addHTML( function() {

					// event handler for password box
					// TODO: add validation and database support
					$('#password').keypress( function(e) {
						var code = (e.keyCode ? e.keyCode : e.which);
						if (code === 13) {
							currentScreen = currentScreen.next();
							$('.uspw').hide();
							$('#textbox').removeClass('hidden');
						}
					});

					// event handler for textbox
					$('#textbox').keypress(function(e) {

						// if e.keyCode is available then use that, otherwise use e.which
						// probably for browser portability or something
						// Enter = 13
						var code = (e.keyCode ? e.keyCode : e.which),
						value = this.value.toLowerCase();
						if (code === 13) {
							currentScreen = currentScreen.next(value.toLowerCase());
						}
					});
					
				});

			}
		});

		// Run the game
		$("#game_object").galaxia();
	});
})
