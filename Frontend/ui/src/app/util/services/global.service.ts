import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  //enter your global user username and password
  username : string = ''
  password : string = ''
  url : string = 'http://localhost:8000/'
  constructor() { }
}
