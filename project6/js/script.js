                            
              $(function(){  
                  $('#love').click(function(){
                    $('.drop').removeClass("rain cookie").addClass('heart');
                    removeBacon();
                  });                  

                  $('#hope').click(function(){
                    $('.drop').removeClass("rain heart cookie").addClass('rain');
                    removeBacon();
                  });

                  
                  $('#cookie').click(function(){
                    $('.drop').removeClass("rain heart").addClass("cookie");
                    insertBacon(150);
                  });
                  
                  function insertBacon(num) {
                      $(".drop").html('<img src="img/cookie.png">');

                  }
                  function removeBacon(){
                    $(".drop").html(" ");

                  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
                    
  function makeDrop(num, position) {
      for(var num = 0; num<31; num++){
        /*放個體一顆*/
        var drop = '<div class="drop rain" id="drop_' + num + '"></div>';
        $(drop).appendTo(".area");

        $('#drop_' + num).css('left', randomInt(60, 280));
      
      }
  }
  makeDrop();
  




  function makeRain(num, speed) {
    for(var num=0; num <= 30; num++){
        /*num已經有數字了,所以要直接用.要跟以上連結而且這裡的num代表次數*/

      setTimeout(function () {
           
        $('#drop_' + randomInt(0, 30)).addClass('animate');
      
      },  Math.random()*3150);

    }
  }
  makeRain();


              });

