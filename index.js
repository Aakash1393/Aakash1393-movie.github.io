  // $( document ).ready(function(){
$( document ).ready(function(){


// var myStylesLocation="style.css";
// $.get(myStylesLocation, function(css)
// {
//    $('<link rel="stylesheet" type="text/css" href="'+myStylesLocation+'" >')
//    .appendTo("head");
// }); 
$("#search").on("click",function()
{
   var tempValue; 
   var searchTerm=$("#searchTerm").val();

   var output;
    // $("#update").append(output); 


   if(searchTerm=="")
   {
     alert("Movie name blank");
   } 
 
     // $('.something').click(function() {
     //  location.reload(true);
     // });   

   if(searchTerm!=="" && yearTerm!=="")
    {
      var letters = /^[A-Za-z\s]+$/;
       if(searchTerm.match(letters))
        { 

          
          // 
                    
          $.ajax({
                type:'GET',
                dataType: 'json',
                async: true, 
                
                  url:'https://www.omdbapi.com/?t='+searchTerm+'&y'+yearTerm+'&apikey=7d78520b',
                  success:function(data)
                  {

                                                               
                        console.log(data);
                        var space="    ";
                        var actors="Stars";
                        clearSearch();
                        if(data.Poster=="N/A")
                         {
                           // $("#image").append("<img src='dummy.png' alt='no image found'>");
                          $("#image").attr('src','dummy.png').addClass("dummy");
                          $(".rating").append("Imdb Rating"+":"+" "+"  "+data.imdbRating).addClass("dummyrating");
                          $(".votes").append(data.imdbVotes).addClass("dummyvotes");
                          $("#name").append(data.Title).addClass("dummytext");
                         } 

                         else{

                           $("#image").attr('src',data.Poster).addClass("poster");
                           $(".rating").append("Imdb Rating"+":"+" "+"  "+data.imdbRating).addClass("imdbrating");
                           $(".votes").append(data.imdbVotes).addClass("imdbvotes");
                           $("#name").append(data.Title);
                         }
                        // var value=actors.css({"font-weight": "bold"});
                         
                        $(".year").append(space+"("+data.Year+")"); 
                        $("#rated").append(data.Rated+space).css({"font-size":"10px","margin-left":"-900px"});
                        $(".time").append(data.Runtime+space).css({"margin-left":"590px"});  
                        $(".genre").append(data.Genre+space);
                        // $("#image").attr('src',data.Poster).addClass("poster"); 
                        $(".released").append(data.Released).css({"margin-left":"-5px"}); 
                        $("#plot").append(data.Plot); 
                        $("#stars").append(actors+":"+data.Actors);
                        $("#director").append("Director"+":"+data.Director); 
                        $(".writer").append("Writer"+":"+data.Writer)
                        $(".metascore").append("Metascore"+":"+data.Metascore);  
                        $(".awards").append("Awards"+":"+data.Awards);
                        $(".production").append("Production"+":"+data.Production);
                        
                        $(".boxOffice").append("Box Office"+":"+data.BoxOffice);
                        $(".country").append("Country"+":"+data.Country);
                        $(".language").append("Language"+":"+data.Language);
                        // for(var i=0;i<data.Ratings.length;i++)
                        // {
                          $(".rotten").append("Rotten Tomatoes"+":"+data.Ratings[1].Value).addClass("tomatoes");
                        //}  
                  },        




                  error:(data)=>{

                  alert("Movie not present");
                  }



              })


        }

         

              else
              {

                 $.ajax({
                          type:'GET',
                          dataType: 'json',
                          async: true, 
                           
                            url:'https://www.omdbapi.com/?i='+searchTerm+'&y'+yearTerm+'&apikey=7d78520b',
                            success:function(data)
                            {
                              console.log(data);
                             
                               
                            }        

                        })

              }                
    }

        function clearSearch()
          {
            $("#name").empty(); 
            $(".year").empty(); 
            $("#rated").empty();
            $(".time").empty();  
            $(".genre").empty();
            $("#image").empty(); 
            $(".released").empty(); 
            $("#plot").empty(); 
            $("#stars").empty();
            $("#director").empty();
            $(".writer").empty();   
            $(".metascore").empty();
            $(".awards").empty();
            $(".production").empty();
            $(".rating").empty();
            $(".votes").empty();  
            $(".boxOffice").empty();
            $(".country").empty();
            $(".language").empty();      
            $(".rotten").empty();    
          }
    


    
    

})

});

// var reg = /^\d+$/;