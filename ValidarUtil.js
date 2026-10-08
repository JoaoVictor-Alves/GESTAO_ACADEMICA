export class ValidadorUtil {

    static validarCpf(cpf) {

        if (typeof cpf !== 'string') {
            return false;
        }

        if (cpf.length !== 11) {
            return false;
        }

        if (isNaN(cpf)) {
            return false;
        }

        return true;
    }

    static validadarEmail (email) {

        if (email.includes("@")){
            return true;
        }

        return false;
    }
}