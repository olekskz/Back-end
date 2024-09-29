let generateButton = document.querySelector('.generate-button');
let textArea = document.getElementById('text-area');

generateButton.onclick = function() {
    // Отримуємо значення, введене в поле msg
    let chooseText = document.getElementById('msg').value;
    const randNum = Math.floor(Math.random() * 2); // Генерація випадкового числа

    if (chooseText === 'Jokes') {
        switch (randNum) {
            case 0:
                textArea.value = '- What do you call a pony with a cough? - A little horse.';
                break;
            case 1:
                textArea.value = '- What did one hat say to the other? - You wait here. I’ll go on ahead.';
                break;
            default:
                textArea.value = '- What do you call a magic dog? - A labracadabrador.';
                break;
        }
    }
    if (chooseText === 'Inspiration') {
        switch (randNum) {
            case 0:
                textArea.value = 'Do what you can, with what you have, where you are.';
                break;
            case 1:
                textArea.value = 'It`s never too late to be what you might`ve been.';
                break;
            default:
                textArea.value = 'If you can dream it, you can do it.';
                break;
        }
    }
    if (chooseText === 'Astrology') {
        switch (randNum) {
            case 0:
                textArea.value = 'Stars impel but they don’t compel';
                break;
            case 1:
                textArea.value = 'One’s astrological horoscope may be compared metaphorically to one’s genetic heritage; it cannot be changed, but we can do what we may with what we are given.';
                break;
            default:
                textArea.value = 'When we pass judgment, we hit a dead end. When we analyze something with an open mind, we can explore a concept into infinity.';
                break;
        }
    }
};


