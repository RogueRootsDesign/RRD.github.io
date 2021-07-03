var modal = document.getElementById("modal");
var modalImg = document.getElementById("modalImg01")
var img = document.querySelectorAll(".galleryImage");
// var scrolledDistance = ''

// function updateDist() {
//     scrolledDistance = window.pageYOffset;
// }



img.forEach((img) => {
    img.addEventListener("mousedown", open, )
})

img.forEach((img) => {
    img.addEventListener("mouseup", scroll)
})

// function offsetModal() {
//     scrolledDistance = window.pageYOffset;
//     console.log(scrolledDistance);
//     if (scrolledDistance >= 0) {
//         modal.style.top = scrolledDistance;
//     }
// }

function open() {
    modal.style.display = "block";
    modalImg.src = this.src
}

function scroll() {
    modal.scrollIntoView(true);
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

// window.addEventListener("scroll", updateDist)