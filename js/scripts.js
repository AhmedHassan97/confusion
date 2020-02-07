
// $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();
// });
$(document).ready(function(){
  $("#carouselExampleIndicators").carousel( { interval: 1000 } );
  $("#carouselButton").click(function(){
    if($("#carouselButton").children("span").hasClass("fa-pause"))
    {
      $("#carouselExampleIndicators").carousel("pause");
      $("#carouselButton").children("span").removeClass("fa-pause")
      $("#carouselButton").children("span").addClass("fa-play")
    } else  if($("#carouselButton").children("span").hasClass("fa-play"))
    {
      $("#carouselExampleIndicators").carousel("cycle");
      $("#carouselButton").children("span").removeClass("fa-play")
      $("#carouselButton").children("span").addClass("fa-pause")
    }
  });
});

$(document).ready(function(){

  $("#modalButton").click(function(){
    $("#loginModal").modal('toggle');
  });
  $("#closeLoginButton").click(function(){
    $("#loginModal").modal("hide");
  });
  $("#closeLogin").click(function(){
    $("#loginModal").modal("hide");
  });

});

 $(document).ready(function(){

  $("#ReservemodalButton").click(function(){
    $("#Reserve-Modal").modal('toggle');
  });
  $("#closeReserve").click(function(){
    $("#Reserve-Modal").modal("hide");
  });
  $("#closeReserveButton").click(function(){
    $("#Reserve-Modal").modal("hide");
  });
  
});

  





