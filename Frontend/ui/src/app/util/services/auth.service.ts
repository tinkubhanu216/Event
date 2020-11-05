import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import {CookieService} from './cookie.service';
import {GlobalService} from './global.service';
import { EventDataFormat } from './EventDataFormat';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
//   credentials={
//     username:this.globals.username,
//     password:this.globals.password
//   }
events:EventDataFormat[]=[
	{description: "ndkhfdkf",
	from_date: new Date(2020, 10, 6, 0, 0, 0, 0),
	from_time: "00:36",
	id: 0,
	title: "dnfhdbfhbhj",
	to_date: new Date("2021-12-06"),
	to_time: "00:36"}
	];
  constructor(private http:HttpClient,private cookieService:CookieService,private globals:GlobalService) { }

//   getToken(){
//   	const headers = new HttpHeaders({'Content-type':'application/json'});
//   	const url = this.globals.url+'token';
//   	return this.http.post(url,this.credentials,{headers:headers});
//   }
  addEvent(data){
	  data.id=this.events.length;
	  this.events.push(data);
	  console.log(this.events);
    // const headers = new HttpHeaders({
	// 		'Content-type':'application/json',
	// 		'Authorization':'Bearer '+this.cookieService.getItem('jwt_token')
	// 	});
	// 	const url = this.globals.url +'event_manager/event/add';
	// 	return this.http.post(url,data,{headers:headers});
  }
  editEvent(data){
	  this.events[data.id]=data;
    // const headers = new HttpHeaders({
	// 		'Content-type':'application/json',
	// 		'Authorization':'Bearer '+this.cookieService.getItem('jwt_token')
	// 	});
	// 	const url = this.globals.url +'event_manager/event/edit';
	// 	return this.http.post(url,data,{headers:headers});
  }
  delEvent(data){
	  console.log("delete event");
	  console.log(data);
	  this.events=this.events.filter(event=> event.id!==data.id);
	  console.log(this.events);
    // const headers = new HttpHeaders({
	// 		'Content-type':'application/json',
	// 		'Authorization':'Bearer '+this.cookieService.getItem('jwt_token')
	// 	});
	// 	const url = this.globals.url +'event_manager/event/delete';
	// 	return this.http.post(url,data,{headers:headers});
  }
  getEventsByDate(data){
	  console.log(`get by date${data}`);
	  console.log(this.events[0].from_date);
      console.log(this.events.filter(event=>new Date(event.from_date).getTime()<=data.getTime() && new Date(event.from_date).getTime()>=data.getTime()));
	  return this.events.filter(event=>event.from_date.getTime()<=data.getTime() && event.to_date.getTime()>=data.getTime());
    // const headers = new HttpHeaders({
	// 		'Content-type':'application/json',
	// 		'Authorization':'Bearer '+this.cookieService.getItem('jwt_token')
	// 	});
	// 	const url = this.globals.url +'event_manager/event/filterByDate';
	// 	return this.http.post(url,data,{headers:headers});
  }
  getEventsByMonth(data){
	console.log(`get by month${data}`);
	console.log(data);
    // const headers = new HttpHeaders({
	// 		'Content-type':'application/json',
	// 		'Authorization':'Bearer '+this.cookieService.getItem('jwt_token')
	// 	});
	// 	const url = this.globals.url +'event_manager/event/getEventByMonth';
	// 	return this.http.post(url,data,{headers:headers});
  }
  getEventsbyRange(data){
	console.log(`get by range${data}`);
	console.log(data);
    // const headers = new HttpHeaders({
	// 		'Content-type':'application/json',
	// 		'Authorization':'Bearer '+this.cookieService.getItem('jwt_token')
	// 	});
	// 	const url = this.globals.url +'event_manager/event/getEventsbyRange';
	// 	return this.http.post(url,data,{headers:headers});
  }
}
