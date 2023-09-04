const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const card = document.querySelector('.card');
const button = document.querySelector('.button');
const contador = document.querySelector('.counter');
const dev = document.querySelector('.credito');
const bird = document.querySelector('.bird');

let pontos = 0;
        const contadorLoop = setInterval(() => {
            pontos += 10;
            contador.innerHTML = `Pontuação: ${pontos}`
        } , 1800)

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 1000);

}

const loop = setInterval(()=> {

    const pipePosition = pipe.offsetLeft;
    const birdPosition = bird.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px' , '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition <= 100) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        bird.style.left = `${birdPosition}px`

        mario.classList.add('death');
        setTimeout(() => {
            mario.style.bottom = '-150px';
        }, 2000)

        mario.src = 'images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`

        clearInterval(loop); 
        clearInterval(contadorLoop)
        card.style.display = 'flex';
        card.style.animation = 'card-appears 1s ease'
        dev.style.display = 'block';
        dev.style.animation = 'dev-appears 1s linear'

        window.addEventListener('keydown', function(event) {
            if (event.key === ' ') {
                window.location.reload();
            }
            });
    }

}, 10);

button.addEventListener('click', ()=> {
    window.location.reload();
})

document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
      jump();
    }
  });