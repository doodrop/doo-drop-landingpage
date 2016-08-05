
$(document).ready(function() {
	$("#subscribe-form").submit(function(e){
		e.preventDefault();
		$('#loading-spinner').show();

		var model={
			"email": $("#email").val(),
			"firstName": $("#first-name").val(),
			"lastName": $("#last-name").val()
		};

		$.ajax({
			type: "POST",
			url: "https://ancient-crag-99619.herokuapp.com/send-email",
			data: JSON.stringify(model),
			contentType: "application/json; charset=utf-8",
			success: function(msg) {
				$('#success-message').show();
				$('#error-message').hide();
				$('#loading-spinner').hide();
			},
			error: function(error) {
				$('#error-message').show();
				$('#success-message').hide();
				$('#loading-spinner').hide();
			}
		});

		$("#email").val('');
		$("#first-name").val('');
		$("#last-name").val('');
		return false;
	});

});
