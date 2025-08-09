// js/localization.js

import enStrings from './locales/en.js';
import ruStrings from './locales/ru.js';

/**
 * Manages localization for the application.
 */
class LocalizationManager {
    /**
     * Initializes the LocalizationManager.
     * @param {string} defaultLang - The default language code.
     */
    constructor(defaultLang = 'en') {
        this.currentLang = defaultLang;
        this.translations = {
            en: enStrings,
            ru: ruStrings
        };
        this.init();
    }

    /**
     * Initializes the language switcher UI and sets the initial language.
     */
    init() {
        this.updateUI();
        this.setupEventListeners();
    }

    /**
     * Sets up event listeners for language switcher buttons.
     */
    setupEventListeners() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                this.switchLanguage(lang);
            });
        });
    }

    /**
     * Switches the current language and updates the UI.
     * @param {string} lang - The language code to switch to.
     */
    switchLanguage(lang) {
        if (lang === this.currentLang || !this.translations[lang]) return;

        this.currentLang = lang;
        this.updateUI();
        this.updateActiveButton();
    }

    /**
     * Updates the active state of the language switcher buttons.
     */
    updateActiveButton() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeBtn = document.querySelector(`.lang-btn[data-lang="${this.currentLang}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }

    /**
     * Updates the UI text content based on the current language.
     */
    updateUI() {
        const elementsToUpdate = document.querySelectorAll('[data-i18n]');
        elementsToUpdate.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            
            // Handle special cases like HTML content or placeholders with variables
            if (element.hasAttribute('data-i18n-html')) {
                // This allows HTML tags in translations (e.g., for the hero title with <span>)
                element.innerHTML = translation.replace('{name}', 'Bebrowskiy');
            } else {
                element.textContent = translation;
            }
        });
    }

    /**
     * Retrieves the translated string for a given key.
     * @param {string} key - The translation key.
     * @returns {string} The translated string or the key if not found.
     */
    getTranslation(key) {
        return this.translations[this.currentLang][key] || key;
    }

    /**
     * Gets the current language code.
     * @returns {string} The current language code.
     */
    getCurrentLanguage() {
        return this.currentLang;
    }
}

// Export a singleton instance
export default new LocalizationManager();