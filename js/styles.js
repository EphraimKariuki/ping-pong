
  // business logic-
  // var input = $("#inputNumber").val();
  var array = [];
  var result = "";
  function pingpong (answer){
    for (var index = 1; index<=answer; index+=1){
          if ((index%3===0)&&(index%5===0)){
           result= "ping-pong"
          }else if (index%5 ===0){
            result= "pong"
          }else if (index%3 === 0) {
             result= "ping"
          } else{
            result= index
          }
          array.push(result);
        }
  }

//user interface logic
$(document).ready(function(){
  $("#button").click(function(){
    var answer = $("#inputNumber").val();
    pingpong(answer);
    array.forEach(function(answer){
      $("#result").append("<li>"+answer + "</li>");
    });
  });

});
