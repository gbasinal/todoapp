import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [

  	trigger('todos',  [
  		transition('* => *', [
  			query(':enter', style({opacity: 0}), {optional:true}),

  			query(':enter', stagger('300ms', [
  				animate('.6s ease-in', keyframes([
  					style({opacity: 0, transform: 'translateY( -75%)', offset: 0}),
  					style({opacity: .5, transform: 'translateY( 35px)',offset: 1}),
  				]))
  			]),{optional:true}),

  			query(':leave', stagger('300ms', [
  				animate('.6s ease-in', keyframes([
  					style({opacity: 0, transform: 'translateY(0)', offset: 0}),
  					style({opacity: .5, transform: 'translateY( 35px)', offset: .3}),
  					style({opacity: 1, transform: 'translateY(-75%)', offset: 1}),
  				]))
  			]),{optional:true})  			
  		])
  	])

  ]
})
export class HomeComponent implements OnInit {

	itemCount: number;
	btnText: string = 'Add Note Title ';
	todoText: string;
	todos = [];



	constructor(private _data: DataService) { }

	ngOnInit() {

    this._data.itemCount.subscribe(res => this.itemCount = res);
    this.itemCount = this.todos.length;
    this._data.changeTodo(this.todos);

	}

	addItem(){
    this._data.todo.subscribe(res => this.todos = res);
    console.log(this.todoText);
    if(!this.todoText) {
      alert('Please add a note title');
    }else{
      this.todos.push(this.todoText);
    }
		
		this.todoText = '';
		this.itemCount = this.todos.length;
    this._data.changeTodo(this.todos);
    console.log(this.todos);
	}


}
