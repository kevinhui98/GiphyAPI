/*$(document).ready(function() {
    $("#mtaButton").click(function(){
    var status = $("#mtaText").val();*/
$(document).ready(function() {
    $("#submitButton").click(function(){
    var changeSearch = $("#submitText").val();
}
$.getJSON(
    'http://ajar-target.gomix.me/stops', function(response) {
});
   $.getJSON(
     
      "https://api.giphy.com/v1/gifs/search?q=" + changeSearch + "&api_key=dc6zaTOxFJmzC",
     
      function(response) {
        console.log(response);
        $("#gif").append("<img src=" + response.data[0].images.fixed_width_downsampled.url + ">");
     /*});
    });*/
   });
  });
 //});
     