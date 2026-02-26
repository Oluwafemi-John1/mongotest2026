// ==================== GSAP Initialization ====================
gsap.registerPlugin(ScrollTrigger);

// ==================== Global Variables ====================
const API_BASE_URL = 'https://mongotest2026.vercel.app';

// ==================== Navigation ====================
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const hamburger = document.getElementById('hamburger');
const navLinkElements = document.querySelectorAll('.nav-link');

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinkElements.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinkElements.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ==================== GSAP Animations ====================

// Hero Section Animations
gsap.from('.hero-title', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.3
});

gsap.from('.hero-description', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.5
});

gsap.from('.hero-buttons', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.7
});

gsap.from('.stat-item', {
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out',
    delay: 0.9
});

gsap.from('.floating-card', {
    duration: 1,
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    ease: 'back.out(1.7)',
    delay: 1.2
});

// Scroll Indicator Animation
gsap.to('.scroll-indicator', {
    y: 10,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});

// Section Fade In Animations
const fadeElements = document.querySelectorAll('.feature-card, .endpoint-card, .food-card');

fadeElements.forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
});

// Features Section Animation
gsap.from('.features .section-header', {
    scrollTrigger: {
        trigger: '.features',
        start: 'top 80%'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

// Documentation Section Animation
gsap.from('.documentation .section-header', {
    scrollTrigger: {
        trigger: '.documentation',
        start: 'top 80%'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

// Examples Section Animation
gsap.from('.examples .section-header', {
    scrollTrigger: {
        trigger: '.examples',
        start: 'top 80%'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

// Contact Section Animation
gsap.from('.contact-content', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%'
    },
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

// ==================== Counter Animation ====================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// Trigger counter animation when hero is visible
const statNumbers = document.querySelectorAll('.stat-number');
let countersAnimated = false;

window.addEventListener('scroll', () => {
    if (!countersAnimated && window.scrollY < 500) {
        statNumbers.forEach(stat => animateCounter(stat));
        countersAnimated = true;
    }
});

// Animate on page load if already at top
if (window.scrollY < 500) {
    setTimeout(() => {
        statNumbers.forEach(stat => animateCounter(stat));
        countersAnimated = true;
    }, 1000);
}

// ==================== Copy to Clipboard ====================
const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const textToCopy = button.getAttribute('data-copy');

        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalHTML = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i>';
            button.classList.add('copied');

            setTimeout(() => {
                button.innerHTML = originalHTML;
                button.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
            alert('Failed to copy to clipboard');
        });
    });
});

// ==================== Tab Switching ====================
const tabButtons = document.querySelectorAll('.tab-btn');
const examplePanels = document.querySelectorAll('.example-panel');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');

        // Remove active class from all tabs and panels
        tabButtons.forEach(btn => btn.classList.remove('active'));
        examplePanels.forEach(panel => panel.classList.remove('active'));

        // Add active class to clicked tab and corresponding panel
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');

        // Animate the new panel
        gsap.from(`#${targetTab}`, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

// ==================== Foods Showcase ====================
const foodsGrid = document.getElementById('foodsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
let allFoods = [];

// Fetch and display foods
async function fetchFoods() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/foods`);
        const data = await response.json();

        if (data.success) {
            allFoods = data.data;
            displayFoods(allFoods);
        }
    } catch (error) {
        console.error('Error fetching foods:', error);
        foodsGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Failed to load foods. Please make sure the server is running.</p>';
    }
}

// Display foods in the grid
function displayFoods(foods) {
    if (foods.length === 0) {
        foodsGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No foods found.</p>';
        return;
    }

    foodsGrid.innerHTML = foods.slice(0, 12).map(food => `
        <div class="food-card">
            <div class="food-card-header" style="background: ${getRandomGradient()}">
                <div class="food-card-icon">${getFoodIcon(food.category)}</div>
                <h3 class="food-card-name">${food.name}</h3>
                <p class="food-card-category">${food.category}</p>
            </div>
            <div class="food-card-body">
                <p class="food-card-description">${food.description}</p>
                <div class="food-card-details">
                    <div class="detail-item">
                        <i class="fas fa-clock"></i>
                        <span>${food.preparationTime}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-chart-bar"></i>
                        <span>Difficulty: ${food.difficulty}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-fire"></i>
                        <span>${food.calories} calories</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-money-bill-wave"></i>
                        <span>₦${food.price.toLocaleString()}</span>
                    </div>
                </div>
                <div class="food-card-badges">
                    <span class="badge badge-region">${food.region}</span>
                    ${food.isVegetarian ? '<span class="badge badge-vegetarian">Vegetarian</span>' : ''}
                    ${food.isSpicy ? '<span class="badge badge-spicy">Spicy</span>' : ''}
                </div>
            </div>
        </div>
    `).join('');

    // Animate new food cards
    gsap.from('.food-card', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out'
    });
}

// Filter foods
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter foods
        let filteredFoods = allFoods;

        if (filter === 'soup') {
            filteredFoods = allFoods.filter(food => food.category.toLowerCase().includes('soup'));
        } else if (filter === 'main') {
            filteredFoods = allFoods.filter(food => food.category.toLowerCase().includes('main'));
        } else if (filter === 'snack') {
            filteredFoods = allFoods.filter(food =>
                food.category.toLowerCase().includes('snack') ||
                food.category.toLowerCase().includes('breakfast')
            );
        } else if (filter === 'vegetarian') {
            filteredFoods = allFoods.filter(food => food.isVegetarian);
        }

        displayFoods(filteredFoods);
    });
});

// Get random gradient for food cards
function getRandomGradient() {
    const gradients = [
        'linear-gradient(135deg, #00B050 0%, #00D65C 100%)',
        'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
        'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)',
        'linear-gradient(135deg, #FA709A 0%, #FEE140 100%)',
        'linear-gradient(135deg, #30CFD0 0%, #330867 100%)',
        'linear-gradient(135deg, #FF512F 0%, #DD2476 100%)',
        'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)',
        'linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)'
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
}

// Get icon for food category
function getFoodIcon(category) {
    const icons = {
        'Soup': '🍲',
        'Main Course': '🍛',
        'Swallow': '🍚',
        'Snack/Street Food': '🍢',
        'Breakfast/Snack': '🥐',
        'Side Dish': '🥗',
        'Appetizer/Side Dish': '🍽️',
        'Snack/Dessert': '🍰'
    };
    return icons[category] || '🍴';
}

// Initialize foods on page load
fetchFoods();

// ==================== Smooth Scrolling ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Scroll Reveal Animation ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.feature-card, .endpoint-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ==================== Loading State ====================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Refresh ScrollTrigger after page load
    ScrollTrigger.refresh();
});

// ==================== Interactive Demo ====================
// Add click handlers to endpoint cards to show live demo
document.querySelectorAll('.endpoint-card').forEach(card => {
    card.addEventListener('click', function () {
        gsap.to(this, {
            scale: 0.98,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        });
    });
});

// ==================== Parallax Effect for Hero ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-card');

    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// ==================== Easter Egg: Konami Code ====================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);

    if (konamiCode.join(',').includes(konamiSequence.join(','))) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Add confetti or special animation
    document.body.style.animation = 'rainbow 2s infinite';

    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
}

// ==================== Dynamic Time-based Greeting ====================
function updateGreeting() {
    const hour = new Date().getHours();
    const heroSubtitle = document.querySelector('.hero-subtitle');

    if (heroSubtitle) {
        if (hour < 12) {
            heroSubtitle.textContent = 'Good Morning! Welcome to';
        } else if (hour < 18) {
            heroSubtitle.textContent = 'Good Afternoon! Welcome to';
        } else {
            heroSubtitle.textContent = 'Good Evening! Welcome to';
        }
    }
}

updateGreeting();

// ==================== Console Easter Egg ====================
console.log('%c🍛 Nigerian Foods API 🍲', 'font-size: 20px; font-weight: bold; color: #00B050;');
console.log('%cBuilt with ❤️ for developers and food enthusiasts', 'font-size: 12px; color: #667EEA;');
console.log('%cTry the Konami Code for a surprise! ↑ ↑ ↓ ↓ ← → ← → B A', 'font-size: 10px; color: #FF6B35;');

// ==================== Performance Optimization ====================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
const debouncedScroll = debounce(() => {
    activateNavLink();
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ==================== Accessibility Enhancements ====================
// Add keyboard navigation for filter buttons
filterButtons.forEach((button, index) => {
    button.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            const nextButton = filterButtons[index + 1] || filterButtons[0];
            nextButton.focus();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevButton = filterButtons[index - 1] || filterButtons[filterButtons.length - 1];
            prevButton.focus();
        }
    });
});

// ==================== Auto-refresh ScrollTrigger on Resize ====================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

console.log('%c✨ All animations and interactive features loaded successfully!', 'color: #10B981; font-weight: bold;');
