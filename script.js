
// getter method
const container =  document.querySelector(".container");
const rgbBtn = document.querySelector(".random-btn");
const blackBtn = document.querySelector(".black-btn");

let grid = +prompt();


// make divs and append it dynamically
for(let i = 0; i <= grid; i++){

    const siblingsDiv = document.createElement('div');
    siblingsDiv.style.border = "(16/ 100)px solid black";
    siblingsDiv.setAttribute("class" , `siblings-container${i}`)
    siblingsDiv.style.display = "flex";
    siblingsDiv.style.flexDirection = "row";
    siblingsDiv.style.flex = "1";
    siblingsDiv.style.borderRadius = `${100 / grid}px`;
    
    
    container.appendChild(siblingsDiv);

    // make inner divs and append it dynamically
    for(let j = 0 ; j <= grid; j++){
        const childDiv = document.createElement('div');
        const selectSiblings = document.querySelectorAll(`.siblings-container${i}`)
        childDiv.style.border = "0.16px solid white";
        childDiv.style.flex = "1";
        siblingsDiv.appendChild(childDiv);
        childDiv.style.borderRadius = `${100 / grid}px`;
    }
};

// getter of childNode
const divSelector = document.querySelectorAll('.container div div');

// Generate Random Colors
rgbBtn.addEventListener('click', () =>{
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
})




// Generate Black Colors
blackBtn.addEventListener('click', () => {
    divSelector.forEach((div) => {
        div.addEventListener('mouseover', () =>{
            
            div.style.backgroundColor = `rgb(${0},${0},${0})`;
            div.style.margin = "1px";
        })
    
        div.addEventListener('mouseleave', () =>{
            div.style.margin = "0px";
        })
    });
});



