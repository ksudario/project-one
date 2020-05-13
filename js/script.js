$(document).ready(function(){
    $('#btn').click(function(e){
        var search = $("#input").val();
        $('.food').html('');
        $.ajax({
          url: 'https://api.spoonacular.com/recipes/search?query='+search+'&number=5&apiKey=f95e57ef771341bda59fb9162db6da94'
      }).then(function(data){
          // alert(data.results[0].title);
          for (var i = 0; i <5; i++) {
          var   dat ='<dl><dt>Recipe:'+data.results[i].title+'</dt><dd>Ready In Minutes: '+data.results[i].readyInMinutes+'</dd><dd>Servings: '+data.results[i].servings+'</dd><dd>SourceUrl:<a href="'+data.results[i].sourceUrl+'" target="_blank">Visit Here </a></dd><dd>image:<img src="'+data.baseUri+''+data.results[i].image+'" alt="" style="width: 10%;height: auto;"></dd></dl><hr>';
              $('.food').append(dat);
          }
          
          // alert(data.results);
      }, 
      function(error) {
          console.log(error)
      });
      
    });
  });
