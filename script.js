const generateButton = document.querySelector('.generate-button');
const textArea = document.getElementById('text-area');
const chooseText = document.getElementsByClassName('msg');

const randNum = Math.floor(Math.random() *2)
/*
generateButton.onclick = function() {
    switch (chooseText) {
        case 'Jokes':
            if (randNum === 0) {
                textArea.innerHTML = '- What do you call a pony with a cough ? - A little horse.'      
            } else if (randNum === 1) {
                textArea.innerHTML = '- What did onee that say to the other ? - You wait her. I`ll go on a head.'
            } else {
                textArea.innerHTML = '- What do you call a magic dog ? - A labracadabrador.'
            }
        break;
    }

}

*/

generateButton.onclick = function() {
    if (chooseText === 'Jokes') {
        textArea.style.background = 'blue';   
    }
}


