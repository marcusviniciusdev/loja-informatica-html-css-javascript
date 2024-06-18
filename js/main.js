var btnContact = document.querySelector('.botaoContato');

btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.contact-info');
    boxContact.classList.toggle('is-open');
    this.classList.toggle('change-icon');
});

