import { Component, OnInit, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
 {
  @Output() public Myevent=new EventEmitter(); 
  public Message:any;
  public Send(Value:any)
  {
    this.Message=Value;
    this.Myevent.emit(this.Message);
  }
  
 }
