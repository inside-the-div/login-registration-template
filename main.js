const url = new URL(window.location.href);
const actionFrom = url.searchParams.get('actionFrom');

if(actionFrom != null && actionFrom == "login"){
	ShowLoginForm();
}else if(actionFrom != null && actionFrom == "registration"){
	ShowRegistrationForm();
}else if(actionFrom != null && actionFrom == "forgot-password"){
	ShowForgotPasswordForm();
}else if(actionFrom != null && actionFrom == "reset-password"){
	ShowResetPasswordForm();
}else{
	ShowLoginForm();
}

function ShowLoginForm(){

	var formTitle = document.getElementById('formTitle');
	formTitle.innerHTML = "Login";

	ShowHideForm("LoginFrom","Show");

	ShowHideForm("RegistrationFrom","Hide");
	ShowHideForm("ResetPasswordForm","Hide");
	ShowHideForm("ForgotPasswordForm","Hide");

	ActiveInactiveBtn("ShowLoginBtn","Active");
	ActiveInactiveBtn("ShowRegistrationBtn","Inactive");

	ShowHideFromSwitchBtn("Show");
};

function ShowRegistrationForm(){
	var formTitle = document.getElementById('formTitle');
	formTitle.innerHTML = "Registration";

	ShowHideForm("RegistrationFrom","Show");
	ShowHideForm("LoginFrom","Hide");
	ShowHideForm("ResetPasswordForm","Hide");
	ShowHideForm("ForgotPasswordForm","Hide");

	ActiveInactiveBtn("ShowLoginBtn","Inactive");
	ActiveInactiveBtn("ShowRegistrationBtn","Active");

	ShowHideFromSwitchBtn("Show");
};

function ShowForgotPasswordForm() {
	var formTitle = document.getElementById('formTitle');
	formTitle.innerHTML = "Forgot Password";

	ShowHideForm("RegistrationFrom","Hide");
	ShowHideForm("LoginFrom","Hide");
	ShowHideForm("ResetPasswordForm","Hide");
	ShowHideForm("ForgotPasswordForm","Show");

	ActiveInactiveBtn("ShowLoginBtn","Inactive");
	ActiveInactiveBtn("ShowRegistrationBtn","Inactive");
	ShowHideFromSwitchBtn("Hide");
}

function ShowResetPasswordForm(){
	var formTitle = document.getElementById('formTitle');
	formTitle.innerHTML = "Reset Password";

	ShowHideForm("RegistrationFrom","Hide");
	ShowHideForm("LoginFrom","Hide");
	ShowHideForm("ForgotPasswordForm","Hide");
	ShowHideForm("ResetPasswordForm","Show");

	ActiveInactiveBtn("ShowLoginBtn","Inactive");
	ActiveInactiveBtn("ShowRegistrationBtn","Inactive");
	ShowHideFromSwitchBtn("Hide");
}

function ShowHideForm(FormID,ShowOrHide){
	var Form = document.getElementById(FormID);

	if(ShowOrHide == "Show"){
		Form.style.display = 'block';
	}else{
		Form.style.display = 'none';
	}
}

function ActiveInactiveBtn(ButtonID,ActiveORInactive) {
	var Button = document.getElementById(ButtonID);

	if(ActiveORInactive == "Active"){
		Button.classList.add('active');
	}else{
		Button.classList.remove('active');
	}
}

function ShowHideFromSwitchBtn(ShowOrHide) {
	var formSwitchBtn = document.getElementById('formSwitchBtn');
	if(ShowOrHide == 'Show'){
		formSwitchBtn.style.display = '';
	}else{
		formSwitchBtn.style.display = 'none';
	}
}

// end