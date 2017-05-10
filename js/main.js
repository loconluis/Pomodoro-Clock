$(document).ready(function(){
  var beep = $('#beep')[0];
    var countTime = parseInt($('#num').html());
    var countBreak = parseInt($('#breakNum').html());
    $('#reset').hide();
    //Start event
    $('#start').click(function(){
      var counter = setInterval(timer, 1000);
      countTime=countTime*60;
      countBreak=countBreak*60;
      //Timer function
      function timer(){
        //Hide variables
        $('#start').hide();
        countTime-=1;
        $('#titleTime').html('SESSION TIME')
        //$('#timerType').html(countTime);
        if(countTime===0){
          clearInterval(counter);
          beep.play();
          var startBreak = setInterval(breakTimer, 1000);
        }
        if(countTime%60>=10){
          $('#timerType').html(Math.floor(countTime/60)+':'+countTime%60);
        }else{
          $('#timerType').html(Math.floor(countTime/60)+':0'+countTime%60);
        }
        //BreakTime function
        function breakTimer(){
          countBreak-=1;
          $('#titleTime').html('BREAK TIME')
          if(countBreak===0){
            clearInterval(startBreak);
            beep.play();
            $('#reset').show();
          }
          if(countBreak%60>=10){
            $('#timerType').html(Math.floor(countBreak/60)+':'+countBreak%60);
          }else{
            $('#timerType').html(Math.floor(countBreak/60)+':0'+countBreak%60);
          }
        }
      }

    });

    //Reset event
    $('#reset').click(function(){
      countTime = 25;
      countBreak = 5;
      $('#num').html(countTime);
      $('#breakNum').html(countBreak);
      $('#start').show();
      $('#titleTime').html('TIME')
      $('#timerType').html("");
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
