function exibirDetalhes(filme) {
    const detalhes = document.getElementById('detalhes');
    const titulo = document.getElementById('titulo-filme');
    const descricao = document.getElementById('descricao-filme');

    switch (filme) {
        case 'filme1':
            titulo.innerText = 'Filme 1';
            descricao.innerText = 'Descrição do Filme 1.';
            break;
        case 'filme2':
            titulo.innerText = 'Filme 2';
            descricao.innerText = 'Descrição do Filme 2.';
            break;
        case 'filme3':
            titulo.innerText = 'Filme 3';
            descricao.innerText = 'Descrição do Filme 3.';
            break;
    }

    detalhes.style.display = 'block';
}

function fecharDetalhes() {
    const detalhes = document.getElementById('detalhes');
    detalhes.style.display = 'none';
}
