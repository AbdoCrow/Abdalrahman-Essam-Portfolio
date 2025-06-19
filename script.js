// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animations
const scrollElements = document.querySelectorAll('.animate-scroll');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('visible');
};

const hideScrollElement = (element) => {
    element.classList.remove('visible');
}

let animationTimeout;

const handleScrollAnimation = () => {
    scrollElements.forEach((el, index) => {
        if (elementInView(el, 1.25)) {
            // Clear any existing timeout for this element to prevent re-triggering if already visible
            if (!el.classList.contains('visible')) {
                setTimeout(() => {
                    displayScrollElement(el);
                }, index * 100); // Cascading effect delay
            }
        }
        // Optional: to re-hide elements when they scroll out of view
        // else if(!elementInView(el,0)) {
        //     hideScrollElement(el);
        // }
    })
}

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Initial check on page load
handleScrollAnimation();