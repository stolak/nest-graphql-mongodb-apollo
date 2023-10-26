
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface File {
    id: string;
    name: string;
    type: string;
    path: string;
    folderId?: Nullable<string>;
}

export interface IMutation {
    createFile(name: string, type: string, path: string, folderId?: Nullable<string>): Nullable<File> | Promise<Nullable<File>>;
    createFolder(name: string): Nullable<Folder> | Promise<Nullable<Folder>>;
}

export interface IQuery {
    getFiles(folderId?: Nullable<string>): Nullable<Nullable<File>[]> | Promise<Nullable<Nullable<File>[]>>;
    files(): Nullable<File>[] | Promise<Nullable<File>[]>;
    file(id: string): Nullable<File> | Promise<Nullable<File>>;
    folders(): Nullable<Folder>[] | Promise<Nullable<Folder>[]>;
    folder(id: string): Nullable<Folder> | Promise<Nullable<Folder>>;
}

export interface Folder {
    id: string;
    name: string;
}

type Nullable<T> = T | null;
