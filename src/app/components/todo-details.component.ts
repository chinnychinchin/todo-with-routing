import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  id: string

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
  }

}
