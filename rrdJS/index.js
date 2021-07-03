const nav = document.querySelector('#navbar');
const topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
    }
}

function padTop() {
    const winSize = window.innerWidth;
    if (winSize >= '700' && window.scrollY >= topOfNav) {
        document.getElementById('pageDiv').style.paddingTop = nav.offsetHeight + 'px';
    } else {
        document.getElementById('pageDiv').style.paddingTop = 0;
    }
}

window.addEventListener('scroll', padTop);
window.addEventListener('scroll', fixNav);