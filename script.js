$("#form").submit(function(event){
  event.preventDefault();
  $.getJSON("http://www.omdbapi.com/?s=" + $("#userInput").val() , function(data){
    event.preventDefault();
    $("#movieList").html("");
    if (data.Response === "True"){
      for (var i = 0; i < data.Search.length; i++) {
        var title = $("<p></p>").text(data.Search[i].Title + ": " + data.Search[i].Year);
        title.appendTo("#movieList");
        var img = (data.Search[i].Poster !== "N/A") ? $("<img />", {src: data.Search[i].Poster}) : $("<img />", {src: "mockups/images/no_image.png"})
        img.appendTo("#movieList");
      }
    } else {
      ($("<p></p>").text("No Results")).appendTo("#movieList");
    }
  })
})
