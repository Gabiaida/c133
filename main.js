
img = "";
objects = [];
modelStatus = "";

function preload(){
  img = loadImage('dog_cat.jpg');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  
}

function modelLoaded() {
  console.log("Modelo Carregado!")
  
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}



