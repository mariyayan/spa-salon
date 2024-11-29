export function showHiddenImgs() {

    let allHiddenImgs = document.querySelectorAll('.hide-img');
    let options = {
        rootMargin: '0px 0px 0px 0px',
    };

    let callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-img');
            }
        })
    };
    let observer = new IntersectionObserver(callback, options);
    allHiddenImgs.forEach(img => observer.observe(img));
}