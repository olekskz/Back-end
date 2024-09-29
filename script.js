let generateButton = document.querySelector('.generate-button');
let textArea = document.getElementById('text-area');

generateButton.onclick = function() {
    let chooseText = document.getElementsByClassName('msg')[0].innerText;
    const randNum = Math.floor(Math.random() * 2);

    if (chooseText === 'Jokes') {
        switch (randNum) {
            case 0:
                textArea.innerHTML = '- What do you call a pony with a cough? - A little horse.';
                break;
            case 1:
                textArea.innerHTML = '- What did one hat say to the other? - You wait here. I’ll go on ahead.';
                break;
            default:
                textArea.innerHTML = '- What do you call a magic dog? - A labracadabrador.';
                break;
        }
    }
};




