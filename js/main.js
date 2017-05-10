$(document).ready(function(){

    var countTime = parseInt($('#num').html());
    var countBreak = parseInt($('#breakNum').html());
    $('#reset').hide();
    //Start event
    $('#start').click(function(){
      var counter = setInterval(timer, 1000);
      //Timer function
      function timer(){
        //Hide variables
        $('#start, #minusTime, #plusTime', '#plusBreak', '#minusBreak').hide();
        countTime-=1;
        $('#titleTime').html('SESSION TIME')
        $('#timerType').html(countTime);
        if(countTime===0){
          clearInterval(counter);
          var startBreak = setInterval(breakTimer, 1000);
        }
        //BreakTime function
        function breakTimer(){
          countBreak-=1;
          $('#titleTime').html('BREAK TIME')
          $('#timerType').html(countBreak);
          if(countBreak===0){
            clearInterval(startBreak);
            $('#reset').show();
          }
        }
      }

    });

    $('#minusTime').click(function(){
      if(countTime>0){
          countTime -=1;
      }
      $('#num').html(countTime);
    });

    $('#plusTime').click(function(){
      if(countTime<25){
          countTime +=1;
      }
      $('#num').html(countTime);
    });

    $('#minusBreak').click(function(){
      if(countBreak>0){
          countBreak -=1;
      }
      $('#breakNum').html(countBreak);
    });

    $('#plusBreak').click(function(){
      if(countBreak<30){
          countBreak +=1;
      }
      $('#breakNum').html(countBreak);
    });
});
