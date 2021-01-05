$(function() {

	$("#username_error_message").hide(); 
	$("#password_error_message").hide(); 


	var error_username = false; 
	var error_password = false; 
	

	$("#form_username").focusout(function() {

		check_username();
		
	});

	$("#form_password").focusout(function() {

		check_password();
		
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

	

	$("#login_form").submit(function() {
											
		error_username = false;
		error_password = false;
													
		check_username();
		check_password();
		
		
		if(error_username == false && error_password == false) {
			return true; 
		} else {
			return false;	
		}

	});

});