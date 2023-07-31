import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { TimeDisplayComponent } from './stopwatch/time-display/time-display.component';
import { ButtonsComponent } from './stopwatch/buttons/buttons.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';



@NgModule({
  declarations: [
    SectionComponent
  ],
  exports : [
    SectionComponent
  ],
  imports: [
    CommonModule,
    StopwatchModule
  ]
})
export class SectionModule { }
