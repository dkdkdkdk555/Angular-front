import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit{

  @Output() clickEvent = new EventEmitter();

  constructor(
    // public pageToggleservice: PageToggleService
  ){}

  executeButton(command:string){
    this.clickEvent.emit(command);
  }

  ngOnInit(): void {
    
  }
}
