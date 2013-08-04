
$(document).ready(function() {

	//import transmissions.js and screens.js then continue
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

					displayError = function(message) {
						$('#errormsg').html(message);
						$('#errormsg').append("</br></br>");
						$('#errormsg').removeClass('hidden');
					},

					showLogin = function() {
						$('#innerwindow').html("<div id ='showmsg'>Login</div>")
							.append("</br></br></br>")
							.append('<label class="uspw" for="username">Username:</label>')
							.append('<input class="uspw" maxlength = "12" id="username" width="300"></br>')
							.append('<label class="uspw" for="password">Password:</label>')
							.append('<input type="password" maxlength = "12" class="uspw" id="password" width="300">')
							.append('<input class="hidden" id="textbox">')
							.append('</br></br>')
							.append('<input id="submit" type = "submit" class="uspw button" width="300">')
							.append('</br></br>')
							.append('<div id="errormsg" class="hidden"></div>')
							.append('</br></br>')
							.append('<a class="uspw navig" id="createAccount" href="#">Create Account?</a>');

						$('#createAccount').click(showCreateAccount);

					},

					validatePasswords = function() {
						var pass = $('#pw'),
							confirm = $('#confirm'),
							message = 0;

							if (pass.val().length < 5) {
								pass.addClass('error');
								confirm.addClass('error');
								message = 'Password is too short';
							} else if (pass.val().length > 12) {
								pass.addClass('error');
								confirm.addClass('error');
								message =  'Password is too long';
							} else if (pass.val() != confirm.val()){
								pass.addClass('error');
								confirm.addClass('error');
								message =  'Passwords must match';
							}

							if (message) {
								displayError(message);
								return 0;
							} else {
								//all good
								pass.removeClass('error');
								confirm.removeClass('error');
								$('#errormsg').addClass('hidden');
								return 1;

							}
					},

					validateUser = function() {
						var user = $('#uname'),
						    message = 0;

						if (user.val().length === 0) {
							user.addClass('error');
							message =  'No Username Entered';
						} else if (user.val().length < 5) {
							user.addClass('error');
							message =  'Username is too short';
						}

						if (message) {
							displayError(message);
							return 0;
						} else {
							//all good
							user.removeClass('error');
							$('#errormsg').addClass('hidden');
							return 1;
						}

					},


					showCreateAccount = function() {
							$('#innerwindow').html("<div id ='showmsg'> <p>" + 'New Account' + "</p></div>")
								.append('DISCLAIMER: THERE IS CURRENTLY NO PASSWORD SECURITY, DO NOT USE YOUR NORMAL PASSWORD')
								.append('</br></br>')
								.append('<label class="uspw" for="uname">Username: </label>')
								.append('<input type="text"class="uspw" id="uname" maxlength = "12" width="300">')
								.append('</br>')
								.append('<label class="uspw" for="pw">Password:</label>')
								.append('<input type="password"class="uspw" id="pw" maxlength = "12" width="300">')
								.append('</br>')
								.append('<label class="uspw" for="confirm">Confirm Password:</label>')
								.append('<input type="password" maxlength = "12" class="uspw" id="confirm" width="300">')
								.append('</br>')
								.append('<input id="newUser"type = "submit" class="uspw button" width="300">')
								.append('</br></br>')
								.append('<div id="errormsg" class="hidden"></div>')
								.append('<a class="uspw navig" id="back" href="#">Back</a>');


							$('#back').click(showLogin);

							$('#confirm').blur(validatePasswords);
							$('#pw').blur(validatePasswords);
							$('#uname').blur(validateUser);

							$('#newUser').click(function() {
								var username = $('#uname'),
									pass = $('#pw'),
									confirm = $('#confirm'),
									message;

								if (validateUser()) {
									if (validatePasswords()) {

										// Everything went fine, remove errors
										// And write to the database
										username.removeClass('error');
										pass.removeClass('error');
										confirm.removeClass('error');
										$('#errormsg').addClass('hidden');


										createAccount(username.val(), pass.val(), function(data) {
											if (data) {
												showLogin();
												startGame();

											} else {

												displayError('Invalid Username');
											}
										});
										//$.post("scripts/test.php", {uname : username.val(), pw : pass.val()});
									}
								}
						});
					},

					addHTML = function(callback) {
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
					},

					startGame = function() {

						login($('#username').val(), $('#password').val(), function(data) {
							if (data) {
								$('#errormsg').hide();

								currentScreen = screens.login.next();
								$('.uspw').hide();
								$('#textbox').removeClass('hidden');

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

							} else {
								displayError('Incorrect Password');
							}
						});
							
					};

					addHTML( function() {

						$('#password').keypress(function(e) {
							//Enter = 13
							var code = (e.keyCode ? e.keyCode : e.which);
							if (code === 13) {
								startGame()
							}
						});
						$('#submit').click(startGame);
						
					});

				}
			});

			// Run the game
			$("#game_object").galaxia();
		});
})
