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
    addTodo(t: Todo) :Promise<any> {
        return this.todo.put(t)
    }

    //Retrieve all todos
    getTodos() : Promise<any> {
        return this.todo.toArray()
    }

    //Get todo by id
    getSingleTodo(id: string) : Promise<Todo> {
        return this.todo.get(id);
    }

    //delete a todo
    deleteTodo(id: string) :Promise<any> {
        return this.todo.where('id').equals(id).delete();
    }


}