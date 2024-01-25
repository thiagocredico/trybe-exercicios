export interface IModelReader {
    read(): string;
}

export interface IModelWriter {
    create(): string;
    update(): string;
}

export interface IModelDelete {
    remove(): string;
}

export interface IModel extends IModelReader, IModelWriter, IModelDelete { }