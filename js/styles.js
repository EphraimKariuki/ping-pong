$(document).ready(function(){
  $("form").submit(function(){
    // business logic-
     var input = $("#inputNumber").val();
     var array = [];
     var result = "";
     for (var index = 1; index <=input; index+=1){
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
         alert(array);
     //user interface logic
     array.forEach(function (result){
          $(".result").html("li");
          $(".result :last-child").text(result);
     });
  });

});
