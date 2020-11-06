const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('mouseenter', open);
    panel.addEventListener('mouseleave', close);
})

function open() {
    this.classList.add('open');
    toggleText(this, true);
}

function close() {
    this.classList.remove('open');
    toggleText(this, false);
}

function toggleText(panel, panelOpening) {
    const textElements = panel.querySelectorAll('.text');

    textElements.forEach((text) => {
        if (panelOpening) {
            text.classList.add('show')
        } else {
            text.classList.remove('show')
        }
    })
}