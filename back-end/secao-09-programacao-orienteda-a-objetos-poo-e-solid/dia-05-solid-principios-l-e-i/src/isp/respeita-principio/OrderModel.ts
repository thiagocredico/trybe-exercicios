import { IModelReader, IModelWriter } from "./interfaces";

export class OrderModel implements IModelReader, IModelWriter {
    create(): string {
        return "Implementação do create. Para OrderModel";
    }
    update(): string {
        return "Implementação do update. Para OrderModel";
    }
    read(): string {
        return "Implementação do read - get. Para OrderModel";
    }

}