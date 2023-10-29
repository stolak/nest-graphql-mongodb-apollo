
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface FileInput {
    name: string;
    type: string;
    path: string;
    lastModified: string;
    size: number;
    folderId?: Nullable<string>;
}

export interface File {
    id: string;
    name: string;
    type: string;
    path: string;
    lastModified: string;
    size: number;
    folderId?: Nullable<string>;
}

export interface IQuery {
    getFiles(folderId?: Nullable<string>): Nullable<Nullable<File>[]> | Promise<Nullable<Nullable<File>[]>>;
    folders(): Nullable<Folder>[] | Promise<Nullable<Folder>[]>;
    folder(id: string): Nullable<Folder> | Promise<Nullable<Folder>>;
}

export interface IMutation {
    deleteFile(id: string): Nullable<boolean> | Promise<Nullable<boolean>>;
    createFile(input: FileInput): Nullable<File> | Promise<Nullable<File>>;
    createFolder(name?: Nullable<string>): Nullable<Folder> | Promise<Nullable<Folder>>;
}

export interface Folder {
    id: string;
    name: string;
}

type Nullable<T> = T | null;
