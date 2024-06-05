function calculateRectangleArea(){
    const length = getInputValueById("lengthInput");
    const width = getInputValueById('widthInput');

    const area = length * width;

    setInnerTex('rectangleAreaSpan', area);
}

function getInputValueById(inputFieldID){
    // grave the input field value
    const inputField = document.getElementById(inputFieldID);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTex( id, area ){
    const shapeAreaSpan = document.getElementById(id);
    shapeAreaSpan.innerText = area;
}