$(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newMovie = {
      name: $("#mu")
        .val()
        .trim()
    };

    console.log(newMovie);

    $.ajax("/api/movies", {
      type: "POST",
      data: newMovie
    }).then(function() {
      console.log("created " + newMovie);

      location.reload();
    });
  });

  $(".change-state").on('click', function(event){
      var id = $(this).data("id");
      var newState = $(this).data("newstate");

      var newWatchedState = {
          watched: newState
      };

      $.ajax("/api/movies/" + id, {
          type: "PUT",
          data: newWatchedState
      }).then(
          function(){
              console.log("changed state to", newState);
              location.reload();
          })


  })


});
