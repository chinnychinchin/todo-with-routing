import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Todo } from './models';

@Injectable({
    providedIn: 'any'
})

export class TodoDatabase extends Dexie {

    todo: Dexie.Table<Todo, string>;
    constructor() {
        //database name
        super('tododb') 

        //Set up scheme for v1 
        this.version(1).stores({
            todo:"id"
        })
    }

     

}