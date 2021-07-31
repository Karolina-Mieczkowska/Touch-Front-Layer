const icon = document.querySelectorAll('.layer__icon svg');
const layer = document.querySelector('.layer');

const activateLayer = function() {
    layer.classList.toggle('layer--active')
}

icon.forEach(function(icon) {
    icon.addEventListener('click', activateLayer);
})

let isDragging = false;

const touchStart = function() {
    console.log('start');
};

const touchEnd = function() {
    console.log('end');
};

const touchMove = function() {
    console.log('move')
}

layer.addEventListener('touchstart', touchStart);
layer.addEventListener('touchend', touchEnd);
layer.addEventListener('touchmove', touchMove);


    




