
//actions
open = false;
wiped = false;
flushed = false;
pickedupbaby = false;
//items
toiletpaper = -5;
toiletpaperroll = 0;
wrench = -1;
pamphlet1 = -1;
pamphlet2 = -1;
pamphlet3 = -1;
screwdriver = -1;
pencil = -1;
unikey = -1;
tablet = -1;
wirecutters = -1;
crowbar = -1;
//rooms
dream = false;
ontoilet = true;
oncouch = false;
oncot = false;
inchair = false;
engineroom = false;
stall = false;
mensroom = false;
womensroom = false;
medbay = false;
armory = false;
supplies = false;
cockpit = false;
uppercorridor1 = false;
uppercorridor2 = false;
uppercorridor3 = false;
lowercorridor1 = false;
lowercorridor2 = false;
lowercorridor3 = false;
cafeteria = false;
freezer = false;
bedroom = false;
captainsroom = false;
recroom = false;
lockerroom = false;
lockeropen = false;
//resources
credits = 90;
fuel = 25;
minerals = 2;
energy = 20;
oxygen = 25;
//cockpit settings
one = 1;
two = 0;
three = 0;
four = 1;
AG = 1;
EI = 0;
WS = 0;
//locations
cat = 1;
vor = 0;
sir = 0;
kor = 0;
fal = 0;
tal = 0;
alp = 0;
//distances
catDis = 0;
vorDis = 3;
tifDis = 5;
sirDis = 6;
korDis = 3;
alpDis = -1;
falDis = -1;
talDis = -1;

////////////
// Note: All 'acceptable' and all switch cases must be all lower case
//		The value is .toLowerCase() before being sent to the next function
//   ALSO SCREENS CAN HAVE AN OPTION ENTER FUNCTION

$.getScript('js/transmissions.js', function() {});

var screens = {
	login : {
		message : 'LOGIN',
		next : function() {
			goToScreen(screens.startGame);
			return screens.startGame;
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
	startGame : {
		message : 'You find yourself inside a stainless steel bathroom stall \
					sitting atop a toilet. \r\n What would you like to do?',
		next : function(value) {
			var nextScreen;
			switch(value) {
				case 'look':
				case 'check':
					if (stall || ontoilet){
						if (!flushed){
							nextscreen = changeMessage(this,
							'You see a toilet paper holder to your left which contains a brand new roll of toilet paper. \
							You let out a sigh of relief. Good thing you restocked the bathroom this morning.');
						}
						else {
							nextscreen = changeMessage(this,
							"You are standing in a somewhat futuristic looking bathroom stall. It's probably about time for \
							you to get back to work. The stainless steal door in front of you is just begging to be opened.");
						}
					}
					if (dream){
						if (!pickedupbaby){
							nextscreen = changeMessage(this,
								"You're home at last. The mission was a complete success and you were released with an\
								honorary discharge. The love of your life is standing beside you, just as beautiful as the day you met. ");
						}
						else{
							nextscreen = changeMessage(this,
								"You're falling.\
								...\
								Flying?\
								There is no ground");
						}
					}
					if (mensroom){
						nextscreen = changeMessage(this,
							"You look around the bathroom and see several empty stalls, a sink, a large mirror on the wall, \
							and 2 urinals beside the stalls. There is a small trash can next to the door. A mop and mop \
							bucket are next to the waste basket, exactly where you left them. Near the middle of the room \
							is a wet floor sign, but the floor isn't even wet. You ask yourself bewilderedly, 'Just how \
							long was I out?' No sooner do you ask yourself this than you notice a flash in the corner of \
							your eye. The emergency light is flashing.");	
					}
					if (uppercorridor1){
						nextscreen = changeMessage(this,
							"You notice that the corridor is eerily quiet. Usually personnel can be heard over the subtle \
							humming of the generator. What could have possibly happened while you were unconscious? The \
							entrance to the men's room is to the west. You see the entrance to the women's bathroom east \
							of you and a set of double doors to the south. You've never been through the double doors, \
							but you've seen important personnel pass through them on several occasions. \
							The corridor continues north of your location. ");	
					}
					if (uppercorridor2){
						nextscreen = changeMessage(this,
							"You see the entrance to the med bay to the west and the entrance to the armory to the east. \
							There is an unmarked door to the north which you've passed through countless times. The corridor \
							continues south of your location. The warning lights on the walls of the corridors are still \
							eerily blinking on and off. You still don’t have any idea what caused the disturbance.");	
					}
					if (uppercorridor3){
						nextscreen = changeMessage(this,
							"You see the supply closet entrance to the west and a door marked 'Stairs' to the east. \
							There is an unmarked door to the south and a door to the north marked \
							'Authorized Personel Only'. \
							You've never seen the inside of the north room, but you frequent the other two. \
							You've been to the locker room downstairs more times than anyone should bother counting \
							and you're pretty much the only one that dares venture inside the supply closet.");	
					}
					if (medbay){
						nextscreen = changeMessage(this,
							"The med bay is strangely empty. There are 3 cots arranged in parallel against the north wall. \
							On the west wall is a counter with a sink and a set of cabinets perched above and below. A small \
							trash can is situated in the southwest corner of the room.");
					}
					if (womensroom){
						nextscreen = changeMessage(this,
							"Contrary to popular belief, the women’s room looks exactly the same as the men’s room except \
							that they have one additional stall instead of urinals. Having cleaned this place time and \
							time again however, you have come to the conclusion that women care far more about cleanliness than men. ");
					}
					if (lowercorridor1){
						nextscreen = changeMessage(this,
							"You see the entrance of the mess hall to the west and the doorway to the staircase to the east.\
							The corridor continues south of your location.");
					}
					if (lowercorridor2){
						nextscreen = changeMessage(this,
							"You see the entrance of the main living quarters to the west and the entrance to the captain’s\
							quarters to the east. The corridor continues north and south of your location.");
					}
					if (lowercorridor3){
						nextscreen = changeMessage(this,
							"You see the entrance of the rec room to the west and the entrance to the locker room to the east. \
							The corridor continues north of your location.");
					}
					if (cockpit){
						nextscreen = changeMessage(this,
							"You gaze at the various knobs and switches as well as the main control console. In the center of \
							the room, there is an empty chair. It is clear that someone had very recently been seated here; but \
							where did he go? Who is flying this ship? Above the control panel, the windshield wraps around the\
							entire room, including the ceiling.");
					}
					if (bedroom){
						nextscreen = changeMessage(this,
							"You have a very small simple room. There’s just enough space for a small twin bed on the west \
							wall, a tiny table with a single chair to the north of the door. Your room is very clean, not \
							because you are neat and clean, but because you’re never around to mess it up. The bed is made\
							and the table is completely clear. There’s not much else to say about your room, \
							but at least you get to call it your own space. ");
					}
					if (captainsroom){
						nextscreen = changeMessage(this,
							"You’re in a pretty extravagant looking bedroom. The captain’s light fixtures, furnishings, \
							and electronics are all pretty top notch. There’s a desk against the east wall, an elaborate \
							bed on the north wall, and a massive projection surface on the south wall.");
					}
					if (cafeteria){
						nextscreen = changeMessage(this,
							"Nobody. The place is deserted. You look around the back and none of the workers are in the \
							kitchen either. Everything is pristine; clearly the workers here had a good deal of pride in\
							their work. There’s a door to a large door in the corner that seems to lead to a refrigerated \
							room. Presumably, that’s where the majority of the food is stored.");
					}
					if (freezer){
						nextscreen = changeMessage(this,
							"You’re inside a giant freezer. There are shelves on the north and south sides of the \
							compartment which are densely populated with an assortment of containers filled with \
							all kinds of food. One thing catches your eye; there is a somebody left a pair of large \
							wire cutters on the floor at the end of the room. There’s a circuit box on the wall at\
							the end of the room, perhaps someone was performing some routine maintenance?");
					}
					if (recroom){
						nextscreen = changeMessage(this,
							"The rec room is your favorite place on the ship. You generally take special care when \
							cleaning this area. There’s a pool table, couch, big screen TV, and fuse-ball table.");
					}
					if (supplies){
						nextscreen = changeMessage(this,
							"The supply closet is full of various objects that only custodians should care about. \
							For you it’s a goldmine, but in the current situation, there’s only one object that \
							seems valuable; the crowbar.");
					}
					if (lockerroom){
						if (AG === 0){
							nextscreen = changeMessage(this,
								"Now that you are floating several feet above the ground, it is easy to see the top of the lockers.	\
								To your astonishment, something appears to be floating above one of the lockers; a pamphlet!");
						}
						else{
							nextscreen = changeMessage(this,
								"It’s a pretty standard locker room. On the west side of the room are several lockers and along \
								the south side are designated men’s and women’s changing areas.");
						}
					}
				break;
				
				
				
				case 'open west door':
					if (uppercorridor1){
						nextscreen = changeMessage(this,
							"You open the door to the men's room and step inside");
						uppercorridor1 = false;
						mensroom = true;
					}
					else if (uppercorridor2){
						nextscreen = changeMessage(this,
							"You open the door to the med bay and step inside.");
						uppercorridor2 = false;
						medbay = true;
					}
					else if (uppercorridor3){
						if (unikey == -1){
							nextscreen = changeMessage(this,
								"You try the handle of the supply closet door but it's locked. You instinctually\
								reach into your pocket for your keys but they aren't there.");
						}
						else{
							nextscreen = changeMessage(this,
								"You wave your unikey in from of the lock on the supply closet door. You hear the\
								signature “click” which indicates the door has been unlocked, open the door, and walk inside");
							uppercorridor3 = false;
							supplies = true;
						}
					}
					else if (lowercorridor1){
						nextscreen = changeMessage(this,
							"You open the door to the mess hall and step inside");
						lowercorridor1 = false;
						cafeteria = true;
					}
					else if (lowercorridor2){
							nextscreen = changeMessage(this,
								"You press your palm to the panel to the right of the door and you hear the usual whirring of\
								a motor behind the door. After several seconds, the door to the living quarters comes unlocked. \
								You open it and step inside. The living quarters are organized so that each crew member can only \
								access their own living space. When you want to enter your living area, you place your hand on the scanner.\
								Through some miracle of engineering, your personal living space is brought to you.\
								You’re now inside your own room. You honestly don’t spend as much time in your quarters as you’d like.\
								If anything, the rec room is the place where you feel the most at home.");
							lowercorridor2 = false;
							bedroom = true;
					}
					else if (lowercorridor3){
						nextscreen = changeMessage(this,
							"You open the door to the rec room and step inside.");
							recroom = true;
							lowercorridor3 = false;
					}
					
					
				break;
				
				
				
				case 'open east door':
					if (uppercorridor1){
						if (unikey !== 1){
							nextscreen = changeMessage(this,
								"You reach into your pocket but the unikey is not there. Only women are able to open the door unless you have a unikey.");
						}
						else {
							nextscreen = changeMessage(this,
								"You wave the unikey in front of the handle and the door unlocks. You open it and step inside.");
							womensroom = true;
							uppercorridor1 = false;
						}
					}
					else if (uppercorridor2){
						if (unikey !== 1){
							nextscreen = changeMessage(this,
								"The armory doors are locked; probably for good reason.");
						}
						else{
							nextscreen = changeMessage(this,
								"You wave your unikey in front of the lock on the door \
								but for some reason nothing happens. Strange.");
						}
					}
					else if (uppercorridor3){
						nextscreen = changeMessage(this,
							"You open the door to the staircase. The only way to go is down so that's the way you go");
						uppercorridor3 = false;
						lowercorridor1 = true;
					}
					else if (lowercorridor1){
						nextscreen = changeMessage(this,
							"You open the door to the staircase. The only way to go is up so go up the stairs.");
						lowercorridor1 = false;
						uppercorridor3 = true;
					}
					else if (lowercorridor2){
						if (unikey === 1){
							nextscreen = changeMessage(this,
								"You wave the your unikey in front of the keypad, the door to the captain's quarters slides open, and you walk right in.");
							lowercorridor2 = false;
							captainsroom = true;
						}
						else{
							nextscreen = changeMessage(this,
								"You don't stand a chance of getting into the captain's suite; at least not without your unikey.");
						}
					}
					else if (lowercorridor3){
						nextscreen = changeMessage(this,
							"You open the door to the locker room and step inside.");
							lockerroom = true;
							lowercorridor3 = false;
					}
				break;
				case 'open north door':
					if (uppercorridor2){
						nextscreen = changeMessage(this,
							"You push open the unmarked door and step into the next corridor.");
						uppercorridor2 = false;
						uppercorridor3 = true;
					}
					else if (uppercorridor3){
						if (unikey === 1){
							nextscreen = changeMessage(this,
								"You wave your unikey in front of the keypad and the door slides open with a woosh sound. \
								You walk into the room where you've never been expecting to finally obtain some answers. \
								As expected, nobody is inside. ");
							uppercorridor3 = false;
							cockpit = true;
						}
						else{
							nextscreen = changeMessage(this,
								'Not surprisingly, the door is locked');
						}
					}
					else if (uppercorridor1){
						nextscreen = changeMessage(this,
							"There is no door to the north.");
					}
				break;
				
				case 'open south door':
					if (uppercorridor3){
						nextscreen = changeMessage(this,
							"You push open the unmarked door and step into the next corridor.");
						uppercorridor3 = false;
						uppercorridor2 = true;
					}
					else if (uppercorridor1){
						nextscreen = changeMessage(this,
							"That door is locked.");
					}
					else if (uppercorridor2){
						nextscreen = changeMessage(this,
							"There is no door there.");
					}
				break;
				
				
				
				case 'take pamphlet':
					if (lockerroom && AG === 0){
						nextscreen = changeMessage(this,
							"You kick off the wall, float over to the locker, and grab the pamphlet that is floating just above them.");
						pamphlet3 = 1;
					}
					else if (captainsroom){
						nextscreen = changeMessage(this,
							"You walk over to the commander’s desk and take the pamphlet.");
							pamphlet1 = 1;
					}
					else if (cockpit) {
						nextscreen = changeMessage(this,
							"You reach down in between the cushions and take the pamphlet.");
							pamphlet2 = 1;
					}
				break;
				
				case 'take wire-cutters':
					if (freezer){
						nextscreen = changeMessage(this,
							"You pick up the wire cutters.");
						wirecutters = 1;
					}
				break;
				
				case 'exit cafe':
				case 'exit mess hall':
				case 'exit cafeteria':
					if (freezer){
						nextscreen = changeMessage(this,
							"You are still in the freezer!");
					}
					else{
						nextscreen = changeMessage(this,
							"You open the cafeteria door and walk back into the corridor.");
					}
				break;
				
				case 'exit bedroom':
					if (bedroom || captainsroom){
						nextscreen = changeMessage(this,
							"You exit the bedroom and head back into the lower deck.");
						bedroom = false;
						captainsroom = false;
						lowercorridor2 = true;
					}
				break;
				
				
				case 'sit':
					if (cockpit && pamphlet2 === 1){
						nextscreen = changeMessage(this,
							"It’s a simple yet elegant desk with a single drawer in the middle.");
					}
					else if (captainsroom){
						nextscreen = changeMessage(this,
							"It’s a pretty simple desk with a single drawer in the middle. \
							There’s nothing on top of it except for a small pamphlet...");
					}
				break;
				
				case 'look desk':
					if (captainsroom && pamphlet1 === 1){
						nextscreen = changeMessage(this,
							"It’s a simple yet elegant desk with a single drawer in the middle.");
					}
					else if (captainsroom){
						nextscreen = changeMessage(this,
							"It’s a pretty simple desk with a single drawer in the middle. \
							There’s nothing on top of it except for a small pamphlet...");
					}
				break;
				
				
				
				
				
				case 'check mirror':
				case 'look mirror':
					if (mensroom){
						nextscreen = changeMessage(this,
							"The mirror is shattered. You can't see much of anything through it. \
							You'll have to remember to do something about that.");
					}
					else if (womensroom){
						nextscreen = changeMessage(this,
							"The mirror shows you a short figure in a blue jumpsuit. He’s no taller \
							than 4 feet, but he’s definitely an adult. He has a large head for his body, \
							almost like a child, but his face shows maturity. His hair is short and dark. \
							He has light blue skin, large white eyes with piercing red irises and pupils like a cat.\
							You double tap on the mirror and it shows you some information about yourself:\
							Name: Aldur Romule Qatar\n\
							Profession: Custodian\n\
							Age: 322 Earth Years\n\
							Home Planet:  Alpha Vespa XI\n\
							Species: Satirian\n\
							");
					}
						
				break;
				
				case 'use sink':
					if (mensroom || womensroom){
						nextscreen = changeMessage(this,
							"You run the water over your hands for a few seconds.");
					}
				break;
				
				case 'use cot':
					if (medbay){
						nextscreen = changeMessage(this,
							"You lay down on the centermost cot. It's extremely uncomfortable.");
						oncot = true;
					}
				break;
				
				case 'look crowbar':
					if (supplies){
						nextscreen = changeMessage(this,
							"The crowbar is leaning up against the back wall of the supply closet. \
							It has a bit of yellow tape wrapped around the handle to indicate the proper grip.");
					}
				break;
				
				case 'look bed':
					if (bedroom){
						nextscreen = changeMessage(this,
							"There are a couple of drawers underneath your bed where you keep most of your clothes, \
							which isn’t much since you generally wear the same blue jumpsuit.");
					}
					else if (captainsroo){
						nextscreen = changeMessage(this,
							"The captain's bed is much nicer than mine.");
					}
				break;
				
				case 'look seat':
					if (cockpit && pamphlet3 === 1){
						nextscreen = changeMessage(this,
							"You notice a small pamphlet wedged between the cushions of the pilot seat.");
					}
				break;
				
				case 'take crowbar':
					if (supplies){
						nextscreen = changeMessage(this,
							"You reach into the closet and take the crowbar.");
					}
					crowbar = 1;
				break;
				
				case 'open freezer':
				case 'open refrigerator':
					if (cafeteria){
						nextscreen = changeMessage(this,
							"You pull of the handle of the large door to no avail.");
					}
				break;
				
				case 'unlock freezer':
				case 'unlock refrigerator':
					if (cafeteria){
						nextscreen = changeMessage(this,
							"You try waving your unikey around in front of the refrigerator door handle but nothing seems to happen. \
							You try the handle of the door just to make sure, but the door is definitely stuck. Maybe it’s frozen shut? \
							With enough force you could probably open it...");
					}
				break;
				
				case 'use crowbar on freezer':
				case 'use crowbar on freezer door':
				case 'use crowbar on refrigerator':
				case 'use crowbar on refrigerator door':
					if (cafeteria && crowbar === 1){
						nextscreen = changeMessage(this,
							"You wedge the crowbar into the space between the door and the frame and use all of your strength\
							to pry open the door. Something gives; the door flies open and you feel a gust of crisp cool air rush out. \
							You walk inside.");
					}
					freezer = true;
					cafeteria = false;
				break;
				
				
				
				case 'use screwdriver on freezer':
				case 'use screwdriver on freezer door':
				case 'use screwdriver on refrigerator':
				case 'use screwdriver on refrigerator door':
					if (cafeteria && screwdriver === 1){
						nextscreen = changeMessage(this,
							"You try using the screwdriver to force open the door; it’s no good. \
							The screwdriver started to bend and the door didn’t show any sign of coming unstuck.");
					}
				break;
				
				
				
				case 'exit med bay':
					if (medbay){
						if (oncot){
							nextscreen = changeMessage(this,
								"You are still lying down!");
						}
						else{
							nextscreen = changeMessage(this,
								"You pull open the door to the med bay and step back into the corridor.");
							medbay = false;
							uppercorridor2 = true;
						}
					}
				break;
				
				case 'exit rec room':
					if (recroom){
						if (oncouch){
							nextscreen = changeMessage(this,
							"You have to get off the couch first!");
						}
						else{
							nextscreen = changeMessage(this,
								"There doesn’t seem to be anything important in the rec room so you \
								open the door and walk back into the corridor.");
							recroom = false;
							lowercorridor3 = true;
						}
					}
				break;
				
				case 'sit couch':
				case 'sit on couch':
					if (recroom){
						nextscreen = changeMessage(this,
							"You sit down on the extremely comfortable couch.");
					}
					sitcouch = true;
				break;
				
				case 'look at couch':
				case 'examin couch':
				case 'look couch':
					if (recroom){
						nextscreen = changeMessage(this,
							"The couch is extremely comfortable. You’ve fallen asleep there on a couple of occasions.");
					}
					sitcouch = true;
				break;
			
				case 'exit couch':
					if (recroom){
						nextscreen = changeMessage(this,
							"It takes a while for you to decide whether you really want to get up, but you decide \
							you’d better get back to figuring out what the heck happened on this ship.");
					}
					sitcouch = false;
				break;
				
				case 'exit mess hall':
					if (cafeteria){
						nextscreen = changeMessage(this,
							"You leave the cafeteria.");
					}
					cafeteria = false;
					lowercorridor1 = true;
				break;
				
				case 'look TV':
					if (recroom){
						nextscreen = changeMessage(this,
							"You generally ignore whatever is on the TV. Usually it’s something stupid like \
							“Alien Idol” or “Squirrel Code”; absolute rubbish. Though you do sometimes get \
							caught up in game shows like “Who wants to be a Quintillionaire?” You know the \
							answer most of the questions asked on that show, I mean you’d totally be able \
							to walk away with a couple million at least, right?");
					}
				break;
				
				case 'look fuse-ball table':
					if (recroom){
						nextscreen = changeMessage(this,
							"You suck at fuse-ball, you generally avoid it.");
					}
				break;
				
				case 'look pool table':
					if (recroom){
						nextscreen = changeMessage(this,
							"The crew members sometimes challenge you to pool. You play koi most of the time, \
							but when you do play, it’s pretty shameful… for the challenger. \
							You are the reigning champ of the pool table.");
					}
				break;
				
				
				case 'exit cot':
					if (oncot){
						nextscreen = changeMessage(this,
							"You get up off of the cot.");
						oncot = false;
					}
				break;
				
				case 'open locker':
					if (lockerroom){
						nextscreen = changeMessage(this,
							"You unlock your locker using the combination that only you know.");
						lockeropen = true;
					}
				break;
				
				case 'close locker':
					if (lockerroom){
						nextscreen = changeMessage(this,
							"You slam your locker shut for some unknown reason.");
						lockeropen = false;
					}
				break;
				
				case 'check locker':
					if (lockeropen){
						nextscreen = changeMessage(this,
							"Your locker is totally empty except for a small rectangular device perched on the top shelf. The unikey.");
					}
				break;
				
				
				
				case 'take unikey':
					if (lockeropen){
						if (unikey == -1){
							nextscreen = changeMessage(this,
								"You take the unikey and put it in your pocket."); 
							unikey = 1;
						}
					}
				break;
					
				case 'look changing area':
					if (lockerroom){
						nextscreen = changeMessage(this,
							"The changing areas are completely empty, not surprisingly. Isn't it about \
							time you started figuring out what happened in this place?"); 
					}
				break;
				
				case 'sleep':
					if (oncot){
						nextscreen = changeMessage(this,
							"You take a quick nap and feel completely restored.");
					}
					else{
						nextscreen = changeMessage(this,
							"Maybe if you had a better place to sleep.");
					}
				break;
				
				case 'check cabinets':
					if (medbay){
						nextscreen = changeMessage(this,
							"You check the contents of all the cabinets but they seem to have recently been cleaned out.");
					}
				break;
				
				case 'exit locker room':
					if (lockerroom){
						nextscreen = changeMessage(this,
							"You pull open the door to the locker room and step back into the corridor.");
						lockerroom = false;
						lowercorridor3 = true;
					}
				break;
				
				case 'go north':
					if (uppercorridor2){
						nextscreen = changeMessage(this,
							"There is a door in the way.");
					}
					else if (uppercorridor1){
						nextscreen = changeMessage(this,
							"You move north up the corridor.");
							uppercorridor1 = false;
							uppercorridor2 = true;
					}
					else if (uppercorridor3){
						nextscreen = changeMessage(this,
							"There is a door in the way.");
					}
					if (lowercorridor3){
						nextscreen = changeMessage(this,
							"You move north up the corridor.");
							lowercorridor3 = false;
							lowercorridor2 = true;
					}
					else if (lowercorridor2){
						nextscreen = changeMessage(this,
							"You move north up the corridor.");
							lowercorridor2 = false;
							lowercorridor1 = true;
					}
					else if (lowercorridor1){
						nextscreen = changeMessage(this,
							"There is a door in the way.");
					}
				break;
				
				
				
				case 'go south':
					if (uppercorridor2){
						nextscreen = changeMessage(this,
							"You move south down the corridor.");
						uppercorridor2 = false;
						uppercorridor1 = true;
					}
					else if (uppercorridor3){
						nextscreen = changeMessage(this,
							"There is a door in the way.");
					}
					else if (uppercorridor1){
						nextscreen = changeMessage(this,
							"There is a door in the way.");
					}
					if (lowercorridor2){
						nextscreen = changeMessage(this,
							"You move south down the corridor.");
							lowercorridor2 = false;
							lowercorridor3 = true;
					}
					else if (lowercorridor1){
						nextscreen = changeMessage(this,
							"You move south down the corridor.");
							lowercorridor1 = false;
							lowercorridor2 = true;
					}
					else if (lowercorridor3){
						nextscreen = changeMessage(this,
							"There is a wall in the way.");
					}
				break;
					
				case 'flip AG switch':
					if (cockpit){
						nextscreen = changeMessage(this,
							"You just turned off artificial gravity. You and everything else \
							on this ship are now completely weightless.");
						AG = 0;
					}
				break;
				
				case 'check sink':
				case 'look sink':
					if (mensroom || womensroom){
						nextscreen = changeMessage(this,
							"The sink is very clean.");
					}
				break;

				case 'drink sink':
				case 'drink from sink':
					if (mensroom || womensroom){
						nextscreen = changeMessage(this,
							"You stick your head under the faucet and take a swig of the good old H2O");
					}
				break;
				
				case 'check trash can':
					if (mensroom){
						nextscreen = changeMessage(this,
							"The trash can is empty.");
					}
					else if (womensroom){
						nextscreen = changeMessage(this,
							"Sitting on the bottom of the trash can is something you definitely were \
							not expecting; a large wrench. You scratch your head the way that people \
							do when they are perplexed about something.");
					}
					else if (medbay){
						nextscreen = changeMessage(this,
							"The trash can is full of used tissues, bandages, and other medical supplies. You'd rather not stick your hand inside.");
					}
				break;
				
				case 'take wrench':
				case 'take large wrench':
					if (womensroom){
						nextscreen = changeMessage(this,
							"You take the wrench.");
						wrench = 1;
					}
				break;
				
				case 'check emergency light':
				case 'look emergency light':
					if (mensroom){
						nextscreen = changeMessage(this,
							"For as long as you’ve had this job, you haven’t seen the emergency lights \
							activated for any reason. You can’t help but feel as though this isn’t a drill.");
					}
				break;
				
				case 'exit bathroom':
					if (mensroom || womensroom){
						nextscreen = changeMessage(this,
							"You push open the bathroom door and walk into the corridor.");
					}
					uppercorridor1 = true;
					mensroom = false;
					womensroom = false;
				break;
				
				case 'exit cockpit':
					if (cockpit){
						nextscreen = changeMessage(this,
								"You exit the cockpit and head back to the main corridor.");
						cockpit = false;
						inchair = false;
						uppercorridor1 = true;
					}
					break;
				
				case 'take toilet paper':
						if (toiletpaper < 0){
							nextscreen = changeMessage(this,
								'You grab the roll of toilet paper. Perhaps it will come in handy later?');
							//saveItem('toiletpaper', function(){});
							toiletpaper = toiletpaper * -1;
						}
						else{
							nextscreen = changeMessage(this,
								'You grab the empty toilet paper roll. Perhaps it will come in handy later?');
							//saveItem('toiletpaperroll', function(){});
							toiletpaperroll = toiletpaperroll * -1;
						}
					break;
				
				case 'look toilet':
				case 'check toilet':
					if (stall || ontoilet){
						nextscreen = changeMessage(this,
								"There's nothing particularly extraordinary about this toilet");
					}
					break;
				
				case 'look windshield':
					if (cockpit){
						nextscreen = changeMessage(this,
								"You look out into space through the windshield from the comfort of the pilot's chair. \
								The spattering of tiny white dots in an infinite expanse of darkness is just as breathtaking \
								as ever. If memory serves, you should be out somewhere near Delta-47, but the view dictates \
								otherwise. You're no more than an astronomical unit away from a nebula that you've never seen \
								before; the nearest nebula shouldn't be a good 2 light-years away! Something's definitely not \
								right here.");
					}
					break;
					
				case 'look control panel':
					if (cockpit){
						nextscreen = changeMessage(this,
								"On the control panel you see a lot of switches and buttons that you're really not familiar with.");
					}
					break;
					
				case 'look buttons':
					if (cockpit){
						nextscreen = changeMessage(this,
								"You see a row of 7 buttons. The first 3 are labeled Tar, Nav, and Sys. The rest are labeled \
								in sequential order; 1, 2, 3, and 4. The buttons labeled 1 and 4 seem to be lit up from behind.");
					}
					break;
					
				case 'look switches':
					if (cockpit){
						nextscreen = changeMessage(this,
								"You see a row of 3 switches labeled AG, EI, and WS.");
					}
					break;
				
				case 'use toilet paper':
					if (toiletpaper > 0){
						if (ontoilet){
							toiletpaper--;
							if ( toiletpaper === 0 ){
								nextscreen = changeMessage(this,
									'You use the toilet paper in the only way you know how. That was the last of the toilet paper, \
									now you are left with just the roll.');
								wiped = true;
								toiletpaperroll = 1;
							}
							else{
								nextscreen = changeMessage(this,
									'You use the toilet paper in the only way you know how.');
								wiped = true;
							}
						}
						else{
							toiletpaper--;
							if ( toiletpaper === 0 ){
								nextscreen = changeMessage(this,
									'You unroll some of the toilet paper and blow your nose with it. That was the last \
									of the toilet paper, now you are left with just the roll.');
								toiletpaperroll = -1;
							}
							else{
								nextscreen = changeMessage(this,
									'You unroll some of the toilet paper and blow your nose with it.');
								toiletpaper--;
							}
						}
							
					}
					else if (toiletpaper < 0){
						if (ontoilet){
							toiletpaper++;
							if ( toiletpaper === 0 ){
								nextscreen = changeMessage(this,
									'You use the toilet paper in the only way you know how. That was the last of the toilet paper, \
									now you are left with just the roll.');
								wiped = true;
								toiletpaperroll = -1;
							}
							else{
								nextscreen = changeMessage(this,
									'You use the toilet paper in the only way you know how.');
								wiped = true;
							}
						}
						else if (stall){
							toiletpaper++;
							nextscreen = changeMessage(this,
								'You unroll some of the toilet paper and blow your nose with it.');
						}
					}
					break;
				case 'use toilet':
				case 'flush':
				case 'flush toilet':
					if (wiped && !flushed){
						nextscreen = changeMessage(this,
							'You stand up, pull up your pants, and flush the toilet.');
						ontoilet = false;
						flushed = true;
						stall = true;
					}
					else{
						nextscreen = changeMessage(this,
							"It's not quite time for that yet.");
					}
					break;
				case 'drink toilet':
					nextscreen = changeMessage(this,
						'Why would you do that? What is wrong with you?');
					break;
				case 'open door':
					if(stall){
						if (!open){
							nextscreen = changeMessage(this,
								'The door is locked.');
						}
						else{
							nextscreen = changeMessage(this,
								'The door is already open.');
						}
							
					}
					if(uppercorridor1){
						nextscreen = changeMessage(this,
								"Please specify which door you'd like to open");
					}
					if(uppercorridor2){
						nextscreen = changeMessage(this,
								"Please specify which door you'd like to open");
					}
					if(uppercorridor3){
						nextscreen = changeMessage(this,
								"Please specify which door you'd like to open");
					}
					if(lowercorridor1){
						nextscreen = changeMessage(this,
								"Please specify which door you'd like to open");
					}
					if(lowercorridor2){
						nextscreen = changeMessage(this,
								"Please specify which door you'd like to open");
					}
					if(lowercorridor3){
						nextscreen = changeMessage(this,
								"Please specify which door you'd like to open");
					}
					break;
				case 'unlock door':
					if(stall){
						nextscreen = changeMessage(this,
						'You slide the lock to the right, thus unlocking the stall door. You push it open.');
						open = true;
					}
					break;
				case 'exit stall':
					if (open){
						nextscreen = changeMessage(this,
							"You walk out of the stall and into the bathroom. Your foot shoots out from under you. \
							You feel your body falling but it's too late to do anything about it. Your head hits the \
							floor with a thunk and your vision slowly fades to black.");
						stall = false;
						dream = true;
						open = false;
					}
					else{
						if(stall){
							nextscreen = changeMessage(this,
									"There is a door in the way.");
						}
					}
					break;
				case 'look at wife':
				case 'look wide':
					if(dream){
						nextscreen = changeMessage(this,
							"You look at your wife and she smiles. You hear a murmur from the crib in front of you. \
							The baby is asleep, probably dreaming of impossible things; things we couldn't comprehend \
							in even our wildest dreams. Babies have no sense of reality, yet. If only they had the \
							ability to convey what goes on in their tiny heads. Perhaps words couldn't even convey what \
							goes on in a baby's mind.");
					}
					break;
				case 'look at baby':
				case 'look baby':
					if(dream){
						nextscreen = changeMessage(this,
							"You gaze upon the face of your new born child. You've never seen a more feeble creature. \
							So fragile and delicate. You love her more than anything; enough to sacrifice everything. \
							You would die for her.");
					}
					break;
				case 'pick up baby':
				case 'grab baby':
				case 'take baby':
					if(dream){
						nextscreen = changeMessage(this,
							"You pick up the baby and cradle her in your arms, still wrapped up in her blanket \
							like a cocoon. Your wife glares at you as if to say 'Hey! You're ganna wake her up!' \
							It's fine though, the baby is sound asleep. You look back at the baby's face.\
							...\
							It's gone.\
							The blanket falls through your arms to the…\
							There is no ground.\
							It just keeps falling.");
						pickedupbaby = true;
					}
					break;
				case 'wake up':
					if(dream){
						nextscreen = changeMessage(this,
							"You wake up with a start and quickly realize that you are still lying on the bathroom floor. \
							A dream. Of course it was a dream. Wait, what was a dream? You can't even remember anymore. \
							You slowly regain your senses and try to pick yourself up. When you realize what happened, you \
							feel extremely embarrassed; the slippery floor was your own doing. You of all people should \
							have heeded the warning of the wet floor sign in the middle of the room.");
						dream = false;
						mensroom = true;
					}
					else{
						nextscreen = changeMessage(this,
							'You are not asleep...');
					}
					break;
				
				default:
					nextscreen = changeMessage(this,
						'Sorry, but that does not make any sense to me.');
					break;
			}
			goToScreen(nextScreen);
			return nextScreen;
		}
	},

<<<<<<< HEAD
=======

>>>>>>> d801f6c17a1390469ed9a62baa7d0f03ce3501cf
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