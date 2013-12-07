$(document).ready(function(){
     var d = new Date();
     var day = d.getDay();
     var msg = new Array(7);
     msg[0] = "Sunday Funday!";
     msg[1] = "KEEP CALM AND STAY FOCUSED";
     msg[2] = "Creativity is a highfalutin word for the work I have to do between now and Tuesday.Ray Kroc";
     msg[3] = "When people refer to 'Back in the Day,' it was a Wednesday. Just a little fun fact for you.Dane Cook";
     msg[4] = "By Thursday morning, we'd gotten over the worst of it.";
     msg[5] = "If you must have motivation, think of your paycheck on Friday.Noel Coward";
     msg[6] = "My work is like my vacation, so in a way every day is like Saturday.Ludacris";

    $(".hidden").text(msg[day]);
});