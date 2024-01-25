import { ILicenca } from "./ILicenca";

export class LicencaEmpresarial implements ILicenca {

    constructor(private licenca: number) {

    }

    recuperarNumeroLicenca(): number {
        return this.licenca;
    }

    calcularTarifa(): number {
        // calculo da tarifa para licença empresarial
        return 1000;
    }

}