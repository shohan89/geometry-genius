function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangleBase');
    const triangleBaseValue = triangleBaseInput.value;
    const base = parseFloat(triangleBaseValue);
    // console.log(base);
    // get triangle height 
    const triangleHeightInput = document.getElementById('triangleHeight');
    const triangleHeightValue = triangleHeightInput.value;
    const height = parseFloat(triangleHeightValue);
    // console.log(height);

    const area = 0.5 * base * height;
    console.log('Area of the triangle is: ' + area);

    // dislay the triangle area
    const triangleAreaSpan = document.getElementById('triangleArea');
    triangleAreaSpan.innerText = area;
}