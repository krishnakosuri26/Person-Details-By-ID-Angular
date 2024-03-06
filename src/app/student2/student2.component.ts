import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student2',
  templateUrl: './student2.component.html',
  styleUrls: ['./student2.component.css']
})
export class Student2Component {
  @Input() studentName:string = ''

  @Input() rollNo:number = 0;

  @Input() year:number = 0;

  @Input() contact:string = "";
  
@Input() activity:string = "";
}
