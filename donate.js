

$(document).ready(function() {
  $("#last-btn").on("click", function() {
    $(".card-header").attr('href', "#");
    $( "#big-one,#p1" )
    .keyup(function() {
      var value = $( this ).val();
      $( ".card-header" ).text("Giving € " + value + ' (edit amount)' );
    })
    .keyup()

    $("#donate-box-two").animate({'height':"460px"},200);
    $("#donate-box").hide();
    $("#donate-box-two").css("display","block");
  
  });
})




// var otherAmount = $("#big-one");

// function nextProcess() {
  
//   if (otherAmount == "") {
//     alert("choose an amount");   

//   }else if (otherAmount !== "") {
//       return false;
//   }

// };

// nextProcess();



// $("#last-btn").on("click", function() {
//   $("#donate-box").hide();
//   $("#donate-box-two").css("display","block");
// })

