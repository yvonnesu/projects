		$(document).ready(function(){
		    $("#content").focus();

		    var msg = [
		    "好耶",
		    "wow This is Great idea!!",
		    "This is one of the greatest ideas I've seen.",
		    "Thank you so much for coming up with this.",
		    "Lol!",
		    "Thx! It sounds good for you.",
		    "Love it!",
		    "What a fun thing-- a writer's block vanquisher!",
		    "freaking fantastic! exactly what I was looking for.",
		    "This is a really cool script! Thanks! :)"
		    ]

			$("#form").submit(function(event){
				event.preventDefault();
	    		$("#msg").text(msg[Math.floor(Math.random()*10)]);

	    		var value = $("#content").val().replace(/^\s+|\s+$/g, "");
	    		if(value == ""){
	    			value = "don't fill in forms"
	    			$("#msg").text("");
	    		}
	    		$("#reply").text(value+ "!!!");

	    		$("#content").val();
  			});


  			
		});
		
		