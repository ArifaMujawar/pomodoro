var sessionLength,newSess;
  var sec,newSec;
  var breakLength;
var paused=false;
 var myTimer=0,breakTimer=0;
var beepStop=false;  var count,bcount;
$(document).ready(function(){
   $('#play').show();
  $('#pause').hide();
  $('#repeat').hide();
    $('#stop').hide();
   count=$('.sessVal').text();
   $('.da').html(count+" :"+ 00 +'<br>');
    
});

$('.inc1').click(function(){
  var bcount=$('.breakVal').text();
  bcount++;
  $('.breakVal').text(bcount);
     
});
$('.inc2').click(function(){
   count=$('.sessVal').text();
  count++;
  $('.sessVal').text(count);
  checkFortimerVal(count);
  });

$('.dec1').click(function(){
   var bcount=$('.breakVal').text();
  bcount--;
  if(bcount<0)
   { alert("Negative time");
    return;}
  $('.breakVal').text(bcount);
  
  
});
$('.dec2').click(function(){
   count=$('.sessVal').text();
  count--;
  if(count<0)
   { alert("Negative time");
    return;}
  $('.sessVal').text(count);
   checkFortimerVal(count);
});




function checkFortimerVal(count){
  var sLength=$('.sessVal').text()-1;
  if(count != sessionLength){
    $('.da').html(count+" :"+ 00 +'<br>');
     clearInterval(myTimer);
  }else{
   
    clearInterval(myTimer);
  }
}
$('#stop').click(function(){
    count=$('.sessVal').text();
   $('.da').html(count+" :"+ 00 +'<br>');
  clearInterval(myTimer);
  $('#stop').hide();
  $('#play').show();
  $('#pause').hide();
   $('#repeat').hide();
  beepStop=true;
})


$('#play').click(function(){
  beepStop=false;var res=0;
  if(paused==true){
    continuePlaying();
    return;
    }
  sessionLength=$('.sessVal').text()-1;
  newSess=$('.sessVal').text()-1;
  sec=60;
  
    $('#stop').show();
  $('#play').hide();
  $('#pause').show();
   $('#repeat').hide();
  paused=false;
 res= abc(sessionLength,sec);
  console.log("res is:"+res);
  if(res==1){
      $('#stop').hide();
  $('#play').hide();
  $('#pause').hide();
   $('#repeat').hide();
    paused=false;
      if(beepStop==false){
      goBeeping();
    }
    $('#Session').html("Session");
      var val=$('.sessVal').text();
      $('.da').html(val+" :"+ 00+'<br>');
    alert("over here"); 
  
   
  }
 

});


$('#pause').click(function(){
  $('#play').show();
  $('#pause').hide();
    $('#stop').show();
  paused=true;
   clearInterval(myTimer);
  $('#repeat').show();
});

function continuePlaying(){
    paused=false;
   $('#play').hide();
  $('#pause').show();
   $('#repeat').hide();
    $('#stop').show();
  if(newSess==0 && newSec==0){ 
  $('#play').hide();
  $('#pause').hide();
  $('#repeat').hide();
    return;
  }
 
  abc(newSess,newSec);
}
function abc(session,secs){
  if(paused==false){
   
   myTimer=setInterval(function(){
    if(session==0 && secs==0){
      $('#play').hide();
     $('#pause').hide();
    $('#repeat').show();
        $('#stop').hide();
       clearInterval(myTimer);
  $('.da').html(0+" :"+ 00+'<br>');
        if(beepStop==false){
      goBeeping();
    }
           sessionLength=0;sec=0;
            breakSession();
      
      return 1;
    }
   secs--;
   
   if(secs==0 && session>0){
      session--;
     secs=60;
       }
   newSess=session;
  newSec=secs;
   $('.da').html(session+" :"+ checkTime(secs)+'<br>');
  },1000);
 
}
}
function goBeeping(){
 
  if(beepStop==false){
   	document.getElementById( 'timer-beep' ).play();
    beepStop=false;
  }else{
   	document.getElementById( 'timer-beep' ).stop();
  }
  
}
function checkBreakTimerVal(bcount){
  var bLength=$('.breakVal').text()-1;
  if(bcount != bLength){
    $('.da1').html(bcount+" :"+ 00 +'<br>');
    
  }
}
function breakSess(breakLength,bsec){
 
      breakTimer=setInterval(function(){
     $('#play').hide();
     $('#pause').hide();
    $('#repeat').hide();
        $('#stop').hide();
         bsec--;
    $('.da1').html(breakLength+" :"+ checkTime(bsec)+'<br>');
        
    console.log(breakLength+" :"+ checkTime(bsec));
   if(bsec==0 && breakLength==0){
      $('.da1').html(0+" :"+ 00+'<br>');
       clearInterval(breakTimer);
     $('#play').show();
     $('#pause').hide();
    $('#repeat').hide();
        $('#stop').hide();
          $('.da1').html();
       return;
          }
      
    if(bsec==0 && breakLength>0){
       breakLength--;
      bsec=60;
       } 
      
  },1000);
}
function breakSession(){
   var breakLength=$('.breakVal').text()-1;
   var bsec=60;
  $('#Session').html("Break Time");
   
  breakSess(breakLength,bsec);
    return;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
$('#repeat').click(function(){
  paused==false;
   $('#repeat').hide();
  $('#play').show();
  $('#pause').hide();
    $('#stop').hide();
    count=$('.sessVal').text();
   $('.da').html(count+" :"+ 00 +'<br>');
  clearInterval(myTimer);
  
 
});