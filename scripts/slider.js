export function setSlider() {

    let arrowRight = document.querySelector('#products-arrow-right');
    let arrowLeft = document.querySelector('#products-arrow-left');
    let slider = document.querySelector('#products-container');
    let productItem = document.querySelector('.products-item');
    let productMargin = parseInt(getComputedStyle(productItem).marginRight);
    let productItemWidth = -(productItem.offsetWidth + productMargin);
    let maxWidth = productItemWidth * 3;
    let translateItemProductWidth = 0;


    function moveSlider(direction) {
        if (direction === 'right' && translateItemProductWidth >= maxWidth) {
            translateItemProductWidth += productItemWidth;
            slider.style.transform = 'translateX(' + translateItemProductWidth + 'px)';
        } else if (direction === 'left' && translateItemProductWidth < 0) {
            translateItemProductWidth -= productItemWidth;
            slider.style.transform = 'translateX(' + translateItemProductWidth + 'px)';
        }
    }

    arrowRight.addEventListener('click', () => moveSlider('right'));
    arrowLeft.addEventListener('click', () => moveSlider('left'));
}