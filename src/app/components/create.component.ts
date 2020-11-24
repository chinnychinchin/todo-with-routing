import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoComponent } from './todo.component';
import { v4 as uuidv4 } from 'uuid';
import { TodoDatabase } from '../todo.database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @ViewChild('myTodo') todoComp : TodoComponent
  
  constructor(private tododb: TodoDatabase, private router: Router) { }

  ngOnInit(): void {
  }

  addTodo() {
    const id = uuidv4()
    console.log(this.todoComp.todos)
  }

}
