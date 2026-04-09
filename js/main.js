    /* Swap Function for Thumbnails */

function swap (){
  let imgNum = this.id;
  imgNum = imgNum.slice(-1);

  document.getElementById("mainImage").src=`images/projects-images/project${imgNum}.jpg`;

  document.getElementById("mainImage").dataset.current = imgNum;

    /* alert(this.alt); */
  
  document.getElementById("messageDisplay").textContent = this.alt;
            
}

  /* Function for Button Previous */

function previous (){
  const img = document.getElementById("mainImage");

  let current = parseInt(img.dataset.current);

  current--;

  if (current < 1) {
  current = 10;
  }

  img.src = `images/projects-images/project${current}.jpg`;
  
  img.dataset.current = current;

  messageDisplay.textContent = `My Project ${current}`;

  }

  /* Function for Button Next */

function next (){
  const img = document.getElementById("mainImage");

  let current = parseInt(img.dataset.current);

  current++;
            
  if(current > 10) {
  current = 1;
  }

  img.src = `images/projects-images/project${current}.jpg`;

  img.dataset.current = current;

  messageDisplay.textContent = `My Project ${current}`;
}
