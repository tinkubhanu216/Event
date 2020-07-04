import { Component, OnInit } from '@angular/core';
import { AuthService } from "../util/services/auth.service";
@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getToken().subscribe(res=>{
      console.log(res)
      this.authService.test(res['token']).subscribe(res=>{
        console.log(res)
      })
    })
  }

}
