
function fetchRandomDogImage(){
     // METHOD -1 ERROR HANDLING USING ONEERROR
   /*var xhrRequest = new XMLHttpRequest();

   xhrRequest.onload = function(){
       
     console.log(xhrRequest.response);
     var responseJSON = JSON.parse(xhrRequest.response);
     console.log(responseJSON);

      
         const namex = document.createElement('div');
          namex.innerHTML = responseJSON.name;

          $("#person").append(namex);

        

   };
   
   xhrRequest.oneerror = function(){
      console.log("Request failed");
   };

   xhrRequest.open('get',' https://api.agify.io?name=bella');

   xhrRequest.send();
  
   */
    
    // using QUERY AND AJAX METHOD -1 handling of error using fail method
 
   /*$.ajax({
    url: "https://api.agify.io?name=bella",
    method: "GET",
    success: function(data){
 //  var responseJSON = JSON.parse(xhrRequest.response);
      const namex = document.createElement('div');
      
      namex.innerHTML = data.name;

      $("#person").append(namex);
       
   }

   }).fail(function(){
      console.log("error");
   });
   
    */

   // METHOD-2 for check error use fail method 

   $.get("https://api.agify.io?name=bella",function(data){
      //  var responseJSON = JSON.parse(xhrRequest.response);
           const namex = document.createElement('div');
           
           namex.innerHTML = data.name;
     
           $("#person").append(namex);
            
        }).fail(function(xhr,textStatus,errorThrown){
               
           console.log("request Failed")
          
        });

}

$("#fetch-dog-image-button").click(fetchRandomDogImage);

