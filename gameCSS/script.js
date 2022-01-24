const image = document.getElementById("img");

document.addEventListener("keydown",(e) =>{

const cs = getComputedStyle(image);

const left = cs.left;
  const top = cs.top;
  const leftNumber = left.match(regex);
  const topNumber = top.match(regex);

  // LEFT key pressed
  if (e.key === 37) {
    image.style.left = `${parseFloat(leftNumber[0]) - change}px`;
  }
  // TOP key pressed
  if (e.key === 38) {
    image.style.top = `${parseFloat(topNumber[0]) - change}px`;
  }
  // RIGHT key pressed
  if (e.key === 39) {
    image.style.left = `${parseFloat(leftNumber[0]) + change}px`;
  }
  // DOWN key pressed
  if (e.key === 40) {
    image.style.top = `${parseFloat(topNumber[0]) + change}px`;
  }



});