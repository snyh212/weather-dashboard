//only runs ones page loaded
$(document).ready(function(){


var search = $("#search")
var cityInput = $("#cityInput").html;

    
search.click(function() {
    var cInput = $('#cityInput').val();
    $("ul").append("<li></li>").text(cInput)

});
    
    
});