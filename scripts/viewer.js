export function showCloseViewer(container) {

    let viewer = container.querySelector('.viewer');
    let view = viewer.querySelector('.view');

    console.log(viewer, view)

    function showViewer(e) {
        let item = e.target.closest('.item');
        if (!item) return;
        viewer.classList.add('add-opacity');
        viewer.classList.add('add-visibility');
        insertContent(view, item);
    }


    function closeViewer(e) {
        if (e.target.classList.contains('cross') || !e.target.closest('.view')) {
            viewer.classList.remove('add-opacity');
            viewer.classList.remove('add-visibility');
        }
    }

    function insertContent(view, item) {

        let itemElements = item.querySelectorAll('.window-content');
        let viewElements = view.querySelectorAll('.window-content-target');

        itemElements.forEach((item, index) => item.nodeName === 'IMG' ? viewElements[index].setAttribute('src', `../img/${item.getAttribute('src')}`) : viewElements[index].textContent = item.textContent);
    }
    container.addEventListener('click', showViewer);
    viewer.addEventListener('click', closeViewer);
}