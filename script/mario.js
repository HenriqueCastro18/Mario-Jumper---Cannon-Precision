const mario = document.getElementById('mario-player');
const fireball = document.getElementById('fireball');
const fireball2 = document.getElementById('fireball2');
const fireball3 = document.getElementById('fireball3'); 
const cannon = document.getElementById('cannon');
const mainLogo = document.querySelector('.game-logo');
const startMenu = document.getElementById('start-menu');
const gameOverScreen = document.getElementById('game-over-screen');
const scoreDisplay = document.getElementById('score-value');
const scoreBoard = document.getElementById('score-board');

let score = 0;
let canScore1 = true; 
let canScore2 = true; 
let canScore3 = true; 
let gameLoop;
let currentGameSpeed = 2.6; 

function checkResponsiveness() {
    if (window.innerWidth < 1300) {
        alert("Ops! Percebi que sua tela tem menos de 1300px de largura. Peço desculpas, mas o jogo ficará bem difícil de jogar, pois ainda não resolvi o problema de responsividade. Recomendo usar uma tela maior para uma melhor experiência!");
    }
}
checkResponsiveness();

function startGame() {
    startMenu.classList.add('hidden');
    mainLogo.classList.add('hidden');
    [mario, fireball, cannon, scoreBoard].forEach(el => el.classList.remove('hidden'));
    
    resetAndStartAnimations();
    
    document.addEventListener('keydown', handleJump);
    runGameLoop();
}

function resetAndStartAnimations() {
    const balls = [fireball, fireball2, fireball3];
    
    balls.forEach(f => {
        f.classList.remove('fireball-animation');
        f.classList.add('hidden'); 
        f.style.display = 'none';
    });

    setTimeout(() => {
        // BOLA 1
        fireball.classList.remove('hidden');
        fireball.style.display = 'block';
        fireball.style.animationDuration = `${currentGameSpeed}s`;
        fireball.style.animationDelay = '0s';
        fireball.classList.add('fireball-animation');

        if (score >= 1200) {
            fireball2.classList.remove('hidden');
            fireball2.style.display = 'block';
            fireball2.style.animationDuration = `${currentGameSpeed}s`;
            fireball2.style.animationDelay = '0.75s'; 
            fireball2.classList.add('fireball-animation');
        }

        if (score >= 1600) {
            fireball3.classList.remove('hidden');
            fireball3.style.display = 'block';
            fireball3.style.animationDuration = `${currentGameSpeed}s`;
            fireball3.style.animationDelay = '1.4s'; 
            fireball3.classList.add('fireball-animation');
        }
    }, 300);
}

function handleJump(event) {
    if ((event.code === 'Space' || event.code === 'ArrowUp') && !mario.classList.contains('jump-animation')) {
        mario.classList.add('jump-animation');
        setTimeout(() => mario.classList.remove('jump-animation'), 650);
    }
}

function updateScore() {
    score += 100; 
    scoreDisplay.textContent = score;
    showFloatingPoints(100);

    let needsReset = false;

    if (score === 300) { currentGameSpeed = 2.4; showSpeedAlert("VELOCIDADE AUMENTOU!"); needsReset = true; }
    if (score === 600) { currentGameSpeed = 2.2; showSpeedAlert("MAIS RÁPIDO!"); needsReset = true; }
    if (score === 900) { currentGameSpeed = 1.9; showSpeedAlert("VELOCIDADE MÁXIMA!"); needsReset = true; }
    
    if (score === 1200) { 
        showSpeedAlert("CANHÃO DUPLO!"); 
        needsReset = true; 
    }
    
    if (score === 1600) { 
        currentGameSpeed = 2.2; 
        showSpeedAlert("DIFICULDADE MÁXIMA!"); 
        needsReset = true; 
    }

    if (needsReset) {
        resetAndStartAnimations();
    }
}

function runGameLoop() {
    gameLoop = setInterval(() => {
        const marioBottom = +window.getComputedStyle(mario).bottom.replace('px', '');
        
        checkCollision(fireball, 1, marioBottom);
        if (score >= 1200) checkCollision(fireball2, 2, marioBottom);
        if (score >= 1600) checkCollision(fireball3, 3, marioBottom);
    }, 10);
}

function checkCollision(ball, id, marioBottom) {
    if (ball.classList.contains('hidden') || ball.style.display === 'none') return;

    const pos = ball.offsetLeft;

    if (pos < 280 && pos > 120 && marioBottom < 80) {
        endGame(ball);
    }
    
    if (pos < 120) {
        if ((id === 1 && canScore1) || (id === 2 && canScore2) || (id === 3 && canScore3)) {
            toggleScore(id, false);
            updateScore();
        }
    }
    
    if (pos > 450) toggleScore(id, true);
}

function toggleScore(id, val) {
    if (id === 1) canScore1 = val;
    if (id === 2) canScore2 = val;
    if (id === 3) canScore3 = val;
}

function endGame(killer) {
    clearInterval(gameLoop);
    const mBottom = +window.getComputedStyle(mario).bottom.replace('px', '');
    mario.style.animation = 'none';
    mario.style.bottom = `${mBottom}px`;

    [fireball, fireball2, fireball3].forEach(f => {
        const currentPos = f.offsetLeft;
        f.style.animation = 'none';
        f.style.left = `${currentPos}px`;
    });

    gameOverScreen.classList.remove('hidden');
    document.removeEventListener('keydown', handleJump);
}

function showSpeedAlert(msg) {
    const alertBox = document.createElement('div');
    alertBox.className = 'speed-alert';
    alertBox.textContent = msg;
    document.body.appendChild(alertBox);
    setTimeout(() => alertBox.remove(), 2500);
}

function showFloatingPoints(valor) {
    const points = document.createElement('div');
    points.classList.add('floating-points');
    points.textContent = `+${valor}`;

    const marioPos = mario.getBoundingClientRect();
    points.style.left = `${marioPos.left + 20}px`;
    points.style.bottom = `180px`; 
    
    document.body.appendChild(points);

    setTimeout(() => points.remove(), 1000);
}