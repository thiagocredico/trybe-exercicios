import { ILicenca } from './contra-principio/ILicenca';
import { LicencaEmpresarial } from './contra-principio/LicencaEmpresarial';
import { LicencaPessoal } from './contra-principio/LicencaPessoal';

export class Program {
    private _clientes: ILicenca[];

    constructor(clientes: ILicenca[]) {
        this._clientes = clientes;
    }

    exibirRelatorio() {
        console.log('Documento | Tarifa');
        this._clientes.forEach((cliente) => {
            const documento = cliente.recuperarNumeroLicenca();
            const tarifa = cliente.calcularTarifa();
            console.log(`${documento.replace('.', '')} | ${tarifa}`);

        });
    }
}
