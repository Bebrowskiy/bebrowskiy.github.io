// result.js

import translations from './languages.js';

// Получаем параметры из URL
const urlParams = new URLSearchParams(window.location.search);
const score = parseInt(urlParams.get('score')) || 0;
const lang = urlParams.get('lang') || 'ru';

let currentLang = lang;

// Функция для перевода текста
function t(key) {
  return translations[currentLang][key] || translations.ru[key] || key;
}

// Функция для "испорченного" текста (для низкого IQ)
function makeTextStupid(text, chaosLevel) {
  if (chaosLevel === 0) return text; // Гений - нормальный текст
  
  let result = text;
  
  switch(chaosLevel) {
    case 1: // Умный - немного опечаток
      const typos1 = [
        { from: ' ', to: ' ' },
        { from: 'е', to: 'ё' },
        { from: 'о', to: 'а' }
      ];
      typos1.forEach(typo => {
        const regex = new RegExp(typo.from, 'g');
        result = result.replace(regex, typo.to);
      });
      break;
      
    case 2: // Средний - больше опечаток
      const typos2 = [
        { from: 'что', to: 'што' },
        { from: 'его', to: 'ива' },
        { from: 'ние', to: 'не' },
        { from: 'ть', to: 'т' }
      ];
      typos2.forEach(typo => {
        const regex = new RegExp(typo.from, 'g');
        result = result.replace(regex, typo.to);
      });
      break;
      
    case 3: // Низкий - сильно испорченный
      const typos3 = [
        { from: ' ', to: '~' },
        { from: 'а', to: 'я' },
        { from: 'о', to: 'а' },
        { from: 'е', to: 'и' },
        { from: 'и', to: 'е' },
        { from: 'ть', to: 'т' },
        { from: 'ый', to: 'ай' }
      ];
      typos3.forEach(typo => {
        const regex = new RegExp(typo.from, 'g');
        result = result.replace(regex, typo.to);
      });
      // Добавляем случайные символы
      result = result.replace(/~/g, ' ~ ');
      break;
      
    case 4: // Очень низкий - полный абсурд
      const words = result.split(' ');
      // Перемешиваем слова
      for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
      }
      result = words.join(' ~ ');
      // Заменяем буквы на случайные
      result = result.replace(/[аеиоуыэюя]/gi, () => {
        const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
        return vowels[Math.floor(Math.random() * vowels.length)];
      });
      result = result.replace(/[бвгджзклмнпрстфхцчшщ]/gi, () => {
        const consonants = ['б', 'в', 'г', 'д', 'ж', 'з', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'];
        return consonants[Math.floor(Math.random() * consonants.length)];
      });
      break;
  }
  
  return result;
}

// Функция для получения случайного сообщения по уровню
function getRandomMessage(level) {
  const messageKey = `${level}Messages`;
  const messages = translations[currentLang][messageKey] || translations.ru[messageKey];
  if (messages && messages.length > 0) {
    return messages[Math.floor(Math.random() * messages.length)];
  }
  return t(level);
}

// Функция для получения информации о результате
function getResultInfo(score) {
  if (score >= 130) {
    return {
      message: getRandomMessage('genius'),
      description: currentLang === 'ru' 
        ? "Вы обладаете выдающимся интеллектом! Ваш ум работает на уровне гения."
        : "You possess outstanding intelligence! Your mind works at a genius level.",
      className: "genius",
      level: "genius",
      chaosLevel: 0
    };
  } else if (score >= 110) {
    return {
      message: getRandomMessage('smart'),
      description: currentLang === 'ru'
        ? "Вы очень умны! У вас отличные аналитические способности."
        : "You're very smart! You have excellent analytical abilities.",
      className: "smart",
      level: "smart",
      chaosLevel: 1
    };
  } else if (score >= 90) {
    return {
      message: getRandomMessage('average'),
      description: currentLang === 'ru'
        ? "Ваш интеллект на среднем уровне. У вас есть потенциал для роста."
        : "Your intelligence is at an average level. You have potential for growth.",
      className: "average",
      level: "average",
      chaosLevel: 2
    };
  } else if (score >= 70) {
    return {
      message: getRandomMessage('low'),
      description: currentLang === 'ru'
        ? "Ваш интеллект ниже среднего. Рекомендуем развивать логическое мышление."
        : "Your intelligence is below average. We recommend developing logical thinking.",
      className: "low",
      level: "low",
      chaosLevel: 3
    };
  } else {
    return {
      message: getRandomMessage('veryLow'),
      description: currentLang === 'ru'
        ? "Ваш интеллект очень низкий. Не расстраивайтесь, интеллект можно развить!"
        : "Your intelligence is very low. Don't be upset, intelligence can be developed!",
      className: "very-low",
      level: "veryLow",
      chaosLevel: 4
    };
  }
}

// Функция для применения хаоса к странице
function applyChaos(chaosLevel) {
  const body = document.body;
  const container = document.querySelector('.container');
  const scoreValue = document.getElementById('score-value');
  const messageElement = document.getElementById('result-message');
  const descriptionElement = document.getElementById('result-description');
  const titleElement = document.getElementById('result-title');
  const scoreLabel = document.getElementById('your-score');
  const footer = document.getElementById('result-footer');
  
  // Убираем все предыдущие эффекты
  body.className = '';
  container.style.transform = '';
  container.style.transition = 'all 0.5s ease';
  
  // Применяем "интеллектуальные" изменения к тексту
  const resultInfo = getResultInfo(score);
  titleElement.textContent = makeTextStupid(t('resultTitle'), chaosLevel);
  scoreLabel.textContent = makeTextStupid(t('yourScore'), chaosLevel);
  footer.textContent = makeTextStupid(t('copyright'), chaosLevel);
  
  switch(chaosLevel) {
    case 0: // Гений
      body.style.background = 'linear-gradient(45deg, #4facfe, #00f2fe)';
      container.style.boxShadow = '0 0 50px rgba(0, 242, 254, 0.5)';
      scoreValue.style.animation = 'float 3s ease-in-out infinite';
      addCSS(`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `);
      break;
      
    case 1: // Умный
      body.style.background = 'linear-gradient(45deg, #43e97b, #38f9d7)';
      container.style.boxShadow = '0 0 30px rgba(67, 233, 123, 0.3)';
      break;
      
    case 2: // Средний
      body.style.background = 'linear-gradient(45deg, #fa709a, #fee140)';
      container.style.boxShadow = '0 0 20px rgba(250, 112, 154, 0.2)';
      // Легкое покачивание
      container.style.animation = 'sway 4s ease-in-out infinite';
      addCSS(`
        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
      `);
      break;
      
    case 3: // Низкий
      body.style.background = 'linear-gradient(45deg, #ff9a9e, #fad0c4)';
      container.style.boxShadow = '0 0 25px rgba(255, 154, 158, 0.3)';
      
      // Контейнер трясется
      container.style.animation = 'shake 0.5s infinite';
      addCSS(`
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }
      `);
      
      // Текст становится странным
      messageElement.style.fontFamily = '"Comic Sans MS", cursive, sans-serif';
      messageElement.style.transform = 'rotate(-2deg)';
      break;
      
    case 4: // Очень низкий
      body.style.background = 'linear-gradient(45deg, #ff6b6b, #ffa8a8)';
      container.style.boxShadow = '0 0 30px rgba(255, 107, 107, 0.4)';
      
      // Полный хаос!
      body.style.animation = 'chaos 2s infinite';
      container.style.animation = 'wild 1s infinite';
      scoreValue.style.animation = 'spin 3s linear infinite';
      messageElement.style.fontFamily = '"Comic Sans MS", cursive, sans-serif';
      messageElement.style.transform = 'rotate(5deg) scale(1.2)';
      
      addCSS(`
        @keyframes chaos {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes wild {
          0% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(5deg) scale(1.05); }
          50% { transform: rotate(-5deg) scale(0.95); }
          75% { transform: rotate(3deg) scale(1.02); }
          100% { transform: rotate(0deg) scale(1); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `);
      
      // Добавляем случайные эмодзи
      setInterval(() => {
        const emojis = ['🤪', '🤡', '👽', '🤖', '👾', '💩', '👻', '🤪'];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        document.title = `${randomEmoji} IQ Result ${randomEmoji}`;
      }, 1000);
      break;
  }
}

// Функция для добавления CSS в head
function addCSS(css) {
  // Удаляем предыдущие стили
  const existingStyle = document.getElementById('chaos-style');
  if (existingStyle) {
    existingStyle.remove();
  }
  
  const style = document.createElement('style');
  style.id = 'chaos-style';
  style.textContent = css;
  document.head.appendChild(style);
}

// Функция для обновления всех текстов на странице
function updateLanguage() {
  // Обновляем активную кнопку языка
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === currentLang) {
      btn.classList.add('active');
    }
  });
  
  // Обновляем результаты
  updateResults();
}

// Функция для обновления результатов
function updateResults() {
  // Обновляем оценку
  document.getElementById('score-value').textContent = score;
  
  // Получаем информацию о результате
  const resultInfo = getResultInfo(score);
  
  // Обновляем сообщение
  const messageElement = document.getElementById('result-message');
  messageElement.textContent = makeTextStupid(resultInfo.message, resultInfo.chaosLevel);
  messageElement.className = `result-message ${resultInfo.className}`;
  
  // Обновляем описание
  const descriptionElement = document.getElementById('result-description');
  descriptionElement.textContent = makeTextStupid(resultInfo.description, resultInfo.chaosLevel);
  
  // Применяем хаос!
  applyChaos(resultInfo.chaosLevel);
}

// Добавляем обработчики для кнопок языков
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    updateLanguage();
    // Обновляем URL без перезагрузки страницы
    const url = new URL(window.location);
    url.searchParams.set('lang', currentLang);
    window.history.replaceState({}, '', url);
  });
});

// Добавляем обработчики для кнопок действий
document.getElementById('share-button').addEventListener('click', () => {
  const shareText = currentLang === 'ru' 
    ? `Мой IQ: ${score}! Пройди тест и проверь свой интеллект: `
    : `My IQ: ${score}! Take the test and check your intelligence: `;
  const shareUrl = window.location.origin + window.location.pathname.replace('result.html', '');
  
  if (navigator.share) {
    navigator.share({
      title: currentLang === 'ru' ? 'Мой результат IQ теста' : 'My IQ Test Result',
      text: shareText,
      url: shareUrl
    });
  } else {
    // Fallback для браузеров, которые не поддерживают Web Share API
    const textArea = document.createElement('textarea');
    textArea.value = shareText + shareUrl;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    // Угарное сообщение
    let alertMessage;
    if (score < 30) {
      alertMessage = currentLang === 'ru' 
        ? 'Ссылка скопирована! 🤪 Но ты всё равно тупой 😂'
        : 'Link copied! 🤪 But you\'re still dumb 😂';
    } else {
      alertMessage = currentLang === 'ru' 
        ? 'Ссылка скопирована в буфер обмена!'
        : 'Link copied to clipboard!';
    }
    alert(alertMessage);
  }
});

document.getElementById('retry-button').addEventListener('click', () => {
  // Угарное прощание
  const goodbyes = currentLang === 'ru' 
    ? [
        "Пока, клоун! 🤡",
        "Удачи в следующий раз! 😵‍💫",
        "Бип-буп, перезагрузка... 🤖"
      ]
    : [
        "Bye, clown! 🤡",
        "Good luck next time! 😵‍💫",
        "Beep-boop, rebooting... 🤖"
      ];
  const randomGoodbye = goodbyes[Math.floor(Math.random() * goodbyes.length)];
  alert(randomGoodbye);
  window.location.href = `quiz.html?lang=${currentLang}`;
});

// Инициализируем страницу
updateLanguage();