# 🍄 MARIO JUMPER - CANNON PRECISION

Uma experiência de jogo **Endless Runner** inspirada no universo Super Mario, construída com **HTML5, CSS3 e JavaScript puro**. O projeto foca em precisão de saltos, gerenciamento de estados de animação e lógica de colisão dinâmica baseada em coordenadas de tela.

---

## 📺 DEMONSTRAÇÃO DO PROJETO

CONFIRA ABAIXO O VÍDEO DE 40 SEGUNDOS DEMONSTRANDO A PROGRESSÃO DE DIFICULDADE, OS ALERTAS DE VELOCIDADE E A ATIVAÇÃO DOS MÚLTIPLOS OBSTÁCULOS:

<div align="center">
  <video src="https://github.com/user-attachments/assets/04161163-713c-4632-ad38-db4f0c62d060" controls width="100%"></video>
  
  <p><i>O VÍDEO DESTACA A TRANSIÇÃO ENTRE AS FASES E O SISTEMA DE PONTUAÇÃO DINÂMICA.</i></p>
</div>

---

## 🚀 FUNCIONALIDADES DEMONSTRADAS

O projeto implementa uma curva de aprendizado que exige cada vez mais reflexo do jogador:

* **SISTEMA DE PONTUAÇÃO:** Cada obstáculo superado adiciona 1600 pontos ao placar.
* **DIFICULDADE PROGRESSIVA:** A velocidade da animação aumenta em marcos estratégicos (300, 600, 900 pontos).
* **MÚLTIPLOS PROJÉTEIS:** Ao atingir 1200 e 1600 pontos, canhões adicionais são ativados.
* **FEEDBACK AO USUÁRIO:** Alertas visuais na tela indicam mudanças de velocidade e novos desafios.

---

## 🛠️ DETALHES TÉCNICOS

A lógica central utiliza um `gameLoop` que verifica a cada 10ms a posição dos elementos no DOM:

* **DETECÇÃO DE COLISÃO:** Calcula a posição horizontal da bola de fogo em relação ao Mario (altura < 80px).
* **ANIMAÇÕES CSS:** O movimento é controlado por `@keyframes`, garantindo performance nativa no navegador.
* **RESPONSIVIDADE:** O script inclui uma trava de segurança para telas menores que 1300px.

---

## ⚙️ COMO EXECUTAR

1.  **CLONE O REPOSITÓRIO:**
    ```bash
    git clone [https://github.com/seu-usuario/Mario-Jumper---Cannon-Precision.git]
    ```
2.  **ABRA O ARQUIVO:** Localize o `index.html` e abra em qualquer navegador moderno.
3.  **COMANDOS:** Pressione **ESPAÇO** ou a **SETA PARA CIMA** para pular.

---

## 📄 CRÉDITOS E LICENÇA

* **DESENVOLVIMENTO:** Henrique Castro
* **ASSETS:** Imagens inspiradas na franquia Super Mario (Nintendo).
* **LICENÇA:** Projeto desenvolvido para fins educacionais e portfólio.
