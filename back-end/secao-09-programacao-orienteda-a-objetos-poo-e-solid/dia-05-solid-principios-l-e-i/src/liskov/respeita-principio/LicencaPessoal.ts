import { ILicenca } from "./ILicenca";

export class LicencaPessoal implements ILicenca {

    constructor(private licenca: string) {

    }

    recuperarNumeroLicenca(): string  {
        return this.licenca;
    }

    calcularTarifa(): number {
        // calculo da tarifa para licença pessoal
        return 10;
    }

}