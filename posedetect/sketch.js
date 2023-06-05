let capture;
let posenet;
let noseX,noseY;
let singlePose;
let skeleton;


function setup() {
    createCanvas(1000, 500);
    capture = createCapture(VIDEO)
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose',receivedPoses);
    
}
function receivedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
         skeleton = poses[0].skeleton;
    }
}
function modelLoaded(){
    console.log('model has loaded');
}
// function getRandomArbitary(min,max){
//     return Math.random() * (max-min) + min;
// }
function draw(){
    // r=getRandomArbitary(0,255);
    // g=getRandomArbitary(0,255);
    // b=getRandomArbitary(0,255);
    // fill(r,g,b);
    // ellipse(mouseX,mouseY,50,50);
    // image(s_img)
    

        // images and videos(webcam)
        

            // images and videos(webcam)
            image(capture, 0, 0);
            fill(255,0,0);
        
            if(singlePose){
                for(let i=0; i<singlePose.keypoints.length; i++){
                    ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y,20);
                }
                stroke(255,189,200);
                strokeWeight(3);
                for(let j=0; j<skeleton.length; j++){
                    line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
                }
        
                
        
                
            }
        
            
        
        }