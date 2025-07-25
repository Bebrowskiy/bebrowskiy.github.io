// quiz.js

import questionsData from './questions.js';
import translations from './languages.js';

// Функция для перевода текста
function t(key, lang) {
  return translations[lang][key] || translations.ru[key] || key;
}

// Класс для управления тестом
export class IQQuiz {
  constructor(lang) {
    this.lang = lang;
    this.allQuestions = questionsData[lang] || questionsData.ru;
    this.questions = this.getRandomQuestions(10); // Выбираем 10 случайных вопросов
    this.currentQuestionIndex = 0;
    this.userAnswers = new Array(this.questions.length).fill(null);
    
    // Получаем элементы DOM
    this.questionText = document.getElementById('question-text');
    this.questionNumber = document.getElementById('question-number');
    this.optionsContainer = document.getElementById('options-container');
    this.nextButton = document.getElementById('next-button');
    
    this.init();
  }
  
  // Выбираем случайные вопросы из всех доступных
  getRandomQuestions(count) {
    const shuffled = [...this.allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  
  init() {
    this.showQuestion(this.currentQuestionIndex);
    this.setupEventListeners();
  }
  
  updateLanguage(newLang) {
    this.lang = newLang;
    // Получаем новые вопросы на новом языке
    this.allQuestions = questionsData[newLang] || questionsData.ru;
    this.questions = this.getRandomQuestions(10);
    
    // Сбрасываем ответы
    this.userAnswers = new Array(this.questions.length).fill(null);
    
    this.showQuestion(this.currentQuestionIndex);
  }
  
  showQuestion(index) {
    const question = this.questions[index];
    this.currentQuestionIndex = index;
    
    this.questionNumber.textContent = `${t('question', this.lang)} ${index + 1} ${t('of', this.lang)} ${this.questions.length}`;
    this.questionText.textContent = question.question;

    // Очищаем контейнеры
    this.optionsContainer.innerHTML = '';
    
    // Проверяем существование imageContainer
    const imageContainer = document.getElementById('image-container');
    if (imageContainer) {
      imageContainer.innerHTML = '';
      
      // Отображаем картинку, если она есть
      if (question.image) {
        const img = document.createElement('img');
        img.src = question.image;
        img.alt = 'Question image';
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.borderRadius = '12px';
        img.style.border = '1px solid #e9ecef';
        img.style.maxHeight = '300px';
        img.style.objectFit = 'contain';
        imageContainer.appendChild(img);
      }
    }

    // Создаем кнопки для вариантов ответов
    question.options.forEach((option, i) => {
      const button = document.createElement('button');
      button.className = 'option-button';
      button.textContent = option;
      button.addEventListener('click', () => this.selectOption(i, button));
      this.optionsContainer.appendChild(button);
    });

    // Если пользователь уже отвечал на этот вопрос, подсвечиваем его ответ
    if (this.userAnswers[index] !== null) {
      const buttons = this.optionsContainer.querySelectorAll('.option-button');
      buttons[this.userAnswers[index]].classList.add('selected');
      this.nextButton.disabled = false;
    } else {
      this.nextButton.disabled = true;
    }
  }
  
  selectOption(selectedIndex, selectedButton) {
    // Убираем выделение со всех кнопок
    const buttons = this.optionsContainer.querySelectorAll('.option-button');
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Выделяем выбранную кнопку
    selectedButton.classList.add('selected');

    // Сохраняем ответ пользователя
    this.userAnswers[this.currentQuestionIndex] = selectedIndex;

    // Активируем кнопку "Далее"
    this.nextButton.disabled = false;
  }
  
  setupEventListeners() {
    if (this.nextButton) {
      this.nextButton.addEventListener('click', () => this.goToNextQuestion());
    }
  }
  
  goToNextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.showQuestion(this.currentQuestionIndex);
    } else {
      this.calculateAndRedirect();
    }
  }
  
  calculateAndRedirect() {
    let totalScore = 0;
    let maxPossibleScore = 0;
    
    this.questions.forEach((q, index) => {
      maxPossibleScore += q.points;
      if (this.userAnswers[index] !== null) {
        if (this.userAnswers[index] === q.correctAnswer) {
          totalScore += q.points;
        }
      }
    });
    
    // Конвертируем в IQ шкалу (0-150)
    const iqScore = Math.round((totalScore / maxPossibleScore) * 150);
    
    // Перенаправляем на страницу результата с параметром score и языком
    window.location.href = `result.html?score=${iqScore}&lang=${this.lang}`;
  }
}