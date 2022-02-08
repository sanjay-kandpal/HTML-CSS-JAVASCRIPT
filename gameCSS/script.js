

document.addEventListener("keydown",(e) =>{
  
  console.log("key code is: ",e.key);


 
  // TOP key pressed
  if (e.key = 38) {
    dino = document.getElementsByClassName('dino');
    dino.classList.add('animateDino');
    
    setTimeout(()=> {
      dino.classList.remove("animateDino")
    },700)
    
  }
  // RIGHT key pressed
 /* if (e.key === 39) {
   
  }
  // DOWN key pressed
  if (e.key === 40) {
   
  }
*/


});