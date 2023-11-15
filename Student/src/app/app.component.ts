// src/app/app.component.ts
import { Component } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: Student[] = [];

  addStudent(student: Student) {
    this.students.push(student);
  }
}
