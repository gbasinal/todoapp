import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {RecordsComponent} from './records/records.component';

const routes: Routes = [
	{	path: '',
		component: HomeComponent
	},

	{	path: 'about',
		component: AboutComponent
	},

	{	path: 'records',
		component: RecordsComponent
	}	



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
