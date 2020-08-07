import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import {CookieService} from './cookie.service';
import {GlobalService} from './global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  credentials={
    username:this.globals.username,
    password:this.globals.password
  }
  constructor(private http:HttpClient,private cookieService:CookieService,private globals:GlobalService) { }

  getToken(){
  	const headers = new HttpHeaders({'Content-type':'application/json'});
  	const url = this.globals.url+'token';
  	return this.http.post(url,this.credentials,{headers:headers});
  }
  addEvent(data){
    const headers = new HttpHeaders({
			'Content-type':'application/json',
			'Authorization':'Bearer '+this.cookieService.getItem('jwt_token')
		});
		const url = this.globals.url +'event_manager/event/add';
		return this.http.post(url,data,{headers:headers});
  }
  editEvent(data){
    const headers = new HttpHeaders({
			'Content-type':'application/json',
			'Authorization':'Bearer '+this.cookieService.getItem('jwt_token')
		});
		const url = this.globals.url +'event_manager/event/edit';
		return this.http.post(url,data,{headers:headers});
  }
  delEvent(data){
    const headers = new HttpHeaders({
			'Content-type':'application/json',
			'Authorization':'Bearer '+this.cookieService.getItem('jwt_token')
		});
		const url = this.globals.url +'event_manager/event/delete';
		return this.http.post(url,data,{headers:headers});
  }
  getEventsByDate(data){
    const headers = new HttpHeaders({
			'Content-type':'application/json',
			'Authorization':'Bearer '+this.cookieService.getItem('jwt_token')
		});
		const url = this.globals.url +'event_manager/event/filterByDate';
		return this.http.post(url,data,{headers:headers});
  }
  getEventsByMonth(data){
    const headers = new HttpHeaders({
			'Content-type':'application/json',
			'Authorization':'Bearer '+this.cookieService.getItem('jwt_token')
		});
		const url = this.globals.url +'event_manager/event/getEventByMonth';
		return this.http.post(url,data,{headers:headers});
  }
  getEventsbyRange(data){
    const headers = new HttpHeaders({
			'Content-type':'application/json',
			'Authorization':'Bearer '+this.cookieService.getItem('jwt_token')
		});
		const url = this.globals.url +'event_manager/event/getEventsbyRange';
		return this.http.post(url,data,{headers:headers});
  }
}
