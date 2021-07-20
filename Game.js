class Game{
    constructor(){

    }   
    
    start(){
        background(backImg)
        if(gameState ===0){
           
            intro = new Intro();
            intro.display();
       }
if(gameState ===1){
  
aeroplane = createSprite(600,470,50,50); 
 aeroplane.addImage(aeroplaneImg);


    //        if(keyCode===RIGHT_ARROW){
    //         aeroplane.velocityX = 2;
    //        }
    //        if(keyCode===DOWN_ARROW){
    //            aeroplane.velocityY = 2;
    //           }
         
    //           if(keyCode===UP_ARROW){
    //            aeroplane.velocityY =- 2;
    //           }
        
    }
    }




play(){
  //background(backImg)
    if(gameState ===1){
        text("Press Space to Start",400,200); 
    //    
    // aeroplane.addImage(aeroplaneImg)

   
        // if(keyIsDown===LEFT_ARROW){
        //     console.log("working")
        //      aeroplane.velocityX = -2;
        //        }
           
    } 
   
  //  aeroplane = createSprite(600,470,50,50);  
   
drawSprites()
}

}


