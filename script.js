
// getter method
const container =  document.querySelector(".container");
const rgbBtn = document.querySelector(".random-btn");
const blackBtn = document.querySelector(".black-btn");
const colorPicker = document.querySelector('#color-picker');



function clearGrid(){
    do{
        container.removeChild(container.firstChild);
    }while(container.firstChild);
}

function changeGrid(){
    let isGrid = +prompt();
    let grid= "";
    if(isGrid >= 10 && isGrid <= 100){
        grid += isGrid
        clearGrid();
        createGrid(grid);
        console.log(grid);
    }else {
        alert("Must be greater than 10 and less than 100")
    };
}


// make divs and append it dynamically
function createGrid(grid){
    for(let i = 0; i < grid; i++){

        const siblingsDiv = document.createElement('div');
        siblingsDiv.style.border = "(16/ 100)px solid black";
        siblingsDiv.setAttribute("class" , `siblings-container`)
        siblingsDiv.style.display = "flex";
        siblingsDiv.style.flexDirection = "row";
        siblingsDiv.style.flex = "1";
        siblingsDiv.style.backgroundColor = "black";
        siblingsDiv.style.borderRadius = `${100 / grid}px`;
        
        
        container.appendChild(siblingsDiv);
    
        // make inner divs and append it dynamically
        for(let j = 0 ; j < grid; j++){
            const childDiv = document.createElement('div');
            childDiv.style.border = "0.16px solid white";
            childDiv.setAttribute("class", "grid");
            childDiv.style.flex = "1";
            childDiv.style.backgroundColor = "darkcyan";
            childDiv.style.borderRadius = `${100 / grid}px`;
            siblingsDiv.appendChild(childDiv);
        }
    };

}

//Clear the Grid
const resizeBtn = document.querySelector('.resize-btn');
resizeBtn.addEventListener('click', changeGrid);


// Generate Random Colors
rgbBtn.addEventListener('click', generateRandomColors);

function generateRandomColors(){
    const divSelector = document.querySelectorAll('.grid');
    divSelector.forEach((div) => {
        div.addEventListener('mouseover', () =>{
            let num1 = Math.random() * 255;
            let num2 = Math.random() * 255;
            let num3 = Math.random() * 255;
            
            div.style.backgroundColor = `rgb(${num1},${num2},${num3})`;
            div.style.margin = "1px";
        })
    
        div.addEventListener('mouseleave', () =>{
            div.style.margin = "0px";
        })
    });
}

// Generate Black Colors
blackBtn.addEventListener('click',generateBlackColors);

function generateBlackColors(){
    const divSelector = document.querySelectorAll('.grid'); 
    divSelector.forEach((div) => {
        div.addEventListener('mouseover', () =>{
            
            div.style.backgroundColor = `rgb(${0},${0},${0})`;
            div.style.margin = "1px";
        })
    
        div.addEventListener('mouseleave', () =>{
            div.style.margin = "0px";
        })
    });
}

// toggle the border of the grid 
const toggleBtn = document.querySelector('.toggle-btn');
let isToggled = "";
toggleBtn.addEventListener('click', toggleGrid);

function toggleGrid(){
    const divSelector = document.querySelectorAll('.grid');
    
    if(isToggled){
        divSelector.forEach(div =>{
            div.style.border = "none";
        })
        isToggled = false;    
    }else {
        divSelector.forEach(div =>{
            div.style.border = "1px solid white";
        })
        isToggled = true;
    }
};



colorPicker.addEventListener("change", changeBackgroundColor);


function changeBackgroundColor(){
    const bgColor = document.querySelectorAll('.siblings-container');

    bgColor.forEach(div =>{
        div.style.backgroundColor = `${colorPicker.value}`;
    })
}





// default Size of grid
createGrid(10);