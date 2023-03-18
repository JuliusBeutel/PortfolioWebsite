AOS.init({
    duration: 600 
});

if(window.innerWidth < 700) {
    const elements = document.querySelectorAll('[data-aos]');
    for (let i = 0; i < elements.length; i++) {
        elements[i].removeAttribute('data-aos');
    }
}