import { ILicenca } from "./ILicenca";

export class LicencaEmpresarial implements ILicenca {

    constructor(private licenca: number) {

    }

    recuperarNumeroLicenca(): string {
        return String(this.licenca);
    }

    calcularTarifa(): number {
        // calculo da tarifa para licença empresarial
        return 1000;
    }

}