// src/app/student-display/student-display.component.ts
import { Component, Input } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-display',
  templateUrl: './student-display.component.html',
  styleUrls: ['./student-display.component.css']
})
export class StudentDisplayComponent {
  @Input() students: Student[] = [];
}
