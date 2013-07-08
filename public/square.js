// alert("To be, or not to be: that is the question");



$(document).ready(function(){
  $('form').on('change', 'select', function(){
     $('form').append($("#selector").select().first().html());
     $('#drinks').text($("select").length);

     $('#cost').text($('option').each(function (){
        prices = 0 
        if (data-price){
          prices = prices + data-price
        };
        prices
      }));
  })
});