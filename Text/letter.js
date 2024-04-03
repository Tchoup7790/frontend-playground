const txt = document.getElementById('txt');

const texte = txt.innerText

txt.innerText = null

texte.split('').forEach( (letter) => {
    const spanLetter = document.createElement('p')
    spanLetter.className = 'letter'
    spanLetter.append(letter)
    txt.appendChild(spanLetter)
});

const letters = document.querySelectorAll('.letter');

for(let i = 0; i != letters.length; i++){
    console.log(letters[i])
    letters[i].style.transform = 'translate('+-i+'0px)';
    letters[i].style.zIndex = -wi;
}
