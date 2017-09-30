$().ready(function () {

	$("#signupPage").validate({
	rules: {
		fname:"required",
		lname:"required",
		email: {
			required:true,
			email:true
		},
		password: {
            required:true,
            minlength:6
		},
		repassword: {
            required:true,
            minlength:6
		},
		bmonth: {
			required:true
		},
		bdate: {
            required:true
		},
		byear:"required",
		gender:"required",
	},
	messages: {
		fname:"Please enter your firstname",
		lname:"Please enter your lastname",
		email: {
			required:"Please enter valid email",
			
		},
		password: {
            required:"Please provide a password",
            minlength:"your password must be atleat 6 characters"
		},
		repassword: {
            required:"Please provide a password",
            minlength:"your password must be atleat 6 characters"
		},
        bmonth: {
			required:"Please provide a month"
		},
		bdate: {
			required:"Provide a date"
		},
		byear:"Provide a year",
        gender:"Please select Gender",
	},
	submitHandler:function(form){
		return false;
	}	
	});
});