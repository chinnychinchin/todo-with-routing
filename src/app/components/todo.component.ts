import { Component, Input, OnInit } from '@angular/core';
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
  _todo 
  //FormArray type has an array of controls. since we push formgroups into this formarray, each control is a formgroup. 

  ngOnInit(): void {
  
    this.todoForm = this.createForm();
    this.taskArray = this.todoForm.get('tasks') as FormArray; 
    
  }

  ngOnChanges() {

    if (this._todo != undefined) {

      const FormGroupArray = this._todo.tasks.map(v => {
        return this.fb.group({
          description: this.fb.control(v.description,[Validators.required]),
          priority: this.fb.control(v.priority)
        })
      })

      FormGroupArray.map(v => this.taskArray.push(v))
      //console.log(this.taskArray)
      this.todoForm.patchValue({title: this._todo.title})
  }

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
    
  }

  onDelete(i) {
    this.taskArray.removeAt(i);
  }

  checkValues() {
    console.log(this.todoForm.value)
  }


 
  get todo () {
    return this.todoForm.value
  }
  @Input()
  set todo(todo) {
    this._todo = todo
  }


}
