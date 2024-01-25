import { IModel } from "./interfaces";

export class UserModel implements IModel {
    read(): string {
        return "Implementação do read - get. Para UserModel";
    }
    create(): string {
        return "Implementação do create. Para UserModel";
    }
    update(): string {
        return "Implementação do update. Para UserModel";
    }
    remove(): string {
        return "Implementação do remove. Para UserModel";
    }

}