window.addEventListener('scroll', function() {
    const section = document.querySelector('.next-section');
    const image = document.querySelector('.styled-image');
    
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if(sectionPosition < screenPosition) {
        section.classList.add('reveal');
        image.classList.add('reveal');
    }
});
