const clickMe = document.querySelector('button');
clickMe.addEventListener('onmousedown', randomImage);

document.addEventListener('click', randomImage)

function randomImage() {
    let theImage1 = document.getElementById('player1Dice');
    let imageDir = 'images/dice';
    let imageArray = new Array('dice1.svg', 'dice2.svg', 'dice3.svg', 'dice4.svg', 'dice5.svg', 'dice6.svg');
    let imgIndex = Math.floor(Math.random() * imageArray.length + 1);
    let imgPath1 = imageDir + imgIndex + '.svg';
    theImage1.src = imgPath1;

    let theImage2 = document.getElementById('player2Dice');
    let imageDir2 = 'images/dice';
    let imageArray2 = new Array('dice1.svg', 'dice2.svg', 'dice3.svg', 'dice4.svg', 'dice5.svg', 'dice6.svg');
    let imgIndex2 = Math.floor(Math.random() * imageArray2.length + 1);
    let imgPath2 = imageDir2 + imgIndex2 + '.svg';
    theImage2.src = imgPath2;

    if (imgIndex > imgIndex2) {
        document.querySelector('button').innerHTML = 'Player 1 Wins! \n Click Again';
    } else if (imgIndex < imgIndex2) {
        document.querySelector('button').innerHTML = 'Player 2 Wins! \n Click Again';
    } else {
        document.querySelector('button').innerHTML = 'Draw! \n Click Again';
    }
}