import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

	private todos = new BehaviorSubject<any> (['Note Title...']);
	todo = this.todos.asObservable();

	private itemCounts = new BehaviorSubject<any> ([0]);
	itemCount = this.itemCounts.asObservable();
	constructor() { }

	changeTodo(todo) {
		this.todos.next(todo);
		
	}
	changeCounter(counter) {
		this.itemCounts.next(counter);
	}
}
