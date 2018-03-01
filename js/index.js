$(document).ready(function(){
  var response = "kukuc";
  function successCallback(response){
    $("div").html(JSON.stringify(response[0]));
  }

  function errorFunc(){
	  console.log("error");
	}
  var url = "http://ap.valicon.net/bsit/interview";// + "&callback=?";
  //CORS (Cross-Origin Request Smth) --> solved with JSONP <-- "&callback=?" in url
  response = $.post(url,'{"Code":"SVN"}' , successCallback);
  response.fail(errorFunc); 
 
});
