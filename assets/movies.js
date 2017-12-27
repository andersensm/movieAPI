$(document).ready(function(){


//click Submit, button click

$("#inputValid").on("click", function(event) {

    event.preventDefault()

    var movie = $(".movieinput").val()

    console.log(movie)

    movieInput(movie);
})




//connect with ajax OMDB server

function movieInput(movie) {

    var queryURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + movie

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

      console.log(response)

      var movieTitle = $("#Title").text("Movie Title: " + response.Title)
      var moviePlot = $("#Plot").text("Movie Plot: " + response.Plot)
      var movieYear = $("#Year").text("Movie Released in: " + response.Year)
      var movieActors = $("#Actors").text("Starring: " + response.Actors)
      var movieAwards = $("#Awards").text("Awards: " + response.Awards)
      var movieBoxOffice = $("#BoxOffice").text("Box Office: " + response.BoxOffice)
      var movieImg = $("<img style='height: 400px; width: 100%; display: block;'>").attr("src", response.Poster)
      var movieWebsite = $("#Website").text("Movie's Official Website: " + response.Website)

      $(".img").empty(movieImg)
      $(".img").append(movieImg)





    })






}


})
