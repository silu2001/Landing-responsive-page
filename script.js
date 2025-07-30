
const hamburger = document.getElementById("bar");
const navLinks = document.getElementById("navLinks"); // Changed to ID for direct access
const closeIcon = document.getElementById("close");

hamburger.addEventListener("click", () => {
    navLinks.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    navLinks.classList.remove("active");
});

// // Optional: Close the menu if a link is clicked (useful for single-page apps)
// navLinks.querySelectorAll('a:not(#close)').forEach(link => {
//     link.addEventListener('click', () => {
//         if (navLinks.classList.contains('active')) {
//             navLinks.classList.remove('active');
//         }
//     });
// });

// // Optional: Close the menu if the window is resized to a larger size
// window.addEventListener('resize', () => {
//     if (window.innerWidth > 768) { // Assuming 768px is your mobile breakpoint
//         navLinks.classList.remove('active');
//     }
// });



