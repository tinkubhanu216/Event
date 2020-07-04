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
  	const url = this.globals.url+'token/';
  	return this.http.post(url,this.credentials,{headers:headers});
  }
  test(token){
  	const headers = new HttpHeaders({'Content-type':'application/json',
    'Authorization':'Bearer '+token});
    const url = this.globals.url+'calender/test/'
  	return this.http.get(url,{headers:headers});
  }
}
