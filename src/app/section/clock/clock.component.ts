import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Observable, interval } from 'rxjs';
import { map, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {

  timeString:any;

  constructor(
    private router:Router
  ){
    // setInterval(() => {
      
    // }, 1000) ;

    interval(1000).pipe( map (()=>{
      return moment().format('YYYY-MM-DD HH:mm:ss')
    }))
    .subscribe(data => {
      this.timeString = data;
    }) // 페이지 리로드 안시키고 변화주기
  }
  /*
    clock.component.html에 getCurrentTime() 메소드 자체를 
    바인딩 해놨는데 이러면 문제점이
    컴포넌트에서 변화가 생길때 마다 컴포넌트를 리로드 하기 때문에 
    여기선 setInterval() 에 의해 리로드 된다. 
      ==>  페이지 성능상 좋지 않기에 유의
  */

  getCurrentTime(){
    let result = moment().format('YYYY-MM-DD HH:mm:ss');
    return result;
  }

  goStopwatch(){
    this.router.navigateByUrl('/stopwatch');
  }
}
