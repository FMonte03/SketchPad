




const gridContainer  = document.querySelector('.gridContainer'); 


function clearGrid(){
    while(gridContainer.firstChild){

        gridContainer.removeChild(gridContainer.firstChild); 
    }

}






let currentColor = 'black'; 

function makeGrid(gridSize, squareSize, bool){
    for(let i = 0; i< gridSize; i++){
        const gridSquare = document.createElement('div'); 
        gridSquare.classList.add("gridSquare"); 
        gridSquare.setAttribute('style', `height: ${squareSize}px; width: ${squareSize}px;`);
        gridSquare.addEventListener('mouseover' ,() => {changeSquareColor(gridSquare, bool)});
        gridContainer.append(gridSquare);


    }
}


/*
'1' : [200, 32]  ,
'2' : [512, 20]  ,
'3' : [800, 16]  ,
'4' : [2048, 10]  
*/


const valueMap = {
    '1' : [200, 32] ,
    '2' : [512, 20]  ,
    '3' : [800, 16]  ,
    '4' : [2048, 10]

}; 

const hamburger = document.querySelector('.hamburger')
const offMenu = document.querySelector('.offMenu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active")
    offMenu.classList.toggle("active")
})



const pixelMap = {

    '1' : '10 x 20' ,
    '2' : '16 x 32'  ,
    '3' : '20 x 40'  ,
    '4' : '32 x 64'  


}; 


const slider = document.querySelector('.slider');
slider.addEventListener('change',() => { 
    
    showPixels();
    clearGrid(); 
    makeGrid(valueMap[`${slider.value}`][0], valueMap[`${slider.value}`][1], black ); 



}); 



function showPixels(){

p.innerHTML = `${pixelMap[`${slider.value}`]}`;

}




const p = document.querySelector('#sliderValue'); 





function changeSquareColor(elem, bool ){
    if (bool == true){
    elem.style.backgroundColor = currentColor; }
    else if(bool == false){
    elem.style.backgroundColor = `rgb(${Math.random() * 255} ,${Math.random() * 255} ,${Math.random() * 255} )`;
    
    }

}



const reset = document.getElementById('reset'); 
reset.addEventListener('click', () => {
clearGrid(); 
black = true; 
makeGrid(valueMap[`${slider.value}`][0], valueMap[`${slider.value}`][1], black );

}); 


const rainbow = document.getElementById('rainbow'); 
rainbow.addEventListener('click', () => { 
    clearGrid(); 
    black = false; 
    makeGrid(valueMap[`${slider.value}`][0], valueMap[`${slider.value}`][1], black ); 
  })

// black refers to the current color, if black = true, current color is black, if false current color is rainbow. 
let black = true; 
makeGrid(800, 16, black); 
