import { IModel } from "./interfaces";

export class OrderModel implements IModel {
    create(): string {
        return "Implementação do create. Para OrderModel";
    }
    update(): string {
        return "Implementação do update. Para OrderModel";
    }
    read(): string {
        return "Implementação do read - get. Para OrderModel";
    }
    remove(): string {
        return "Não posso implementar. Contra minha lógica de negócio";
    }
    
}

// Por que esse remove não é um bom indicado de qualidade de código?
// YAGNI - You Ain't Gonna Need It