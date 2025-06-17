// Manter suas animações e estrutura Lottie como antes!
function loadLottieAnimations() {
    lottie.loadAnimation({
        container: document.getElementById('Sowrov11'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://botfather.cloud/Assets/Sticker/happy_duck.json'
    });
    lottie.loadAnimation({
        container: document.getElementById('Sowrov12'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://botfather.cloud/Assets/Sticker/thinking_duck.json'
    });
    lottie.loadAnimation({
        container: document.getElementById('Sowrov13'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://botfather.cloud/Assets/Sticker/love_duck.json'
    });
    lottie.loadAnimation({
        container: document.getElementById('Sowrov14'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://botfather.cloud/Assets/Sticker/pleading_face.json'
    });
    lottie.loadAnimation({
        container: document.getElementById('Sowrov15'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://botfather.cloud/Assets/Sticker/sad_duck.json'
    });
    lottie.loadAnimation({
        container: document.getElementById('Sowrov16'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://botfather.cloud/Assets/Sticker/duck_kiss.json'
    });
    lottie.loadAnimation({
        container: document.getElementById('Sowrov17'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://botfather.cloud/Assets/Sticker/loud_cry_duck.json'
    });
    lottie.loadAnimation({
        container: document.getElementById('Sowrov1'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://botfather.cloud/Assets/Sticker/loud_cry_duck.json'
    });
    lottie.loadAnimation({
        container: document.getElementById('Sowrov5'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://botfather.cloud/Assets/Sticker/jumping_together_with_love.json'
    });
}

const proposalOrder = [
    "Msg1", "Quiz1", "Msg2", "Choice1", "Msg3", "Input1", "Msg4", "proposal-1"
];

let currentProposalIndex = 0;
const proposalScreens = document.querySelectorAll('.proposal-screen');

function showProposal(idToShow) {
    proposalScreens.forEach(screen => screen.style.display = 'none');
    document.getElementById(idToShow).style.display = 'block';

    // Confetti e animação no SIM
    if (idToShow === 'proposal-yes') {
        document.body.style.backgroundColor = '#ffecf0';
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.7 } });
    }
}

// Avançar telas normalmente
function nextProposal() {
    proposalScreens.forEach(screen => screen.style.display = 'none');
    currentProposalIndex++;
    if (currentProposalIndex < proposalOrder.length) {
        document.getElementById(proposalOrder[currentProposalIndex]).style.display = 'block';
    } else {
        showProposal('proposal-1');
    }
}

// QUIZ interação
function quizAnswer(isCorrect, el) {
    const feedback = document.getElementById('quiz-feedback');
    feedback.textContent = isCorrect
        ? "Aee, você lembra! 😍"
        : "Quase… mas aposto que nunca vai esquecer agora! 😂";
    setTimeout(nextProposal, 1800);
}

// ESCOLHA boba
function choiceAnswer(el) {
    const feedback = document.getElementById('choice-feedback');
    feedback.textContent = "Errado! Os dois são! 😝";
    setTimeout(nextProposal, 1800);
}

// INPUT Recadinho
function saveNote() {
    const note = document.getElementById('love-note').value;
    const feedback = document.getElementById('note-feedback');
    if (!note.trim()) {
        feedback.textContent = "Não vale pular! Escreve alguma coisinha 🥺";
        return;
    }
    feedback.textContent = "Agora ficou registrado no meu coração! 💌";
    setTimeout(nextProposal, 1800);
}

// Botão "NÃO" fujão
function moveRandomEl(element) {
    element.style.position = "absolute";
    element.style.top = Math.floor(Math.random() * 70 + 5) + "%";
    element.style.left = Math.floor(Math.random() * 70 + 5) + "%";
}

document.addEventListener('DOMContentLoaded', () => {
    proposalScreens.forEach(screen => screen.style.display = 'none');
    document.getElementById(proposalOrder[0]).style.display = 'block';
    loadLottieAnimations();

    const moveRandomBtn = document.getElementById('move-random');
    if (moveRandomBtn) {
        moveRandomBtn.addEventListener('click', (e) => moveRandomEl(e.target));
        moveRandomBtn.addEventListener('mouseenter', (e) => moveRandomEl(e.target));
    }
});

window.showProposal = showProposal;
window.nextProposal = nextProposal;
window.quizAnswer = quizAnswer;
window.choiceAnswer = choiceAnswer;
window.saveNote = saveNote;
