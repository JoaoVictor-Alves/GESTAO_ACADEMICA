import * as readline from 'node:readline/promises';
import  { stdin as input, stdout as output } from 'node:process';
import { GestorAcademico } from './GestorAcademico.js';

const rl = readline.createInterface({ input, output });
const gestor = new GestorAcademico();

let rodando = true;

async function sistemaRodando() {


    while(rodando) {
        console.log("1. Matricular Aluno\n2. Contratar Professor \n3. Buscar Cadastro (por CPF) \n4. Sair do Sistema" )
        const opcao = parseInt(await rl.question("Digite a opção desejada: "))
        
        if (opcao === 1) {
            let nome = await rl.question("Digite o nome do aluno: ");
            let cpf = await rl.question("Digite o CPF (11 dígitos): ");
            let email = await rl.question("Digite o e-mail: ");
            let idade = parseInt(await rl.question("Digite a idade: "));
            let curso = await rl.question("Digite o curso: ");

            gestor.cadastrarAluno(nome, cpf, email, idade, curso);
        }

        if (opcao === 2) {
            let nome = await rl.question("Digite o nome do professor: ");
            let cpf = await rl.question("Digite o CPF (11 dígitos): ");
            let email = await rl.question("Digite o e-mail: ");
            let salario = parseFloat(await rl.question("Digite o salário: "));
            let titulacao = await rl.question("Digite a titulação (ESPECIALISTA, MESTRE ou DOUTOR): ");

            gestor.cadastrarProfessor(nome, cpf, email, salario, titulacao);
        }

        if (opcao === 3) {
            let cpfBusca = await rl.question("Digite o CPF que deseja buscar (11 dígitos): ");
            gestor.buscarPorCpf(cpfBusca);
        }

        if (opcao === 4) {
            rodando = false;
            console.log("Programa encerrado com sucesso! ")
        }

    }
    rl.close();
}

sistemaRodando();