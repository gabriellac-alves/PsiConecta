// Cadastro de voluntários
document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    console.log("Sistema PsiConecta: Iniciando validação...");
    console.log("Dados capturados - Nome: " + nome + " | Email: " + email);

    const form = document.getElementById('formCadastro');
    const msg = document.getElementById('mensagemSucesso');

    form.style.opacity = '0';

    setTimeout(() => {
        form.classList.add('hidden');
        msg.classList.remove('hidden');
    }, 300);
});


// Alto contraste
const btnAcessibilidade = document.getElementById('btnAcessibilidade');

btnAcessibilidade.addEventListener('click', function() {
    document.body.classList.toggle('alto-contraste');
});


// Solicitação de acolhimento
const modalAjuda = document.getElementById('modalAjuda');
const btnAbrirModal = document.getElementById('btnAbrirModalAjuda');
const btnFecharModal = document.getElementById('btnFecharModal');
const btnEnviarAjuda = document.getElementById('btnEnviarAjuda');

btnAbrirModal.addEventListener('click', function() {
    modalAjuda.classList.remove('hidden');
});

btnFecharModal.addEventListener('click', function() {
    modalAjuda.classList.add('hidden');
});

// Fecha o modal ao clicar fora
window.addEventListener('click', function(event) {
    if (event.target == modalAjuda) {
        modalAjuda.classList.add('hidden');
    }
});

btnEnviarAjuda.addEventListener('click', function() {
    alert("Seu pedido de acolhimento foi enviado de forma segura. Um voluntário entrará em contato em breve!");
    modalAjuda.classList.add('hidden');
});


// Agendamento
const botoesAgendar = document.querySelectorAll('.btn-agendar');

botoesAgendar.forEach(botao => {
    botao.addEventListener('click', function() {
        alert("Você será redirecionado para a sala virtual do psicólogo no dia escolhido.");
    });
});