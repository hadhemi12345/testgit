import { Component, OnInit } from '@angular/core';
import { Todo } from '../core/todo';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  listTodo:Todo[]=[]
  nb!:number
  constructor(private _calcul:CalculService) { }

  ngOnInit(): void {
    this.listTodo=[
      {"userId": 1, "id": 1, "title": "delectus aut autem","completed": false},
      {"userId": 1, "id": 2, "title": "quis ut nam facilis etofficia qui", "completed": false},
      {"userId": 1, "id": 3, "title": "fugiat veniamminus", "completed": false},
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam utb", "completed": true}];
  }
  getNumber(){
    this.nb=this._calcul.getNumberOf(this.listTodo,"completed",true)
  }
}
 