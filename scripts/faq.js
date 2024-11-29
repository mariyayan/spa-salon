export function setFAQ() {

    let faqContainer = document.querySelector('#faq-container');

    function openCloseFAQ(e) {

        let faqItem = e.target.closest('.faq-item');
        let faqAnswerBlock = faqItem.querySelector('.faq-answer');
        let faqArrow = faqItem.querySelector('.faq-arrow');


        faqAnswerBlock.classList.toggle('add-height');
        faqAnswerBlock.classList.toggle('add-opacity');
        faqArrow.classList.toggle('rotate-arrow');
    }

    faqContainer.addEventListener('click', openCloseFAQ);
}