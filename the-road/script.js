const buttons = document.querySelectorAll('.nav-button');

buttons.forEach((item) => {
    item.addEventListener('click', () => {
        item.parentElement.parentElement.classList.toggle('change');
    });
});


