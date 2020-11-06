var modal = document.getElementById("myModal")
var myImg = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12"]
var img = document.getElementById(myImg[0])
var modalImg = document.getElementById("img01")
var captionText = document.getElementById("caption")

img.onclick = function () {
    modal.style.display = "block"
    modalImg.src = this.src;
    captionText.innerHTML = this.alt
}

var span = getElementById("close");

span.onclick = function () {
    modal.style.display = "none";
}