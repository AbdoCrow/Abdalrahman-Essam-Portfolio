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

// Initialize Lightbox - this one setting works for all galleries
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
});

// --- Swiper Initializations ---

// Initialize Swiper for Project 1
const swiper1 = new Swiper('.project-1-swiper', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Initialize Swiper for Project 2
const swiper2 = new Swiper('.project-2-swiper', {
  loop: true,
  autoplay: {
    delay: 2800,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Initialize Swiper for Project 3
const swiper3 = new Swiper('.project-3-swiper', {
  loop: true,
  autoplay: {
    delay: 3100,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Initialize Swiper for Project 4
const swiper4 = new Swiper('.project-4-swiper', {
  loop: true,
  autoplay: {
    delay: 3400,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Initialize Swiper for Project 5
const swiper5 = new Swiper('.project-5-swiper', {
  loop: true,
  autoplay: {
    delay: 3700,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});