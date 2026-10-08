import { PessoaBase } from "./PessoaBase.js";
import { StatusMatriculaEnum } from "./Dominio.js";

export class Aluno extends PessoaBase {
#idade
#curso
#status

    constructor(nome, cpf, email, idade, curso) {
        super(nome, cpf, email)

        this.idade = idade;
        this.#curso = curso;
        this.#status = StatusMatriculaEnum.ATIVA;
    }

    get idade () {
        return this.#idade;
    }

    get curso () {
        return this.#curso;
    }

    get status () {
        return this.#status;
    }

    set idade (idade) {
        if (isNaN(idade)) {
            throw new Error ("ERR_TIPO_INVALIDO")
        }

        if (idade < 14 || idade > 120) {
            throw new Error ("ERR_IDADE_MINIMA")
        }
        this.#idade = idade;
    }

    set status (novoStatus) {
        if (!Object.values(StatusMatriculaEnum).includes(novoStatus)){
            throw new Error ("ERR_STATUS_INVALIDO")
        }
        this.#status = novoStatus;
    }
}