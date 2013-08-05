
var USER_NAME;

function createAccount(username, password, callback) {
	$.ajax({
		type : "POST",
		url : "scripts/test.php",
		data : {
			uname : username,
			pw : password
		},
		
		success : function (data) {
			if (data == 0) {
				callback(false);
			} else {
				callback(true);
			}
		},
		error : function(data) {
			callback(false);
		}
	});
};

function login(username, password, callback) {
	$.ajax({
		type : "POST",
		url : "scripts/moarTesting.php",
		data : {
			uname : username,
			pw : password
		},
		success : function (data) {
			if (data == 'success') {
				USER_NAME = username
				callback(true);
			} else {
				callback(false);
			}
		},
		error : function(data) {
			callback(false);
		}
	});
};

function saveItemToDB(itemToSave, save, callback) {
	var own;
	$.ajax({
		type : "POST",
		url : "scripts/saveItem.php",
		data : {
			username : USER_NAME,
			item : itemToSave,
			saveData : save
		}
	}).success(function(data) {
		if (data == 1) {
			callback(true);
		} else if (data == 0) {
			callback(false);
		} else {
			callback();
		}
	});
};

function getUserName() {
	return USER_NAME;
};