let form = document.getElementById("form")
let input = document.getElementById('timer')
let btn = document.getElementById('timerBtn')
let small = document.getElementById('small')
let txt = document.getElementById('timerTexte')
let audio = new Audio("/assets/end.mp3")
let video = document.getElementById('video_background')


form.addEventListener('input' , () => {
    if(input.checkValidity()){
        btn.disabled = false
    }else{
        btn.disabled = true
    }
})

input.addEventListener('mouseenter', () => {
    small.style.display = 'block';
});

input.addEventListener('mouseleave', () => {
    small.style.display = 'none';
})

btn.addEventListener('click', (event) => {
    startTimer(input.value)
});

document.getElementById('conf').addEventListener('click', (event) => {
    video.play();
    audio.play();
});

function startTimer(time) {
    let tabTime = time.split(':')
    
    tabTime[0] = parseInt(tabTime[0])
    tabTime[1] = parseInt(tabTime[1])
    tabTime[2] = parseInt(tabTime[2])
    
    let nbSec = tabTime[2] + tabTime[1]*60 + tabTime[0]*60*60

    for (let i = 0; i <= nbSec; i++){
        setTimeout(() => {
            if(tabTime[0] == 0 && tabTime[1] == 0 && tabTime[2] == 0){
                document.querySelector('body').style.background = 'blue';
                document.querySelector('body').style.color = 'white';
                document.querySelector('a').style.color = 'white';
                document.querySelector('#top').innerHTML = 'FIN DU TIMER';
                video.style.display = 'block';
                document.querySelector('#conf').style.display = 'block';
                form.style.display = 'none';
                audio.play()
                video.play();
            }else{
                console.log(tabTime)
                if(tabTime[1] == 0 && tabTime[2] == 0){
                    tabTime[0] -= 1
                    tabTime[1] = 59
                }else if(tabTime[2]==0){
                    tabTime[1] -= 1
                    tabTime[2] = 59
                }else{
                    tabTime[2] -= 1
                }
            }
            txt.innerHTML = tabTime[0] +":"+ tabTime[1] +":"+ tabTime[2]
        }, 1000 * i);
    }    
}

