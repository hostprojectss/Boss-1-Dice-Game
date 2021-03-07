if(document.cookie.indexOf('loaded') != -1){

    var dice1_value = Math.floor(Math.random()*6) + 1;
    var dice2_value = Math.floor(Math.random()*6) + 1;
    
    console.log("Player 1 got: " + dice1_value);
    console.log("Player 2 got: " + dice2_value);
    
    var image1 = "images/dice" + dice1_value + ".png";
    var image2 = "images/dice" + dice2_value + ".png";
    
    var playerOneWin = "Player 1 Won.";
    var playerTwoWin = "Player 2 Won.";
    var draw = "Draw."
    
    var heading = document.querySelector(".heading");
    
    if(dice1_value > dice2_value){
        heading.innerHTML = playerOneWin;
    }
    else if(dice2_value > dice1_value){
        heading.innerHTML = playerTwoWin;
    }
    else{
        heading.innerHTML = draw;
    }
    
    var images = document.querySelectorAll("img");
    
    images[0].setAttribute("src" , image1);
    images[1].setAttribute("src" , image2);
}
else{
    document.cookie = "loaded=1";
} 
