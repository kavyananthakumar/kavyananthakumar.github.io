// const para = document.getElementById("para");

// animate(para);

// function animate(element) {
//     console.log(element);
//     let elementWidth = element.offsetWidth;
//     let parentWidth = element.parentElement.offsetWidth;
//     let flag = 0;

//     setInterval(() => {
//         element.style.marginLeft = --flag + "px";

//         if (elementWidth == -flag) {
//             flag = parentWidth;
//         }
//     }, 10);
// }


document.getElementById('eduslate1').addEventListener('mouseover', function() {
    document.getElementById('eduslate1').style.backgroundColor=getColor();
    });
document.getElementById('eduslate2').addEventListener('mouseover', function() {
    document.getElementById('eduslate2').style.backgroundColor=getColor();
    });
document.getElementById('eduslate3').addEventListener('mouseover', function() {
    document.getElementById('eduslate3').style.backgroundColor=getColor();
    });


    function changeBackground() {
        const color = getColor();
        document.body.style.backgroundColor = color;
     }
     
     function getColor() {
        const red = getRandomRgbValue();
        const green = getRandomRgbValue();
        const blue = getRandomRgbValue();
        const color = `rgb(${red}, ${green}, ${blue})`;
        return color;
     }
     
     function getRandomRgbValue() {
        const random = Math.random();
        const rgbSized = random * 256;
        const floored = Math.floor(rgbSized);
        return floored;
     }