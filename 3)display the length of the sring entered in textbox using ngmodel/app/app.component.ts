import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Question3';
  public str=new String();
  public length:any;
  public name()
  {
    this.length=this.str.length;
  }
}
