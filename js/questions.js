// questions.js

const questions = {
  ru: [
    // Easy Level - 7 points

    {
      id: 1,
      type: "math",
      queston: "Продолжите последовательность: 3, 6, 9, 12, ?",
      options: ["14", "15", "16", "18"],
      correctAnswer: 1,
      points: 7,
      explanation: "Это арифметическая прогрессия с шагом 3. Каждое следующее число больше предыдущего на 3: 3+3=6, 6+3=9, 9+3=12, 12+3=15"
    },
    {
      id: 2,
      type: "logic",
      question: "Какое слово лишнее: яблоко, груша, стол, апельсин?",
      options: ["Яблоко", "Груша", "Стол", "Апельсин"],
      correctAnswer: 2,
      points: 7,
      explanation: "Яблоко, груша и апельсин - это фрукты, а стол - предмет мебели. Следовательно, стол не относится к той же категории, что и остальные слова"
    },
    {
      id: 3,
      type: "logic",
      question: "Если все глорбы - дварфы, а некоторые дварфы - гномы, то некоторые глорбы - ?",
      options: ["Дварфы", "Гномы", "Глорбы", "Люди"],
      correctAnswer: 1,
      points: 7,
      explanation: "Думай сам, мне лень объяснять"
    },
    {
      id: 4,
      type: "math",
      question: "Сколько будет 15 + 27?",
      options: ["41", "42", "43", "44"],
      correctAnswer: 1,
      points: 7,
      explanation: "Простое логическое сложение"
    },
    {
      id: 5,
      type: "logic",
      question: "Какая фигура не квадратная?",
      options: ["Квадрат", "Круг", "Ромб", "прямоугольник"],
      correctAnswer: 1,
      points: 7,
      explanation: " Квадрат, ромб и прямоугольник - все это четырехугольники с прямыми или равными углами. Круг же не имеет углов и сторон, поэтому он не квадратный"
    },
    {
      id: 6,
      type: "logic",
      question: "Продолжите: А, Б, В, Г, ?",
      options: ["E", "Ж", "З", "Д"],
      correctAnswer: 3,
      points: 7,
      explanation: "Это последовательные буквы русского алфавита"
    },
    {
      id: 7,
      type: "math",
      question: "Что больше: 1/2 или 1/3?",
      options: ["1/2", "1/3", "1", "Нельзя сравнить"],
      correctAnswer: 2,
      points: 7,
      explanation: "Явно же, что 1 больше"
    },
    {
      id: 8,
      type: "logic",
      question: "Что тяжелее: килограмм пуха или килограмм железа?",
      options: ["Пух", "Железо", "Одиаково", "Зависит от условий"],
      correctAnswer: 2,
      points: 7,
      explanation: "Оба весят ровно 1 килограмм. Вес - это масса тела под действием силы тяжести. Несмотря на разную плотность материалов, масса одинакова"
    },
    {
      id: 9,
      type: "math",
      question: "Какое число следующее: 1, 1 ,2 ,3, ?",
      options: ["4", "5", "7", "46"],
      correctAnswer: 1,
      points: 7,
      explanation: "Числа Фибоначи"
    },
    {
      id: 10,
      type: "logic",
      question: "А и Б сидели на трубе. А упала, Б пропала, кто остался на трубе?",
      options: ["А", "Б", "Автор", "Че за хрень..."],
      correctAnswer: 2,
      points: 7,
      explanation: "А почему бы и нет"
    },

    // Medium Level - 13 points

    {
      id: 11,
      type: "math",
      question: "Если 3x + 5 = 20, то x = ?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 1,
      points: 13,
      explanation: "Так уравнение решается"
    },
    {
      id: 12,
      type: "math",
      question: "Какое число не подходит: 2, 3, 5, 7, 9, 11?",
      options: ["2", "5", "9", "11"],
      correctAnswer: 2,
      points: 13,
      explanation: "Все числа кроме 9 являются простыми числами (делятся только на 1 и самих себя). Число 9 = 3×3, следовательно оно составное"
    },
    {
      id: 13,
      type: "math",
      question: "Продолжите последовательность: 1, 1, 2, 3, 5, 8, ?",
      options: ["10", "11", "12", "13"],
      correctAnswer: 3,
      points: 13,
      explanation: "Это ряд Фибоначчи, где каждое следующее число равно сумме двух предыдущих: 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13"
    },
    {
      id: 14,
      type: "math",
      question: "Если книга дороже ручки в 3 раза, а ручка стоит 15 рублей, сколько стоит книга?",
      options: ["30", "40", "45", "50"],
      correctAnswer: 2,
      points: 13,
      explanation: "Если книга дороже в 3 раза, то стоимость книги = 15 × 3 = 45 рублей"
    },
    {
      id: 15,
      type: "logic",
      question: "Какая фигура следующая в последовательности: ▲, ■, ●, ▲, ■, ?",
      options: ["▲", "■", "●", "Z"],
      correctAnswer: 2,
      points: 13,
      explanation: "Последовательность повторяется циклически каждые 3 элемента: треугольник, квадрат, круг. После ▲, ■ следует ●"
    },
    {
      id: 16,
      type: "math",
      question: "Сколько будет 25% от 80?",
      options: ["15", "20", "25", "30"],
      correctAnswer: 1,
      points: 13,
      explanation: " 25% = 25/100 = 0.25. Следовательно: 80 × 0.25 = 20. Или: 25% - это четверть, 80 ÷ 4 = 20"
    },
    {
      id: 17,
      type: "logic",
      question: "Анаграмма: КАРТА = ?",
      options: ["ТАРКА", "АКТРА", "РАКТА", "КРАТА"],
      correctAnswer: 0,
      points: 13,
      explanation: "Анаграмма - это слово, составленное из тех же букв. КАРТА содержит буквы К, А, Р, Т, А. Из вариантов только ТАРКА состоит из этих же букв"
    },
    {
      id: 18,
      type: "math",
      question: "Если 5 рабочих делают работу за 10 дней, сколько дней потребуется 10 рабочим?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 1,
      points: 13,
      explanation: "Обратная пропорциональность. Больше рабочих - меньше времени. 5 рабочих × 10 дней = 50 человеко-дней работы. 50 ÷ 10 рабочих = 5 дней"
    },
    {
      id: 19,
      type: "math",
      question: "Найдите недостающее число: 2, 6, 18, ?, 162",
      options: ["36", "48", "54", "72"],
      correctAnswer: 2,
      points: 13,
      explanation: "Каждое число умножается на 3"
    },
    {
      id: 20,
      type: "lang",
      question: "Какая буква будет 10-й в слове ЭЛЕКТРИЧЕСТВО?",
      options: ["Т", "Р", "И", "С"],
      correctAnswer: 3,
      points: 13,
      explanation: "Буквы считать над"
    },

    // Hard Level - 20 points

    {
      id: 21,
      type: "logic",
      question: "Если 1=5, 2=10, 3=15, 4=20, то 5=?",
      options: ["25", "1", "0", "100"],
      correctAnswer: 1,
      points: 20,
      explanation: "Это логическая ловушка. В начале сказано, что 1=5, следовательно, по логике симметрии 5=1"
    },
    {
      id: 22,
      type: "math",
      question: "Найдите закономерность: 2, 3, 5, 7, 11, 13, ?",
      options: ["15", "16", "17", "19"],
      correctAnswer: 2,
      points: 20,
      explanation: "Это последовательность простых чисел - чисел, которые делятся только на 1 и самих себя"
    },
    {
      id: 23,
      type: "logic",
      question: "Если вчера был понедельник, какой день будет завтра?",
      options: ["Вторник", "Среда", "Четверг", "Пятница"],
      correctAnswer: 1,
      points: 20,
      explanation: "Если вчера был понедельник, то сегодня вторник, а завтра будет среда"
    },
    {
      id: 24,
      type: "logic",
      question: "Сколько треугольников на рисунке?",
      options: ["4", "5", "6", "3"],
      correctAnswer: 1,
      points: 20,
      explanation: "На рисунке изображен большой треугольник, разделенный на 4 маленьких треугольника. Всего получается 4 маленьких треугольника + 1 большой = 5 треугольников",
      image: "assets/images/triangle.png"
    },
    {
      id: 25,
      type: "math",
      question: "Если A больше B на 20%, а B = 50, то A = ?",
      options: ["55", "60", "65", "70"],
      correctAnswer: 1,
      points: 20,
      explanation: "A = B + 20% от B = 50 + (50 × 0.20) = 50 + 10 = 60"
    },
    {
      id: 26,
      type: "math",
      question: "Продолжите: 1, 8, 27, 64, ?",
      options: ["81", "100", "125", "144"],
      correctAnswer: 2,
      points: 20,
      explanation: "Это последовательность кубов натуральных чисел"
    },
    {
      id: 27,
      type: "math",
      question: "Какое число не подходит: 16, 25, 36, 49, 63, 81?",
      options: ["25", "36", "63", "81"],
      correctAnswer: 2,
      points: 20,
      explanation: "Все числа кроме 63 являются полными квадратами: 16=4², 25=5², 36=6², 49=7², 81=9², а 63 не является квадратом целого числа"
    },
    {
      id: 28,
      type: "math",
      question: "Если 2 рабочие могут покрасить забор за 6 часов, сколько времени потребуется 3 рабочим?",
      options: ["3", "5", "4", "6"],
      correctAnswer: 2,
      points: 20,
      explanation: "Общее количество работы = 2 рабочих × 6 часов = 12 человеко-часов. Для 3 рабочих: 12 ÷ 3 = 4 часа"
    },
    {
      id: 29, // ToDO
      type: "math",
      question: "Матрица. Нужно будет доделать. Нажмите на смену языка, чтобы сменить вопрос без утраты результата",
      options: [],
      correctAnswer: 1,
      points: 20,
      explanation: ""
    },
    {
      id: 30,
      type: "logic",
      question: "Если слово 'КОТ' кодируется как '11 15 20', как кодируется слово 'СОБАКА'?",
      options: ["19 15 2 1 11 1", "19 16 2 1 11 1", "18 15 2 1 11 1", "19 15 3 1 11 1"],
      correctAnswer: 0,
      points: 20,
      explanation: "Каждая буква заменяется на её номер в алфавите"
    },

    // Very Hard - 27 points

    {
      id: 31,
      type: "math",
      question: "Найдите следующее число: 1, 2, 6, 24, 120, ?",
      options: ["600", "720", "840", "960"],
      correctAnswer: 1,
      points: 20,
      explanation: "Это последовательность факториалов: 1!=1, 2!=2, 3!=6, 4!=24, 5!=120, 6!=720. Факториал числа n - это произведение всех натуральных чисел от 1 до n"
    },
    {
      id: 32,
      type: "math",
      question: "Если 3 кошки ловят 3 мыши за 3 минуты, сколько кошек нужно, чтобы поймать 100 мышей за 100 минут?",
      options: ["1", "3", "33", "100"],
      correctAnswer: 1,
      points: 27,
      explanation: "3 кошки ловят 3 мыши за 3 минуты, значит 1 кошка ловит 1 мышь за 3 минуты. За 100 минут 1 кошка поймает 100÷3 ≈ 33 мыши. Для 100 мышей нужно 100÷33 ≈ 3 кошки"
    },
    {
      id: 33,
      type: "math", // ToDo
      question: "Пирамида. Нужно будет доделать. Нажмите на смену языка, чтобы сменить вопрос без утраты результата",
      options: [],
      correctAnswer: 1,
      points: 27,
      explanation: ""
    },
    {
      id: 34,
      type: "math",
      question: "Если f(x) = x² + 2x + 1, то f(-1) = ?",
      options: ["-1", "1", "0", "2"],
      correctAnswer: 2,
      points: 27,
      explanation: "Подставляем x = -1 в функцию: f(-1) = (-1)² + 2(-1) + 1 = 1 - 2 + 1 = 0. Заметим, что x² + 2x + 1 = (x+1)², поэтому f(-1) = (-1+1)² = 0² = 0"
    },
    {
      id: 35,
      type: "math",
      question: "Какая цифра будет 100-й в последовательности: 1234567891011121314...?",
      options: ["7", "6", "5", "4"],
      correctAnswer: 2,
      points: 27,
      explanation: "Считаем количество цифр: цифры 1-9 дают 9 цифр. Двузначные числа 10-54 дают 45×2=90 цифр. Всего 9+90=99 цифр до числа 54. 100-я цифра - это первая цифра следующего числа 55, то есть 5."
    },
    {
      id: 36,
      type: "logic/math",
      question: "Найдите закономерность: 1, 11, 21, 1211, 111221, ?",
      options: ["211122", "312211", "122111", "112211"],
      correctAnswer: 1,
      points: 27,
      explanation: " Это последовательность 'посмотри и скажи' (look-and-say). Каждое следующее число описывает предыдущее: 1 (одна единица) → 11, 11 (две единицы) → 21, 21 (одна двойка, одна единица) → 1211, 1211 (одна единица, одна двойка, две единицы) → 111221, 111221 (три единицы, две двойки, одна единица) → 312211"
    },
    {
      id: 37,
      type: "math",
      question: "Если log₂(x) = 3, то x = ?",
      options: ["6", "9", "8", "12"],
      correctAnswer: 2,
      points: 27,
      explanation: "Логарифм по основанию 2 от x равен 3 означает, что 2³ = x. Следовательно x = 2³ = 8"
    },
    {
      id: 38,
      type: "math",
      question: "В классе 30 учеников. 20 изучают английский, 15 - французский. Сколько изучают оба языка?",
      options: ["3", "5", "7", "10"],
      correctAnswer: 1,
      points: 27,
      explanation: "Используем формулу включений-исключений: |A ∪ B| = |A| + |B| - |A ∩ B|. Где |A ∪ B| = 30 (все ученики), |A| = 20 (английский), |B| = 15 (французский). Тогда 30 = 20 + 15 - |A ∩ B|, откуда |A ∩ B| = 35 - 30 = 5"
    },
    {
      id: 39,
      type: "math",
      question: "Найдите недостающее число в последовательности: 1, 3, 7, 12, 18, 26, 35, 45, 56, ?",
      options: ["67", "68", "69", "70"],
      correctAnswer: 2,
      points: 27,
      explanation: "Рассмотрим разности между соседними числами: 3-1=2, 7-3=4, 12-7=5, 18-12=6, 26-18=8, 35-26=9, 45-35=10, 56-45=11. Разности: 2, 4, 5, 6, 8, 9, 10, 11. Пропущена разность 7. Следующая разность должна быть 13 (пропускаем 12). 56+13=69. Ответ C) 69"
    },
    {
      id: 40,
      type: "math",
      question: "Если √(x + 5) = 3, то x = ?",
      options: ["4", "6", "8", "12"],
      correctAnswer: 0,
      points: 27,
      explanation: "Возведём обе части уравнения в квадрат: (√(x + 5))² = 3², откуда x + 5 = 9. Следовательно x = 9 - 5 = 4. Проверка: √(4 + 5) = √9 = 3 ✓"
    },


    // Brainrot Animals
    {
      id: 6,
      type: "brainrot",
      question: "Кто это?",
      options: ["Chimpanzini Bananini", "Frulli Frulla", "Glorbo Fruttodrillo", "La Vaca Saturno Saturnita"],
      correctAnswer: 2,
      points: 10,
      image: "assets/images/glorbo.png",
    },
    {
      id: 7,
      type: "brainrot",
      question: "Кто это?",
      options: ["", "Burbaloni Luliloli"],
      correctAnswer: 1,
      points: 20,
      image: "assets/images/burbaloni.png"
    }
  ],
  en: [
    // Mathematical sequences (hard - 15 points)
    {
      id: 1,
      type: "math",
      question: "What number continues the sequence: 1, 1, 2, 3, 5, 8, 13, ?",
      options: ["21", "18", "20", "24"],
      correctAnswer: 0,
      points: 15,
      image: null
    },
    {
      id: 2,
      type: "math",
      question: "If 3x + 7 = 22, what is x?",
      options: ["3", "5", "7", "4"],
      correctAnswer: 1,
      points: 12,
      image: null
    },
    
    // Logic problems (medium - 10 points)
    {
      id: 3,
      type: "logic",
      question: "If all A are B, but not all B are A, what is true?",
      options: [
        "All B are A",
        "Some B are A",
        "No B are A",
        "Cannot be determined"
      ],
      correctAnswer: 1,
      points: 10,
      image: null
    },
    {
      id: 4,
      type: "logic",
      question: "Mary had 3 apples. She gave half to her brother, then ate one. How many remain?",
      options: ["0", "0.5", "1", "1.5"],
      correctAnswer: 1,
      points: 10,
      image: null
    },
    
    // Spatial reasoning (hard - 15 points)
    {
      id: 5,
      type: "spatial",
      question: "What will this shape look like when rotated 90° clockwise?",
      options: ["Square", "Triangle", "Rectangle", "Circle"],
      correctAnswer: 2,
      points: 15,
      image: null
    },
    
    // Brainrot Animals
    {
      id: 6,
      type: "brainrot",
      question: "Who is it?",
      options: ["Chimpanzini Bananini", "Frulli Frulla", "Glorbo Fruttodrillo", "La Vaca Saturno Saturnita"],
      correctAnswer: 2,
      points: 10,
      image: "assets/images/glorbo.png"
    },
    {
      id: 7,
      type: "meme",
      question: "What meme is this?",
      options: ["Drake Pointing", "Distracted Boyfriend", "Expanding Brain", "Woman Yelling at Cat"],
      correctAnswer: 1,
      points: 5,
      image: null
    },
    
    // Advanced logic (very hard - 20 points)
    {
      id: 8,
      type: "advanced",
      question: "If A tells the truth only on Mondays and Wednesdays, and B tells the truth only on Tuesdays and Thursdays, and both said 'today I tell the truth', what day is it?",
      options: ["Monday", "Tuesday", "Wednesday", "Cannot be determined"],
      correctAnswer: 3,
      points: 20,
      image: null
    },
    
    // Visual puzzles (hard - 15 points)
    {
      id: 9,
      type: "visual",
      question: "How many squares do you see in this picture?",
      options: ["8", "12", "16", "20"],
      correctAnswer: 2,
      points: 15,
      image: null
    },
    
    // Creative questions (medium - 10 points)
    {
      id: 10,
      type: "creative",
      question: "If you were a color, which would you choose and why? (This tests creativity)",
      options: ["Blue - calmness", "Red - energy", "Green - growth", "Any other"],
      correctAnswer: 3,
      points: 10,
      image: null
    },
    
    // Additional questions
    {
      id: 11,
      type: "pattern",
      question: "What shape comes next: ▲, ■, ●, ▲, ■, ?",
      options: ["▲", "■", "●", "◆"],
      correctAnswer: 2,
      points: 8,
      image: null
    },
    {
      id: 12,
      type: "riddle",
      question: "What gets bigger when you take away from it?",
      options: ["Hole", "Shadow", "Nothing", "All of the above"],
      correctAnswer: 3,
      points: 8,
      image: null
    }
  ]
};

export default questions;