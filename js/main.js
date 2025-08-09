// js/main.js
import { createParticles } from './particles.js';
import localizationManager from './localization.js'; // Import the localization manager

// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/**
 * Toggles the theme between light and dark mode.
 */
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    }
}

/**
 * Attaches event listener for theme toggle button.
 */
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

/**
 * Animates the hero section elements.
 */
function animateHero() {
    const heroTitle = document.querySelector('.hero h1'); // No need for :not(.hidden) anymore
    const heroSubtitle = document.querySelector('.hero p');

    if (heroTitle) {
        gsap.from(heroTitle, {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "back.out(1.7)",
            delay: 0.2
        });
    }

    if (heroSubtitle) {
        gsap.from(heroSubtitle, {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "back.out(1.7)",
            delay: 0.4
        });
    }
}

/**
 * Animates the about section elements on scroll.
 */
function animateAbout() {
    const aboutContent = document.querySelector('.about-content');
    if (!aboutContent) return;

    const aboutTitle = aboutContent.querySelector('h2');
    const aboutTexts = aboutContent.querySelectorAll('p');

    if (aboutTitle) {
        gsap.from(aboutTitle, {
            scrollTrigger: {
                trigger: '.about',
                start: 'top 80%'
            },
            duration: 1,
            y: 30,
            opacity: 0
        });
    }

    aboutTexts.forEach((text, i) => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: '.about',
                start: 'top 80%'
            },
            duration: 1,
            y: 30,
            opacity: 0,
            delay: 0.2 + i * 0.1
        });
    });
}

/**
 * Animates the skills section items on scroll.
 */
function animateSkills() {
    document.querySelectorAll('.skill-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 90%'
            },
            duration: 0.8,
            y: 30,
            opacity: 0,
            delay: i * 0.1
        });
    });
}

/**
 * Animates the stats section numbers on scroll.
 */
function animateStats() {
    document.querySelectorAll('.stat-number').forEach((number, i) => {
        const count = parseInt(number.getAttribute('data-count'));

        gsap.from(number, {
            scrollTrigger: {
                trigger: '.stats',
                start: 'top 80%'
            },
            duration: 2,
            innerHTML: 0,
            snap: {
                innerHTML: 1
            },
            delay: i * 0.2,
            ease: "power1.out"
        });
    });
}

/**
 * Animates the projects section cards on scroll.
 */
function animateProjects() {
    document.querySelectorAll('.project-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            delay: i * 0.2
        });
    });
}

/**
 * Animates the contact section elements on scroll.
 */
function animateContact() {
    const contactTitle = document.querySelector('.contact h2');
    const contactText = document.querySelector('.contact p');
    const contactLinks = document.querySelector('.contact-links');

    if (contactTitle) {
        gsap.from(contactTitle, {
            scrollTrigger: {
                trigger: '.contact',
                start: 'top 80%'
            },
            duration: 1,
            y: 30,
            opacity: 0
        });
    }

    if (contactText) {
        gsap.from(contactText, {
            scrollTrigger: {
                trigger: '.contact',
                start: 'top 80%'
            },
            duration: 1,
            y: 30,
            opacity: 0,
            delay: 0.2
        });
    }

    if (contactLinks) {
        gsap.from(contactLinks, {
            scrollTrigger: {
                trigger: '.contact-links',
                start: 'top 90%'
            },
            duration: 1,
            y: 30,
            opacity: 0,
            delay: 0.3
        });
    }
}

/**
 * Animates the terminal section lines on scroll.
 */
function animateTerminal() {
    const terminalLines = document.querySelectorAll('.terminal-content > div');
    terminalLines.forEach((line, i) => {
        gsap.from(line, {
            scrollTrigger: {
                trigger: '.terminal',
                start: 'top 80%'
            },
            duration: 0.5,
            opacity: 0,
            y: 20,
            delay: i * 0.3
        });
    });
}

/**
 * Initializes all scroll-triggered animations.
 */
function initScrollAnimations() {
    animateAbout();
    animateSkills();
    animateStats();
    animateProjects();
    animateContact();
    animateTerminal();
}

/**
 * Adds interactive hover effects to skill items.
 */
function setupSkillInteractions() {
    document.querySelectorAll('.skill-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                duration: 0.3,
                scale: 1.05,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                duration: 0.3,
                scale: 1,
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
            });
        });
    });
}

/**
 * Adds interactive hover and click effects to project cards.
 */
function setupProjectInteractions() {
    document.querySelectorAll('.project-card').forEach(card => {
        const githubLink = card.querySelector('.github-link');

        card.addEventListener('click', (e) => {
            // If the click is not on the GitHub link, open the project's GitHub page
            if (e.target !== githubLink) {
                const githubUrl = card.getAttribute('data-github');
                if (githubUrl) {
                    window.open(githubUrl, '_blank');
                }
            }
        });

        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                y: -10,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                y: 0,
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
            });
        });
    });

    // Prevent event propagation on GitHub links
    document.querySelectorAll('.github-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
}

/**
 * Sets up the click-to-scroll behavior for the hero section.
 */
function setupHeroScroll() {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('click', () => {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: '#about',
                    autoKill: false
                },
                ease: "power2.inOut"
            });
        });
    }
}

/**
 * Initializes the entire application.
 */
function initApp() {
    // The localization manager initializes itself
    createParticles();
    animateHero();
    initScrollAnimations();
    setupThemeToggle();
    setupSkillInteractions();
    setupProjectInteractions();
    setupHeroScroll();
    
    // Update HTML lang attribute
    document.documentElement.lang = localizationManager.getCurrentLanguage();
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApp);