class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }
    
    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }
    
    trabalhar() {
        return `${this.nome} está trabalhando.`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }
    
    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }
    
    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

function exibirErro(mensagem) {
    document.getElementById('erro').innerText = mensagem;
}

function criarFuncionarios() {
    try {
        const funcionarios = [];

        // Criando cinco funcionários
        funcionarios.push(new Gerente('João Silva', 45, 'Gerente', 'Financeiro'));
        funcionarios.push(new Gerente('Maria Oliveira', 38, 'Gerente', 'RH'));
        funcionarios.push(new Desenvolvedor('Carlos Pereira', 30, 'Desenvolvedor', 'JavaScript'));
        funcionarios.push(new Desenvolvedor('Ana Souza', 27, 'Desenvolvedor', 'Python'));
        funcionarios.push(new Funcionario('Pedro Lima', 50, 'Assistente Administrativo'));

        // Exibindo as informações dos funcionários
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = ''; // Limpa o conteúdo anterior

        funcionarios.forEach(funcionario => {
            resultadoDiv.innerHTML += `
                ${funcionario.seApresentar()} <br>
                ${funcionario.trabalhar()} <br>
                ${funcionario instanceof Gerente ? funcionario.gerenciar() : ''}
                ${funcionario instanceof Desenvolvedor ? funcionario.programar() : ''}
                <br><hr><br>
            `;
        });

    } catch (error) {
        exibirErro(error.message);
    }
}

// Chama a função para criar e exibir os funcionários ao carregar a página
window.onload = criarFuncionarios;
