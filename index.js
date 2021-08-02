const icon = document.querySelectorAll('.layer__icon svg');
const layerSwipe = document.querySelector('.layer__swipe');
const layer = document.querySelector('.layer');
const listItem = document.querySelectorAll('.layer-nav__item');
const layerParagraph = document.querySelectorAll('.layer__paragraph');

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
    // if (layer.classList.contains('layer--active')) {
    //     isDragging = false;
    //     console.log('contains')
    // } else {
    //     isDragging = true;
    //     console.log('not contains')
    // }
}

layerSwipe.addEventListener('touchstart', touchStart);
layerSwipe.addEventListener('touchend', touchEnd);
layerSwipe.addEventListener('touchmove', touchMove);

// DISPLAY MOVEMENTS

// const displayParagraph = function() {
//     layerParagraph[i].classList.toggle('paragraph--active')
// }

// listItem.forEach(function(item, ind) {
//     item.addEventListener('click', function() {
//         if (item.classList.contains(!'layer-nav__item--active')) {
//             layerParagraph[ind].style.color = 'black';
//         } else {
//             layerParagraph[ind].style.color = 'red';
//         }
//     })
// })

let prevItems = [];
let prevItemIndex;

listItem.forEach(function(item, ind) {
    item.addEventListener('click', function() {

        item.classList.add('layer-nav__item--active');
        prevItems.push(ind)
        layerParagraph[ind].classList.add('layer__paragraph--active');

        if (prevItems.length > 1) {
            prevItemIndex = prevItems[prevItems.length - 2];
        } else {
            prevItemIndex = 0;
        }

        if (item !== listItem[prevItemIndex]) {
            listItem[prevItemIndex].classList.remove('layer-nav__item--active');
            layerParagraph[prevItemIndex].classList.remove('layer__paragraph--active');
        }
    })
})









