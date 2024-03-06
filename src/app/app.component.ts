import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second';

  students = [

    {
      studentName: "Prasanna",
      studentIds: 1001,
      studentYear: 4,
      studentContact: "prasanna@gmail.com",
      studentActivity: "Cricket"
    },
    {
      studentName: "Krishna",
      studentIds: 1002,
      studentYear: 3,
      studentContact: "krishna@gmail.com",
      studentActivity: "Cricket"
    },
    {
      studentName: "kiran",
      studentIds: 1003,
      studentYear: 2,
      studentContact: "kiran@gmail.com",
      studentActivity: "Cricket"
    },
    {
      studentName: "siva",
      studentIds: 1004,
      studentYear: 1,
      studentContact: "siva@gmail.com",
      studentActivity: "Cricket"
    }

  ]
  selectstudents: any = [];

  getStudentId(event: any) {
    this.selectstudents = []
    console.log(event.target.value)
    this.students.forEach(ele=>{
      if(ele.studentIds == event.target.value){
        this.selectstudents.push(ele)
      }
    })
  }

}
