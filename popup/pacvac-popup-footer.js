<script>

var tolkaApp = {};
tolkaApp.region="usa";
$(document).ready(function() {
console.log("here");
  var dialog = '#dialog';
  $('#mask').fadeIn(500);
  $('#mask').fadeTo("slow",0.9);
  $(dialog).fadeIn(2000);

  $('.window .close').click(function (e) {
  e.preventDefault();
  $('#mask').hide();
  $('.window').hide();
     });

     $('#mask').click(function () {
  $(this).hide();
  $('.window').hide();
     });

  $('.tolka-option').click(function(){
    tolka_region = $(this).attr('value');
   $('.tolka-option').css( "background", "#ebebeb");
    $(this).css( "background", "#a5a5a5");
  tolkaApp.region = tolka_region;
  console.log(tolkaApp);
    });

});

 function getCity(){

 var city = document.getElementById('city').value.toLowerCase();
  tolkaApp.city = city;

 var type = $("input[type='radio'][name='locationtype']:checked").val();
    if(type = "agent") {
      type = ",service%20agent";
    }
  else {type = ",authorised%20distributor";}

 tolkaApp.type = type;
  console.log(tolkaApp);
}

function createUrl(){
  getCity();
    var location = "https://pacvac.com/find-a-distributor?locate=" + tolkaApp.city + "&tags=region:" + tolkaApp.region + tolkaApp.type;
  tolkaApp.url=location;
}



function relocate(){

createUrl();

  if(tolkaApp.city.length === 0) {
    alert("please enter a city");
     return;}
  else{

      console.log(tolkaApp.url);
window.location=tolkaApp.url;}
}
  </script>
