$(function(){
	$("#add").click(function(e){
		e.preventDefault();

		var msg = $("#title").val();
		var desc = $("#description").val();

		$('<div class="list">'
			+'<div class="item">'+ msg +'</div>'
			+'<div class="des">'+ desc + '</div>'
			+'<a href="#" class="remove">x</a>'
			+'</div>'
			+'<br>').appendTo(".errands");
	});


	$(".errands").on('click', '.remove', function(e) {
		e.preventDefault();

		$(this).parent().remove();
	});

});