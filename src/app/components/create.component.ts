import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoComponent } from './todo.component';
import { v4 as uuidv4 } from 'uuid';
import { TodoDatabase } from '../todo.database';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @ViewChild('myTodo') todoComp : TodoComponent
  
  form$: Subscription;
  isValid: boolean

  constructor(private tododb: TodoDatabase, private router: Router) { }

  ngOnInit(): void { 
    
  }

  ngAfterViewInit() {


    this.form$=this.todoComp.todoForm.statusChanges.subscribe(
      v => { 
        if(v=="VALID") {this.isValid=true}
        else{this.isValid = false}
       }
    )

  }

  async addTodo() {
    const id = uuidv4()
    let singleTodo = this.todoComp.todo;
    //add an id
    singleTodo.id = id;
    //refactor priorities from strings to numbers
    singleTodo.tasks = singleTodo.tasks.map(t => {
      t.priority = parseInt(t.priority);
      return t
    })
    
    //update database with the new todo
    await this.tododb.addTodo(singleTodo);

    this.router.navigate(['/']);

  }

}
