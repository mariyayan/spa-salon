export function setChooseCategory() {

    let shopCategories = document.querySelector('#shop-menu');

    function switchCategory(e) {

        if (!(e.target.classList.contains('product-menu-option')) || e.target.classList.contains('category-product-active')) return;

        let clickedElement = e.target;

        shopCategories.querySelector('.category-product-active').classList.remove('category-product-active');
        clickedElement.classList.add('category-product-active');




        let activeCategoryItems = document.querySelectorAll('.active');
        let choosenCategoryItems = document.querySelectorAll(`.shop-item-${e.target.id}`);

        activeCategoryItems.forEach((item) => item.classList.remove('active'));
        choosenCategoryItems.forEach((item) => item.classList.add('active'));
    }

    shopCategories.addEventListener('click', switchCategory);
}