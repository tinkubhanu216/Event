import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  username :string='tinku'
  password :string='rgukt123'
  url :string='http://localhost:8000/'
  constructor() { }
}
