import { ValidadorUtil } from "./ValidarUtil.js";

export class PessoaBase {
    #nome;
    #cpf;
    #email;

    constructor (nome, cpf, email){
        if(new.target === PessoaBase) {
            throw new Error("ERR_CLASSE_ABSTRATA");
        }
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
    }

    get nome () {
        return this.#nome;
    }

    get cpf () {
        return this.#cpf;
    }

    get email () {
        return this.#email;
    }

    set nome (nome) {
        if (!nome || nome.trim() === ""){
            throw new Error("ERR_NOME_VAZIO");
        }
        this.#nome = nome;
    }

    set cpf (cpf) {
        if (ValidadorUtil.validarCpf(cpf) == false) {
            throw new Error ("ERR_CPF_INVALIDO");
        }
        this.#cpf = cpf;
    }

    set email (email) {
        if (ValidadorUtil.validadarEmail(email) == false) {
            throw new Error ("ERR_EMAIL_INVALIDO");
        }
        this.#email = email;
    }
}
