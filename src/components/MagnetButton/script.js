const mousePosText = document.getElementById('mousePos');
const buttonZone = document.querySelectorAll('.buttonZone__button');
const button = document.querySelectorAll('.buttonZone__button__inside');
/* -> Création de variable pour récuperer les élements du bouton */


let x = -1; 
let y = -1;
/* -> Variable pour faire un mouse tracker */

window.addEventListener('mousemove', (event) => {
    x = event.clientX;
    y = event.clientY;
    mousePosText.innerText = 'Mouse Position :'+ x +' , '+ y;
});
/* EventListener pour changer le texte en position de la souris */

console.log(button[0].getBoundingClientRect())

for (let btn = 0; btn != buttonZone.length; btn++){
    if(typeof buttonZone[btn].addEventListener === 'function'){
        buttonZone[btn].addEventListener('mouseenter', () =>{ 
            buttonZone[btn].addEventListener('mousemove', (event) => {
                const btnRect = button[btn].getBoundingClientRect()
                const h = btnRect.width / 2
                
                const x = event.clientX - btnRect.left - h;
                const y = event.clientY - btnRect.top - h;

                /* let r = Math.sqrt(x*x+y*y)
                r = (1 - (r / h)) * r

                const angle = Math.atan2(y, x)

                const moveX = Math.round(Math.cos(angle) * r * 100) / 100
                const moveY = Math.round(Math.sin(angle) * r * 100) / 100 */
                
                button[btn].style.transform = 'translate('+x+'px,'+ y+'px)';

                // console.log(button[btn].style.transform)
            });
        });
        buttonZone[btn].addEventListener('mouseleave', () =>{
            button[btn].style.transform = 'translate(0px, 0px)';
        });
    };
};
/* -> Boucle qui, pour tout les élements de la class .buttonZone__button, 
mets un EventListener pour bouger l'élement vers la souris et le remettre à son emplacement initial une fois la souris trop loin */
