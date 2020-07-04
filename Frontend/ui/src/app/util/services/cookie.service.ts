import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  private key:string="cms_";

  constructor() { }

  setItem(name,value){
    localStorage.setItem(this.key+name,value);
  }

  getItem(name){
    return localStorage.getItem(this.key+name);
  }

  deleteItem(name){
  	localStorage.removeItem(this.key+name);
  }
}
