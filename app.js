

const gridContainer  = document.querySelector('.gridContainer'); 
const defaultSize = 800;
const defaultSquareSize = "14px";







let currentColor = 'black'

function makeGrid(defaultSize, defaultSquareSize){
    for(let i = 0; i< defaultSize; i++){
        const gridSquare = document.createElement('div'); 
        gridSquare.classList.add("gridSquare"); 
        gridSquare.setAttribute('style', `height: ${defaultSquareSize}; width: ${defaultSquareSize};`);
        gridSquare.addEventListener('mouseover' ,() => {changeSquareColor(gridSquare)});
        gridContainer.append(gridSquare);


    }
}

const slider = document.querySelector('.slider');
slider.addEventListener('change', showPixels); 

function showPixels(){

const p = document.querySelector('#sliderValue'); 
p.innerHTML = `${slider.value}`;



}
makeGrid(defaultSize, defaultSquareSize); 

function changeSquareColor(elem){

    elem.style.backgroundColor = currentColor; 


}

