import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
  title = 'Question4';
  
  public length:any;
  public fun(val:string)
  {
    this.length=val.length;
  }
 }
