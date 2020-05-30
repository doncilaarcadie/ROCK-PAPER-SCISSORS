const newDiv = document.querySelector('.newDivImgs');
const imgs = document.querySelectorAll('img');
const winText = document.querySelector('.winText');
let createImg = false;
let newUserImg;
let comparisonImg;
let newComputerImg;
let userScore;
let computerScore;

let ctrUser = 0;
let ctrComputer = 0;

imgs.forEach((img) => {
img.addEventListener('click', (e) =>{
    let playerSelection = e.target.getAttribute('id');
    let computerSelection = computerPlay();
    winText.textContent = '';
    
    if (createImg == false){
        userScore = document.createElement('h2');
        newUserImg = document.createElement('img');  
        comparisonImg = document.createElement('img');
        newComputerImg = document.createElement('img');  
        computerScore = document.createElement('h2');    
        createImg = true;
    }   
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        newUserImg.setAttribute('src', `images/img${playerSelection}.png`);
        
        quickSlide(newComputerImg);
        setTimeout(() => {
            comparisonImg.setAttribute('src', 'images/imgLower.png');  
            newComputerImg.setAttribute('src', `images/img${computerSelection}.png`);            
         }, 1200);
         ctrComputer++;
        
              
    }else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        newUserImg.setAttribute('src', `images/img${playerSelection}.png`);
        
        quickSlide(newComputerImg);
        setTimeout(() => {  
            comparisonImg.setAttribute('src', 'images/imgGreater.png');
            newComputerImg.setAttribute('src', `images/img${computerSelection}.png`);            
         }, 1200);
         ctrUser++;
    }else if(playerSelection == 'rock' && computerSelection == 'rock'){
        newUserImg.setAttribute('src', `images/img${playerSelection}.png`);
        
        quickSlide(newComputerImg);
        setTimeout(() => { 
            comparisonImg.setAttribute('src', 'images/imgEquality.png'); 
            newComputerImg.setAttribute('src', `images/img${computerSelection}.png`);
         }, 1200);     
    }else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        newUserImg.setAttribute('src', `images/img${playerSelection}.png`);
        
        quickSlide(newComputerImg);
        setTimeout(() => { 
            comparisonImg.setAttribute('src', 'images/imgLower.png'); 
            newComputerImg.setAttribute('src', `images/img${computerSelection}.png`);            
         }, 1200);  
         ctrComputer++;
    }else if(playerSelection == 'paper' && computerSelection == 'rock'){
        newUserImg.setAttribute('src', `images/img${playerSelection}.png`);
        
        quickSlide(newComputerImg);
        setTimeout(() => { 
            comparisonImg.setAttribute('src', 'images/imgGreater.png'); 
            newComputerImg.setAttribute('src', `images/img${computerSelection}.png`);            
         }, 1200);
         ctrUser++;
    }else if(playerSelection == 'paper' && computerSelection == 'paper'){
        newUserImg.setAttribute('src', `images/img${playerSelection}.png`);
        
        quickSlide(newComputerImg);
        setTimeout(() => { 
            comparisonImg.setAttribute('src', 'images/imgEquality.png');
            newComputerImg.setAttribute('src', `images/img${computerSelection}.png`);
         }, 1200);         
    }else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        newUserImg.setAttribute('src', `images/img${playerSelection}.png`);
        
        quickSlide(newComputerImg);
        setTimeout(() => {  
            comparisonImg.setAttribute('src', 'images/imgLower.png');
            newComputerImg.setAttribute('src', `images/img${computerSelection}.png`);            
         }, 1200); 
         ctrComputer++;
    }else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        newUserImg.setAttribute('src', `images/img${playerSelection}.png`);
        
        quickSlide(newComputerImg);
        setTimeout(() => {  
            comparisonImg.setAttribute('src', 'images/imgGreater.png');
            newComputerImg.setAttribute('src', `images/img${computerSelection}.png`);            
         }, 1200);
         ctrUser++;
    }else if(playerSelection == 'scissors' && computerSelection == 'scissors'){
        newUserImg.setAttribute('src', `images/img${playerSelection}.png`);
        
        quickSlide(newComputerImg);
        setTimeout(() => { 
            comparisonImg.setAttribute('src', 'images/imgEquality.png'); 
            newComputerImg.setAttribute('src', `images/img${computerSelection}.png`);
         }, 1200);        
    }   
    
    newUserImg.setAttribute('class', 'newImgs');
    comparisonImg.setAttribute('class', 'newImgs');
    newComputerImg.setAttribute('class', 'newImgs');


    setTimeout(() => {  
        userScore.textContent = 'Your score: ' + ctrUser;
        computerScore.textContent = 'Computer score: ' + ctrComputer;
        userScore.setAttribute('class', 'score');
        computerScore.setAttribute('class', 'score');

        if (ctrUser > 4){
            winText.textContent = 'WIN';
            winText.setAttribute('class', 'winText');        
            ctrUser = 0;
            ctrComputer = 0;           
        }else if (ctrComputer > 4){
            winText.textContent = 'lose';
            winText.setAttribute('class', 'loseText');        
            ctrUser = 0;
            ctrComputer = 0;
            
        }
     }, 1200);

    

    newDiv.appendChild(userScore);
    newDiv.appendChild(newUserImg);
    newDiv.appendChild(comparisonImg);
    newDiv.appendChild(newComputerImg);
    newDiv.appendChild(computerScore);

    

    });
});

function computerPlay() {
let game_Values= ['rock', 'paper', 'scissors'];
let randVal = game_Values[Math.floor(Math.random()*3)];
return randVal;
}

function quickSlide(image) {    
    for(let i = 0; i < 15; i++){   
        let imgLinks = ['images/imgrock.png', 'images/imgpaper.png','images/imgscissors.png'];          
    setTimeout(function(){ 
        image.setAttribute('src', `${imgLinks[i%3]}`);
        
    }, i * 80);    
    };
};
    