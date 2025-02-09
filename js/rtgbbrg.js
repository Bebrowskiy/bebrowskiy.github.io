document.addEventListener('DOMContentLoaded', function() {
    const clues = [
        'Следуй за белым кроликом',
        'Правда с другой стороны',
        'Ищи под лужайкой',
        '0-0',
        'Смотри там, где другие не видят',
        'Ключ в деталях',
        'Ты ближе, чем думаешь'
    ];

    let currentClue = 0;
    const clueElement = document.querySelector('h1');

    setInterval(function() {
        
        currentClue = (currentClue + 1) % clues.length;
        clueElement.textContent = clues[currentClue];


        clueElement.classList.remove('glitch');
        void clueElement.offsetWidth;
        clueElement.classList.add('glitch');
    }, 5000); 
});


let secret = String.fromCharCode(55, 50, 57, 53, 44, 32, 52, 55, 48, 49);
console.log(secret);