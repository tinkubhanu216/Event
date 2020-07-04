import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  username :'kaushal'
  password : '123456'
  url :'http://localhost:8000/'
  constructor() { }
}
