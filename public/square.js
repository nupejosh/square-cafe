// alert("To be, or not to be: that is the question");



$(document).ready(function(){
  $('form').on('change', 'select', function(){
    $('form').append($("#selector").select().first().html());
    $('#drinks').text($("select").length-1);

    total_price = 0;
    $('select').each(function()
    {

      if ($(this).find(":selected").attr("data-price"))
      {
        total_price = total_price + parseInt($(this).find(":selected").attr("data-price"))
        $('#cost').text(total_price)
      }
    });
  })
});

 $(document).ready(function(){
     $('input').click(function(event){
        event.preventDefault();
       $.post("/shop", $("form").serialize())  
          .done(function(data){
            alert(data);
          })
          .fail(function(){
            alert("Sorry Suckers the server is down")
          });                    
  })
});

 // $(document).ready(function(){$.ajax({
 //    url: "/shop",
 //    type: "post",
 //    dataType: "json",
 //    success: function( json ) {
 //        $( "<h1/>" ).text( json.title ).appendTo( "body" )},

 //    error: function(xhr,status){
 //      alert("Sorry our service is down SUCKERS!!");
 //    }
 // });
// });