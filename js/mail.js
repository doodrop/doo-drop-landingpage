
$(document).ready(function() {
	$("#subscribe-form").submit(function(e){
		e.preventDefault();
		var model={
		    "email":$("#email").val(),
		    "firstName":$("#first-name").val(),
		    "lastName": $("#last-name").val()
		};

		$.ajax({
		    type: "POST",
		    url: "https://ancient-crag-99619.herokuapp.com/send-email",
		    data: JSON.stringify(model),
		    contentType: "application/json; charset=utf-8",
		    success: function(msg) {
				$('#success-message').css('display','block');
				console.log('#success-message');	
		    },
		    error: function(error) {
		       $('#error-message').css('display','block')
	    	}
   		});
   		return false;
	});

});