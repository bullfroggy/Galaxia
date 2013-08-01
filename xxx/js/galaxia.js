
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

				showLogin = function() {
					$('#innerwindow').html("Login</br></br></br>")
						.append('<label class="uspw" for="username">Username:</label>')
						.append('<input class="uspw" id="username" width="300"></br>')
						.append('<label class="uspw" for="password">Password:</label>')
						.append('<input type="password" class="uspw" id="password" width="300">')
						.append('<input class="hidden" id="textbox">')
						.append('</br></br>')
						.append('<a class="uspw" id="createAccount" href="#">Create Account?</a>');

					$('#createAccount').click(showCreateAccount);

				};

				showCreateAccount = function() {
						$('#innerwindow').html("<div id ='showmsg'> <p>" + 'New Account' + "</p></div>")
							.append('<label class="uspw" for="uname">Username: </label>')
							.append('<input type="text"class="uspw" id="uname" width="300">')
							.append('</br>')
							.append('<label class="uspw" for="pw">Password:</label>')
							.append('<input type="text"class="uspw" id="pw" width="300">')
							.append('</br>')
							.append('<label class="uspw" for="confirm">Confirm Password:</label>')
							.append('<input type="text"class="uspw" id="confirm" width="300">')
							.append('</br>')
							.append('<input id="newUser"type = "submit" class="uspw, button" width="300">')
							.append('</br></br>')
							.append('<a class="uspw" id="back" href="#">Back</a>');

						$('#confirm').keyup(function(e) {
							if($('#pw').val() != $('#confirm').val()) {
								$('#pw').addClass('error');
								$('#confirm').addClass('error');
							} else {
								$('#pw').removeClass('error');
								$('#confirm').removeClass('error');
							}
						});
						
						$('#newUser').click(function() {
							var username = $('#uname'),
								pass = $('#pw');
							if (!username.hasClass('error') && !pass.hasClass('error')) {
								$.post("scripts/test.php", {uname : username.val(), pw : pass.val()});
							}
							
						});
						$('#back').click(showLogin);
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
