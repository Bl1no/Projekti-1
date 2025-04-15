let slideIndex = 0;
let slides = document.querySelectorAll('.slider .slide');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'; // Fshijmë të gjitha imazhet
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } // Kthehemi tek slidi i parë
    slides[slideIndex - 1].style.display = 'block'; // Shfaqim sliden aktuale
    setTimeout(showSlides, 3000); // Ndryshon çdo 3 sekonda
}

showSlides(); // Thirrim funksionin për të startuar slider-in


