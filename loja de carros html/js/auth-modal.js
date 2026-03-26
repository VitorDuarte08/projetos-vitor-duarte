document.addEventListener('DOMContentLoaded', function() {
    const btnAuth = document.getElementById('abrir-modal-auth');
    const modalBg = document.getElementById('modal-auth-bg');
    const fecharModal = document.getElementById('fechar-modal-auth');
    const formCriar = document.getElementById('form-criar-conta');
    const formEntrar = document.getElementById('form-entrar');
    const irEntrar = document.getElementById('ir-entrar');
    const irCriarConta = document.getElementById('ir-criar-conta');

    if (btnAuth && modalBg && fecharModal && formCriar && formEntrar && irEntrar && irCriarConta) {
        btnAuth.onclick = () => modalBg.classList.add('ativo');
        fecharModal.onclick = () => modalBg.classList.remove('ativo');
        modalBg.onclick = e => { if(e.target === modalBg) modalBg.classList.remove('ativo'); };
        irEntrar.onclick = e => { e.preventDefault(); formCriar.style.display = 'none'; formEntrar.style.display = 'block'; };
        irCriarConta.onclick = e => { e.preventDefault(); formEntrar.style.display = 'none'; formCriar.style.display = 'block'; };
    }
});