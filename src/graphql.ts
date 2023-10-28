
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Folder {
    id: string;
    name: string;
}

export interface IMutation {
    createFolder(name?: Nullable<string>): Nullable<Folder> | Promise<Nullable<Folder>>;
}

export interface IQuery {
    folders(): Nullable<Folder>[] | Promise<Nullable<Folder>[]>;
    folder(id: string): Nullable<Folder> | Promise<Nullable<Folder>>;
}

type Nullable<T> = T | null;
