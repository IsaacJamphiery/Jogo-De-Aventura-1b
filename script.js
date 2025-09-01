const avanca = document.querySelectorAll(',btn-proximo');

avanca.forEach(button =>{
    button.addEventListener('click', function(){
        const atual = document.querySeelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementByld(proximoPasso).classList.add('ativo');
    })
})