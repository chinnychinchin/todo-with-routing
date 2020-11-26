import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../models';
import { TodoDatabase } from '../todo.database';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private tododb: TodoDatabase) { }

  id: string
  todo: Todo

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.tododb.getSingleTodo(this.id).then(todo => this.todo = todo)
  }

}
 