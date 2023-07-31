import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { TimeDisplayComponent } from './stopwatch/time-display/time-display.component';
import { ButtonsComponent } from './stopwatch/buttons/buttons.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { Route, RouterModule, Routes } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ClockComponent } from './clock/clock.component';

const routes : Routes = [
  {
    path : 'stopwatch',
    component: StopwatchComponent
  },
  {
    path : 'clock',
    component : ClockComponent
  }
];

@NgModule({
  declarations: [
    SectionComponent,
    ClockComponent
  ],
  exports : [
    SectionComponent,
    RouterModule // 라우터모듈이 설정값을 알게하기위해 exports
  ],
  imports: [
    CommonModule,
    StopwatchModule,
    RouterModule.forChild(routes) /* 루트에서 (app-routing.module.ts) 해주는게
      아니기 때문에 forChild 에 routes 정보 넣는다.
    */

  
  ]
})
export class SectionModule { }
