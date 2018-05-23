import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

	private todos = new BehaviorSubject<any> (['']);
	todo = this.todos.asObservable();

	private itemCounter = new BehaviorSubject<any> (['']);
	itemCount = this.itemCounter.asObservable();
	constructor() { }

	changeTodo(todo) {
		this.todos.next(todo);
	}

	changeCounter(itemCount){
		this.itemCounter.next(itemCount);
	}

}
