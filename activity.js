
$(document).ready(function(){
 $('td').click(function(){
   var selected = $(this).text(); // getting content
   var colNum = $(this).index();
   var eqTitle = $('th:eq(' + colNum + ')').text();
   if ($(this).hasClass("selected-activity")) {  // check if selected content has a string 
    $(this).toggleClass("highlight"); // add or remove the class when selected
    
    // list window pop-up
    if ($(this).hasClass("highlight")) {
      $('#displaySelected').css("visibility", "visible");
      $('#displaySelected').css("margin-top", "2em");
      $('#result').append("<p>"+ selected+" at "+eqTitle+"</p>");
    } else {
      $('#result p:contains('+selected+')').remove();
      
      if ($('#result').has('p').length == false) {
        $('#displaySelected').css("visibility","hidden");
        $('#displaySelected').css("margin-top","0");
      }
    }
  }
 });
});
