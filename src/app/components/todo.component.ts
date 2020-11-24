import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  todoForm: FormGroup;
  taskArray: FormArray;
  //FormArray type has an array of controls. since we push formgroups into this formarray, each control is a formgroup. 

  ngOnInit(): void {
    this.todoForm = this.createForm();
    this.taskArray = this.todoForm.get('tasks') as FormArray; 
  }

  private createForm() : FormGroup {
    return this.fb.group({
      title: this.fb.control('', [Validators.required]),
      tasks: this.fb.array([])
    })
  }

  private createTaskFormGroup() : FormGroup {

    return this.fb.group({
      description: this.fb.control('',[Validators.required]),
      priority: this.fb.control(0)

    })
  }

  addTask() {
    this.taskArray.push(this.createTaskFormGroup())
    //console.log(this.taskArray)
  }

  get todos(): Todo {
    return this.todoForm.value
  }

}
