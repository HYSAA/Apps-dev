import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student-angular-app';

  departmentList=['CSE','EEE','CE','ME','IPE','TE','ARC','BBA'];
  semesterList=[1.1,1.2,2.1,2.2,3.1,3.2,4.1,4.2];

  sid: string ='';
  name: string ='';
  email: string ='';
  department: string ='';
  semester: string = '';
  cgpa: string = '';

  selectDept (department: any) {
    this.selectDept = department.target.value;
  }

  selectSem (semester: any) {
    this.selectSem = semester.target.value;
  }


  public studentInfo: any =[
    {sid: this.sid, name: this.name, email: this.email, department: this.department,
       semester: this.semester, cgpa: this.cgpa}
  ];



  submitInfo(){
    this.studentInfo.push({sid: this.sid, name: this.name, email: this.email, department: this.selectDept,
      semester: this.selectSem, cgpa: this.cgpa});
  }
}
