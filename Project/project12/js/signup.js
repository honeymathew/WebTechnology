var question = [
	"What is your mother's maiden name?",
	"What is the name of your first pet?",
	"What was your first car?",
	"What elementary school did you attend?",
	"What is the name of the town where you were born?",
	"Which is your favourite book?",
	"Who was your childhood hero?",
	"Where was your best family vacation as a kid?",
	"Which is your favourite place?",
	"Who is your role model?",
	"Name of your best friend?",
	"Which is your favourite movie?",
	"Who is your favourite actor?"
];
var answer = [
	"maria",
	"simbha",
	"maruthi",
	"lkg",
	"calicut",
	"balarama",
	"me",
	"paris",
	"kerala",
	"father",
	"allan",
	"niram",
	"deepika"
];

var x = Math.floor((Math.random() * 10) + 1);

function securityQuestion() { 	
	document.getElementById("form_security").placeholder = question[x-1];		
}

$(function() {

	$("#username_error_message").hide(); 
	$("#password_error_message").hide(); 
	$("#retype_password_error_message").hide(); 
	$("#firstname_error_message").hide(); 
	$("#lastname_error_message").hide(); 
	$("#email_error_message").hide(); 
	$("#birthday_error_message").hide();
	$("#security_error_message").hide();

	var error_username = false; 
	var error_password = false; 
	var error_retype_password = false;
	var error_firstname = false;
	var error_lastname = false;
	var error_email = false; 
	var error_birthday = false;
	var error_security = false;

	$("#form_username").focusout(function() {

		check_username();
		
	});

	$("#form_password").focusout(function() {

		check_password();
		
	});

	$("#form_retype_password").focusout(function() { 

		check_retype_password();
		
	});
	
	$("#form_firstname").focusout(function() { 

		check_firstname();
		
	});
	
	$("#form_lastname").focusout(function() { 

		check_lastname();
		
	});

	$("#form_email").focusout(function() { 

		check_email(); 
		
	});
	
	$("#form_birthday").focusout(function() { 

		check_birthday(); 
		
	});
	
	$("#form_security").focusout(function() { 
	
		check_security(); 
		
	});
	
	

	function check_username() { 
	
		var username_length = $("#form_username").val().length;
		
		if(username_length == 0) { 
			$("#username_error_message").html("Username should be filled");
			$("#username_error_message").show(); 
			error_username = true;
		} else if(username_length < 5 || username_length > 20) { 
			$("#username_error_message").html("Username should be between 5-20 characters");
			$("#username_error_message").show(); 
			error_username = true;
		} else {
			$("#username_error_message").hide(); 
		}
	
	}

	function check_password() { 
	
		var password_length = $("#form_password").val().length;
		
		if(password_length == 0) { 
			$("#password_error_message").html("Password should be filled");
			$("#password_error_message").show(); 
			error_username = true;
		}else if(password_length < 8) { 
			$("#password_error_message").html("Password should have at least 8 characters");
			$("#password_error_message").show();
			error_password = true;
		} else {
			$("#password_error_message").hide();
		}
	
	}

	function check_retype_password() {
	
		var password = $("#form_password").val(); 
		var retype_password = $("#form_retype_password").val();
		
		if(password !== retype_password) { 
			$("#retype_password_error_message").html("Passwords don't match");
			$("#retype_password_error_message").show();
			error_retype_password = true;
		} else{ 
			$("#retype_password_error_message").hide();
		}
	
	}
	
	function check_firstname() { 
	
		var firstname_length = $("#form_firstname").val().length;
		
		if(firstname_length == 0) { 
			$("#firstname_error_message").html("Firstname should be filled");
			$("#firstname_error_message").show(); 
			error_firstname = true;		
		} else {
			$("#firstname_error_message").hide(); 
		}
	
	}
	
	function check_lastname() { 
	
		var lastname_length = $("#form_lastname").val().length;
		
		if(lastname_length == 0) { 
			$("#lastname_error_message").html("Lastname should be filled");
			$("#lastname_error_message").show(); 
			error_lastname = true;		
		} else {
			$("#lastname_error_message").hide(); 
		}
	
	}

	function check_email() { 

		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i); 
	
		if(pattern.test($("#form_email").val())) {
			$("#email_error_message").hide();
		} else {
			$("#email_error_message").html("Invalid email address");
			$("#email_error_message").show();
			error_email = true;
		}
	
	}
	
		
	function check_security() {
	
		var securityAns = $("#form_security").val(); 
		
		if(securityAns !== answer[x-1]) { 
			$("#security_error_message").html("Answer is not correct");
			$("#security_error_message").show();
			error_security = true;
		} else{ 
			$("#security_error_message").hide();
		}
	
	}

	$("#registration_form").submit(function() {
											
		error_username = false;
		error_password = false;
		error_retype_password = false;
		error_firstname = false;
		error_lastname = false;
		error_email = false;
		error_security = false;
											
		check_username();
		check_password();
		check_retype_password();
		check_firstname();
		check_lastname();
		check_email(); 
		check_security();
		
		if(error_username == false && error_password == false && error_retype_password == false && error_firstname == false &&
		error_lastname == false && error_email == false && error_security == false) {
			return true; 
		} else {
			return false;	
		}

	});
	
	

});




