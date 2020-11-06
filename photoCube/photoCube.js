const moveMouse = document.getElementById('boxDiv')

moveMouse.onmousemove = function movebox(e) {
    const x = e.pageX;
    const y = e.pageY;
    const midX = x - window.innerWidth / 2;
    const midY = y + window.innerHeight / 2
    let scale = window.innerHeight / 1000;
    scale *= 1;
    console.log(scale);

    document.getElementById('boxDiv').style.transform = 'rotateX(' + midY + 'deg) rotateY(' + midX + 'deg)';


    document.getElementById('boxDiv').style.transform = `rotateX(${midY}deg) rotateY(${midX}deg) scaleX(${scale}) scaleY(${scale}) scaleZ(${scale})`;
}

// const moveMouse = document.getElementById('boxDiv')
// function rotateBox() {
//     function movebox(e) {
//         const x = e.pageX;
//         const y = e.pageY;
//         const midX = x - window.innerWidth / 2;
//         const midY = y + window.innerHeight / 2
//         let scale = window.innerWidth / 1000;
//         scale *= 0.7;
//         console.log(scale);

//         document.getElementById('boxDiv').style.transform = 'rotateX(' + midY + 'deg) rotateY(' + midX + 'deg)';


//         document.getElementById('boxDiv').style.transform = `rotateX(${midY}deg) rotateY(${midX}deg) scaleX(${scale}) scaleY(${scale}) scaleZ(${scale})`;
//     }
// }

// const startStop = document.addEventListener('boxDiv').onclick(isEven)

// function isEven(n) {
//     if (startStop % 2 == 0) {
//         return rotateBox()
//         isEven(n++)
//     } else {
//         return ''
//         isEven(n++)
//     }
// }