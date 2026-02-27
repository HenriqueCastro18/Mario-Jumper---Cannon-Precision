🍄 Mario Jumper - Cannon Precision
Uma experiência de jogo Endless Runner inspirada no universo Super Mario, construída com HTML5, CSS3 e JavaScript puro. O projeto foca em precisão de saltos, gerenciamento de estados de animação e lógica de colisão dinâmica baseada em coordenadas de tela.

🎮 Demonstração do Projeto
Confira abaixo o vídeo de 40 segundos demonstrando a progressão de dificuldade, os alertas de velocidade e a ativação dos múltiplos obstáculos:

<div align="center">
<video src="./image/Mario Jumper.mp4" controls width="100%"></video>

O vídeo destaca a transição entre as fases e o sistema de pontuação dinâmica.

</div>

🚀 Funcionalidades Demonstradas
O projeto implementa uma curva de aprendizado que exige cada vez mais reflexo do jogador:

Sistema de Pontuação: Cada obstáculo superado adiciona 1600 pontos ao placar.

Dificuldade Progressiva: A velocidade da animação (currentGameSpeed) aumenta em marcos estratégicos (300, 600, 900 pontos).

Múltiplos Projéteis: Ao atingir 1200 e 1600 pontos, canhões adicionais são ativados, disparando fireball2 e fireball3 com delays específicos.

Feedback ao Usuário: Alertas visuais na tela indicam quando a velocidade aumenta ou quando novos canhões entram em jogo.

📸 Capturas de Tela (Interface)
Interface de Jogo e HUD
[COLOCAR IMAGEM: Print do jogo mostrando o Score Board e o cenário]

Estado de Game Over
[COLOCAR IMAGEM: Print da tela final com a mensagem de derrota e botão de reiniciar]

🛠️ Detalhes Técnicos
A lógica central utiliza um gameLoop que verifica a cada 10ms a posição dos elementos no DOM:

Detecção de Colisão: Calcula se a posição horizontal da bola de fogo sobrepõe o Mario enquanto ele está abaixo de uma altura específica (80px).

Animações CSS: O movimento é controlado por @keyframes no CSS, permitindo um desempenho fluido diretamente no navegador.

Responsividade: O script inclui uma verificação inicial para garantir que o jogador tenha uma área de visualização adequada (mínimo de 1300px).

⚙️ Como Executar
Clone o repositório:

Bash
git clone https://github.com/seu-usuario/Mario-Jumper---Cannon-Precision.git
Abra o arquivo index8.html em seu navegador de preferência.

Pressione Espaço ou a Seta para Cima para pular.

📄 Créditos e Licença
Desenvolvimento: Henrique Castro

Assets: Imagens inspiradas na franquia Super Mario (Nintendo).

Licença: Projeto desenvolvido para fins educacionais e portfólio.