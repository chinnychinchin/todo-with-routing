import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Todo } from './models';

@Injectable()

export class TodoDatabase extends Dexie {

    private todo: Dexie.Table<Todo, string>;

    constructor() {
        //database name
        super('tododb') 

        //Set up scheme for v1 
        this.version(1).stores({
            todo:"id"
        })

        this.todo = this.table('todo')
    }


    //Add methods

    //Put a todo
    async addTodo(t: Todo) :Promise<any> {
        return await this.todo.put(t)
    }

    //Retrieve all todos
    async getTodos() : Promise<any> {
        return await this.todo.toArray()
    }


}