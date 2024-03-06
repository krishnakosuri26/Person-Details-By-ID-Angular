import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student3',
  templateUrl: './student3.component.html',
  styleUrls: ['./student3.component.css']
})
export class Student3Component {
  @Input() studentName:string = '';
  @Input() rollNo:number = 0;

  @Input() year:number = 0;

@Input() contact:string = "";

@Input() activity:string = "";
}
