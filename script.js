// const hamburger = document.getElementById('hamburger');
// const navLinks = document.getElementById('navLinks');


// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.querySelector('.nav-links'); // Corrected this line

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}
