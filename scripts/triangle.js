function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangleBase');
    const triangleBaseValue = triangleBaseInput.value;
    const base = parseFloat(triangleBaseValue);
    // console.log(base);
    // get triangle height 
    const triangleHeightInput = document.getElementById('triangleHeight');
    const triangleHeightValue = triangleHeightInput.value;
    const height = parseFloat(triangleHeightValue);
    console.log(height);
}