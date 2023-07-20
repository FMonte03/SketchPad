




const gridContainer  = document.querySelector('.gridContainer'); 


function clearGrid(){
    while(gridContainer.firstChild){

        gridContainer.removeChild(gridContainer.firstChild); 
    }

}






let currentColor = 'black'; 

function makeGrid(gridSize, squareSize){
    for(let i = 0; i< gridSize; i++){
        const gridSquare = document.createElement('div'); 
        gridSquare.classList.add("gridSquare"); 
        gridSquare.setAttribute('style', `height: ${squareSize}px; width: ${squareSize}px;`);
        gridSquare.addEventListener('mouseover' ,() => {changeSquareColor(gridSquare)});
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
    makeGrid(valueMap[`${slider.value}`][0], valueMap[`${slider.value}`][1] ); 



}); 



function showPixels(){

p.innerHTML = `${pixelMap[`${slider.value}`]}`;

}




const p = document.querySelector('#sliderValue'); 





function changeSquareColor(elem){

    elem.style.backgroundColor = currentColor; 


}






makeGrid(800, 16); 
