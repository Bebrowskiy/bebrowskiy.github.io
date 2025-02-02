document.addEventListener('DOMContentLoaded', function() {
    const clues = [
        'Следуй за белым кроликом',
        'Правда с другой стороны',
        'Ищи под лужайкой',
        '0-0'
    ];

    let currentClue = 0;
    const clueElement = document.querySelector('h1');

    setInterval(function() {
        // Ожидание до смены подсказки
        currentClue = (currentClue + 1) % clues.length;
        clueElement.textContent = clues[currentClue];

        // Перезапуск анимации
        clueElement.classList.remove('glitch');
        void clueElement.offsetWidth; // Этот трюк принудительно перезапустит анимацию
        clueElement.classList.add('glitch');
    }, 5000);  // Меняет подсказку каждые 5 секунд
});
