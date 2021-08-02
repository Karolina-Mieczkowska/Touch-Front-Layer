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
    isDragging = false;
};

const touchEnd = function() {
    if (isDragging) {
        activateLayer();
    }
};

const touchMove = function() {
    isDragging = true;
}

layer.addEventListener('touchstart', touchStart);
layer.addEventListener('touchend', touchEnd);
layer.addEventListener('touchmove', touchMove);


    




