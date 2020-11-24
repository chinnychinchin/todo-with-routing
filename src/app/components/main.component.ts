import { Component, OnInit } from '@angular/core';
import { Todo } from '../models';
import { TodoDatabase } from '../todo.database';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private tododb: TodoDatabase) { }

  todos: Todo[]

  ngOnInit(): void {
    this.tododb.getTodos().then(result => { this.todos = result })
  }

 
}
