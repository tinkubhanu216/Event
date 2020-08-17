import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChangeDetectionStrategy,EventEmitter } from '@angular/core';
import { CalendarEvent, CalendarView,CalendarDateFormatter } from 'angular-calendar';
import { CustomDateFormatter } from '../demo-utils/custom-date-formatter.provider';
// import { PlannerComponent } from '../planner/planner.component';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../util/services/auth.service';
import {CookieService} from '../util/services/cookie.service';



@Component({
  selector: 'mwl-demo-component',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ],

})
export class DemoComponent implements OnInit {
  title: string;
  description: string;
  from_date: string;
  to_date: string;
  display = false;
  editdisplay=false;
  addEventForm: FormGroup;
  editEventForm: FormGroup;

  day_events: any;
  week_events: any;
  month_events:any;

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  presentDate: Date =new Date();

  selectedDate: Date=new Date();

  zeroPad = (num, places) => String(num).padStart(places, '0')
  day_num =this.presentDate.getDate();
  mon_num=this.presentDate.getMonth()+1;
  year_num=this.presentDate.getFullYear();
  startdate:string=this.year_num+'-'+this.zeroPad(this.mon_num, 2)+'-'+this.zeroPad(this.day_num, 2);


  events: CalendarEvent[] = [];

  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {
    // const today= new Date();
    // this.getEvent(today);
  
   }
   ngOnInit(): void {
    this. addEventForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      from_date: new FormControl('', Validators.required),
      from_time: new FormControl('', Validators.required),
      to_date: new FormControl('', Validators.required),
      to_time: new FormControl('', Validators.required),
    });
    this. editEventForm = new FormGroup({
      id: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      from_date: new FormControl('', Validators.required),
      from_time: new FormControl('', Validators.required),
      to_date: new FormControl('', Validators.required),
      to_time: new FormControl('', Validators.required),
    });
    this.authService.getToken().subscribe(res => {
  
      console.log(res);
      this.cookieService.setItem('jwt_token', res['token']);
    });
    const today= new Date();
    this.getEvent(today);
    
  }
  showDialog() {
    // console.log("add event clicked");
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    this.display = true;
    const day=this.selectedDate;
    const day_num=day.getDate();
    const mon_num=day.getMonth()+1;
    const year_num=day.getFullYear();
    const pre_date:string=year_num+'-'+zeroPad(mon_num, 2)+'-'+zeroPad(day_num, 2);
//    this.startdate=pre_date;
    console.log(pre_date);
    this.addEventForm.patchValue({
      from_date: pre_date,
    }); 

  }
  showEditDialog(event_idx,event_view) {
    console.log("edit event clicked");
    this.editdisplay = true;
    console.log(event_idx);
    console.log(this.day_events[event_idx]);
    // this.editedEvent=this.day_events[event_idx];
    if(event_view=='day'){
      this.editEventForm.patchValue({
        id: this.day_events[event_idx].id,
        title: this.day_events[event_idx].title,
        description: this.day_events[event_idx].description,
        from_date: this.day_events[event_idx].from_date,
        from_time: this.day_events[event_idx].from_time,
        to_date: this.day_events[event_idx].to_date,
        to_time: this.day_events[event_idx].to_time,
      });  
    }else if(event_view=='week'){
      this.editEventForm.patchValue({
        id: this.week_events[event_idx].id,
        title: this.week_events[event_idx].title,
        description: this.week_events[event_idx].description,
        from_date: this.week_events[event_idx].from_date,
        from_time: this.week_events[event_idx].from_time,
        to_date: this.week_events[event_idx].to_date,
        to_time: this.week_events[event_idx].to_time,
      });  
    }else if(event_view=='month'){
      this.editEventForm.patchValue({
        id: this.month_events[event_idx].id,
        title: this.month_events[event_idx].title,
        description: this.month_events[event_idx].description,
        from_date: this.month_events[event_idx].from_date,
        from_time: this.month_events[event_idx].from_time,
        to_date: this.month_events[event_idx].to_date,
        to_time: this.month_events[event_idx].to_time,
      });  
    }

  }
  onSubmit(){
    const data = this.addEventForm.value;
    // console.log(data);
    this.authService.addEvent(data).subscribe(res => {
      console.log(res);
    });
    console.log(this.addEventForm.value);
    this.display = false;
  }
  oneditSubmit(){
    console.log("on edit submit")
    const data = this.editEventForm.value;
    console.log(data);
    this.authService.editEvent(data).subscribe(res => {
      console.log(res);
    });
    // console.log(this.addEventForm.value);
    this.editdisplay = false;
    this.getEvent(this.selectedDate);
  }
  delEvent(){
    const data = this.editEventForm.value;
    console.log(data);
    this.authService.delEvent(data).subscribe(res => {
      console.log(res);
    });
    // console.log(this.addEventForm.value);
    this.editdisplay = false;
    this.getEvent(this.selectedDate);
  }

  getEvent(day){
    this.day_events=[];
    this.week_events=[];
    this.month_events=[];
    this.selectedDate=day;
    const day_num:any=day.getDate();
    const mon_num:any=day.getMonth()+1;
    const year_num:any=day.getFullYear();
    const pre_date:string=year_num+'-'+mon_num+'-'+day_num;
    const data_date = {'date': pre_date};
    this.authService.getEventsByDate(data_date).subscribe(res => {
      // console.log(res);
      this.day_events=res;
      // console.log(this.day_events)
    });
    const data_month = {'month': mon_num,'year':year_num};
    this.authService.getEventsByMonth(data_month).subscribe(res => {
      // console.log(res);
      this.month_events=res;
      // console.log(this.day_events)
    });
    let startDay = new Date();
    let endDay = new Date();
    startDay.setDate(day.getDate()-day.getDay());
    endDay.setDate(startDay.getDate()+6);
    const day_num_start:any=startDay.getDate();
    const mon_num_start:any=startDay.getMonth()+1;
    const year_num_start:any=startDay.getFullYear();
    const pre_date_start:string=year_num_start+'-'+mon_num_start+'-'+day_num_start;

    const day_num_end:any=endDay.getDate();
    const mon_num_end:any=endDay.getMonth()+1;
    const year_num_end:any=endDay.getFullYear();
    const pre_date_end:string=year_num_end+'-'+mon_num_end+'-'+day_num_end;


    const data_week = {'start':pre_date_start ,'end':pre_date_end};
    this.authService.getEventsbyRange(data_week).subscribe(res => {
      // console.log(res);
      this.week_events=res;
      // console.log(this.day_events)
    });
    console.log('events fetched');
    // tslint:disable-next-line: no-unused-expression
    console.log("day",this.day_events);
    console.log("week",this.week_events);
    console.log("month",this.month_events);

  }
  

  // getDate(day) {
  //   console.log("clickedd");
  //   console.log(day.toString());
  //   console.log(day);
  //   const day_num:any=day.date.getDate();
  //   const mon_num:any=day.date.getMonth()+1;
  //   const year_num:any=day.date.getFullYear();
  //   console.log(day_num,mon_num,year_num);
  //   this.getEvent(day_num,mon_num,year_num);
    
  //   // console.log(day.getDate());
  //   // console.log(day.getMonth());
  //   // console.log(day.getFullYear().toString());
  // }
  checkDate(day){
    if(day.date.getMonth()==this.viewDate.getMonth()){
      return true;
    }else{
      return false;
    } 
  }
  getBg(day){
    console.log(this.month_events);
    for (var eve of this.month_events){
      const st=new Date(eve.from_date);
      const ed=new Date(eve.to_date);
      if(day>=st && day<=ed){
        return "#e4f0f6";
      }
    }
    return "none";
    // if(day.date.getMonth()==this.viewDate.getMonth()){
    //   return "#e4f0f6";
    // }else{
    //   return "none";
    // } 
  }
}