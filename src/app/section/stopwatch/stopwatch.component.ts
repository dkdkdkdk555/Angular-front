import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  providers: [
    PageToggleService
  ]
})
export class StopwatchComponent  implements OnInit{


  constructor(
    private router : Router,
    public pageToggleService : PageToggleService
  ){

  }

  goClock(){
    this.pageToggleService.goPage('/clock')
  }

  ngOnInit(): void {
    
  }
}
