status="";
value="input1";

 function setup()
 {
     create.canvas(480,380);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(480,380);
     video.hide();
 }

 function start()
 {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_model").innerHTML = "Status: detecting objects <span>&#128522</span>";
    document.getElementById('input1').value;
}
 


 function modelLoaded()
 {
  console.log("model loaded");
 }

 function draw()
 {
    image(video, 0, 0, 480, 380);
 }

 