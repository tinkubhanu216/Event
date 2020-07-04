import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppComponent } from './app.component';

// sets up routes constant where you define your routes
const routes: Routes = 
	[

	]; 


@NgModule({
  declarations: [],
  imports: [
 	CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
