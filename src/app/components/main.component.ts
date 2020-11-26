import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../models';
import { TodoDatabase } from '../todo.database';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private tododb: TodoDatabase, private router: Router) { }

  todos: Todo[]

  ngOnInit(): void {
    this.tododb.getTodos().then(result => this.todos = result )
  }

  async onDelete(id) {
    await this.tododb.deleteTodo(id);
    this.tododb.getTodos().then(result => this.todos = result )
  }
 
}
