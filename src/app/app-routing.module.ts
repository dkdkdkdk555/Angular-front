import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// 경로 설정 : 해당 url 에서 어떻게 동작하게 할지 설정
const routes: Routes = [
  {
      path : '', // 루트 경로
      redirectTo : 'stopwatch',
      pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
