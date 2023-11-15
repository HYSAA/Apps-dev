// src/app/student-form/student-form.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  @Output() addStudent = new EventEmitter<Student>();
  student: Student = { firstName: '', lastName: '', age: 0, grade: '' };

  onSubmit() {
    this.addStudent.emit({ ...this.student });
    this.student = { firstName: '', lastName: '', age: 0, grade: '' };
  }
}
