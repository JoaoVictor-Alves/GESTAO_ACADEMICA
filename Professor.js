import { PessoaBase } from "./PessoaBase.js";
import { TitulacaoEnum } from "./Dominio.js";

export class Professor extends PessoaBase {
#salario
#titulacao

    constructor(nome, cpf, email, salario, titulacao) {
        super(nome, cpf, email)

        this.salario = salario;
        this.titulacao = titulacao;
    }

    get salario () {
        return this.#salario;
    }

    get titulacao () {
        return this.#titulacao;
    }

    set salario (salarioProf) {
        if (isNaN(salarioProf)) {
            throw new Error ("ERR_TIPO_INVALIDO")
        }

        if (salarioProf < 1500) {
            throw new Error ("ERR_SALARIO_BASE")
        }
        this.#salario = salarioProf;
    }

    set titulacao (novoTitulacao) {
        if (!Object.values(TitulacaoEnum).includes(novoTitulacao)) {
            throw new Error ("ERR_FORA_DO_DOMINIO")
        }
        this.#titulacao = novoTitulacao;
    }
}