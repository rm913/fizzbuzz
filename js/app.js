$(document).ready(function(){

	

	//$('#submit').click(function(){

	var num = $('#number').val();
	for(i=1;1<=100;1++){

	if (num % 5 == 0 && num % 3 ==0) {
		
		$('.answer ul').append('<li>'+ "Fizz-Buzz" + '</li>');
	}
	else if (num % 5 == 0) {
		$('.answer ul').append('<li>'+ "Buzz" + '</li>');
	}
	else if ( num % 3 ==0) {
		$('.answer ul').append('<li>'+ "Fizz" + '</li>');
	}
	else {
		$('.answer ul').append('<li>'+ num + '</li>');

	//}
	}
	});

});
