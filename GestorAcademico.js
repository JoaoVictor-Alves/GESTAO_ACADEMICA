import { Aluno } from "./Aluno.js"
import { Professor } from "./Professor.js"
import { ValidadorUtil } from "./ValidarUtil.js";


export class GestorAcademico {
alunos = []
professores = []

    cadastrarAluno (nome, cpf, email, idade, curso) {
        try {
            const aluno = new Aluno (nome, cpf, email, idade, curso);

            console.log("Aluno Cadastrado com sucesso!!! ")

            this.alunos.push(aluno);
        } catch (erro) {
            console.log(`[ERRO INTERCEPTADO] A operação não pode ser concluída.`);
            this.traduzirCodigoDeErro(erro.message);


        } finally {
            console.log("Operação encerrada com segurança.")
        }
    }

    cadastrarProfessor (nome, cpf, email, salario, titulacao) {
        try {
            const professor = new Professor (nome, cpf, email, salario, titulacao)

            console.log("Professor Cadastrado com sucesso!!! ")

            this.professores.push(professor);

        } catch (erro) {
        console.log(`[ERRO INTERCEPTADO] A operação não pode ser concluída.`);
        this.traduzirCodigoDeErro(erro.message);

       } finally {
        
            console.log("Operação encerrada com segurança.")
        }
    }

    traduzirCodigoDeErro (erro) {
        switch (erro){

            case "ERR_CLASSE_ABSTRATA":
                console.log("AVISO: Não é possível cadastrar uma Pessoa genérica no sistema.");
                break;

            case "ERR_NOME_VAZIO":
                console.log("AVISO: O campo de nome é obrigatório e não pode ficar em branco.")
                break;

            case "ERR_CPF_INVALIDO":
                console.log("AVISO: O CPF informado é inválido. Digite exatamente 11 números sem formatação.")
                break;

            case "ERR_EMAIL_INVALIDO":
                console.log("AVISO: O endereço de e-mail deve conter um formato válido (ex: nome@dominio.com).")
                break;    

            case "ERR_IDADE_MINIMA":
                console.log("AVISO: O aluno deve ter no mínimo 14 anos para efetuar a matrícula no SENAI.")
                break;   

            case "ERR_SALARIO_BASE":
                console.log("AVISO: O salário registrado não pode ser inferior ao piso da categoria (R$ 1500,00).")
                break;   

            case "ERR_STATUS_INVALIDO":
                console.log("AVISO: O status da matrícula deve ser ATIVA, TRANCADA ou CANCELADA.")
                break;

            case "ERR_TIPO_INVALIDO":
                console.log("AVISO: Tipo de dado inválido, digite números!")
                break;

            case "ERR_FORA_DO_DOMINIO":
                console.log("AVISO: O professor precisa ser ESPECIALISTA, MESTRE ou DOUTOR!")
                break;

            default:
                console.log("AVISO SISTÊMICO: Falha no processamento dos dados. Tente novamente.");
                break;

        }
    }

buscarPorCpf(cpfBuscado) {
        let encontrado = "";

        for (let i = 0; i < this.alunos.length; i++) {
            if (this.alunos[i].cpf === cpfBuscado) {
                encontrado = this.alunos[i];
                console.log("\nALUNO ENCONTRADO");
                console.log(`Nome: ${encontrado.nome}`);
                console.log(`CPF: ${encontrado.cpf}`);
                console.log(`E-mail: ${encontrado.email}`);
                console.log(`Idade: ${encontrado.idade}`);
                console.log(`Curso: ${encontrado.curso}`);
                console.log(`Status: ${encontrado.status}`);
                return;
            }
        }

        for (let i = 0; i < this.professores.length; i++) {
            if (this.professores[i].cpf === cpfBuscado) {
                encontrado = this.professores[i];
                console.log("\nPROFESSOR ENCONTRADO");
                console.log(`Nome: ${encontrado.nome}`);
                console.log(`CPF: ${encontrado.cpf}`);
                console.log(`E-mail: ${encontrado.email}`);
                console.log(`Salário: R$ ${encontrado.salario}`);
                console.log(`Titulação: ${encontrado.titulacao}`);
                return;
            }
        }

        console.log("\n[AVISO]: Nenhum cadastro encontrado com o CPF informado.");
    }
}