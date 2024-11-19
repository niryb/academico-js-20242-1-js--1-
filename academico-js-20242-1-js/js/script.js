const usuarios = [
    { nome: 'Ana', idade: 25, cpf: '123.456.789-00' },
    { nome: 'Carla', idade: 30, cpf: '987.654.321-00' },
    { nome: 'Trísia', idade: 28, cpf: '111.222.333-44' }
];

// Referência ao elemento da lista no HTML
const listaUsuariosElement = document.querySelector('#listaUsuarios');

// Renderiza a lista inicial
usuarios.forEach(usuario => inserirUsuarioNaLista(usuario));

// Função para inserir um novo usuário a partir dos inputs
function inserirUsuario() {
    const nome = document.querySelector('#nome').value.trim();
    const idade = document.querySelector('#idade').value.trim();
    const cpf = document.querySelector('#cpf').value.trim();

    if (!nome || !idade || !cpf) {
        alert('Preencha todos os campos!');
        return;
    }

    const novoUsuario = { nome, idade: Number(idade), cpf };
    usuarios.push(novoUsuario);
    inserirUsuarioNaLista(novoUsuario);

    // Limpa os campos após a inserção
    document.querySelector('#nome').value = '';
    document.querySelector('#idade').value = '';
    document.querySelector('#cpf').value = '';
}

// Função para adicionar um usuário à lista visual
function inserirUsuarioNaLista(usuario) {
    const liElement = document.createElement('li');

    const spanElement = document.createElement('span');
    spanElement.innerHTML = `
        <strong>Nome:</strong> ${usuario.nome}<br>
        <strong>Idade:</strong> ${usuario.idade}<br>
        <strong>CPF:</strong> ${usuario.cpf}
    `;

    // Botão para remover o usuário
    const botaoRemoverElement = document.createElement('button');
    botaoRemoverElement.textContent = 'Remover';
    botaoRemoverElement.style.marginLeft = '10px';
    botaoRemoverElement.addEventListener('click', () => {
        liElement.remove();
        const index = usuarios.findIndex(u => u.cpf === usuario.cpf);
        if (index > -1) {
            usuarios.splice(index, 1);
        }
    });

    liElement.appendChild(spanElement);
    liElement.appendChild(botaoRemoverElement);
    listaUsuariosElement.appendChild(liElement);
}
