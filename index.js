$(document).ready(function() {
   $.getJSON(
     
      "https://api.giphy.com/v1/gifs/search?q=HIMYM barney stinston&api_key=dc6zaTOxFJmzC",
     
     
     
      function(response) {
        console.log(response);
        $("#gif").append("<img src=" + response.data[1].images.fixed_width_downsampled.url + ">");
        $("#gif").append("<img src=" + response.data[8].images.fixed_width_downsampled.url + ">");
        $("#gif").append("<img src=" + response.data[5].images.fixed_width_downsampled.url + ">");
        $("#gif").append("<img src=" + response.data[3].images.fixed_width_downsampled.url + ">");
        $("#gif").append("<img src=" + response.data[4].images.fixed_width_downsampled.url + ">");
        $("#gif").append("<img src=" + response.data[7].images.fixed_width_downsampled.url + ">");
      });
  });