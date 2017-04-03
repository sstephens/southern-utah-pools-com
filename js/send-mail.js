(function(self) {

	function sendMail(customer, email, body) {
    var emailTo = "biillllyohya@gmail.com";
		var subject = customer + " has a question for Southern Utah Pools";
		window.open('mailto:' + emailTo + '?subject=' + subject + '&body=' + body + " (replay to:" + email + ")");
	}

	self.submitMail = function() {
		var firstName = document.querySelector('#mail-to > input[name="first_name"]').value;
		var lastName = document.querySelector('#mail-to > input[name="last_name"]').value;
		var email = document.querySelector('#mail-to > input[name="email"]').value;
		var message = document.querySelector('#mail-to > textarea[name="message"]').value;

		sendMail(firstName + ' ' + lastName, email, message);
	};

})(window);
