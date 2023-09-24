class Teacher {
    constructor(idnum, prefix, fname, lname, suffix) {
        this.idnum = idnum;
        this.prefix = prefix;
        this.fname = fname;
        this.lname = lname;
        this.suffix = suffix;
    }

    toString() {
        return `${this.idnum}, ${this.prefix} ${this.fname} ${this.lname},${this.suffix}`;
    }
}

class Student {
    constructor(stdIdNum, fname, lname, program, year) {
        this.stdIdNum = stdIdNum;
        this.fname = fname;
        this.lname = lname;
        this.program = program;
        this.year = year;
    }

    toString() {
        return `${this.stdIdNum}, ${this.fname} ${this.lname},${this.program}, ${this.year}`;
    }
}

class Schedule {
    constructor(schedCode, schedDays, schedTime) {
        this.schedCode = schedCode;
        this.schedDays = schedDays;
        this.schedTime = schedTime;
        this.schedColl = [];
    }

    addToSched() {
        this.schedColl.push(this);
    }

    searchSchedule(scheduleCode) {
        return this.schedColl.find(schedule => schedule.schedCode === scheduleCode);
    }

    toString() {
        return `${this.schedCode}, ${this.schedDays} ${this.schedTime}`;
    }
}




class Course {
    constructor(cCode, cName, cDesc) {
        this.cCode = cCode;
        this.cName = cName;
        this.cDesc = cDesc;
        this.cTeachers = [];
        this.cStudents = [];
        this.cSchedules = [];
    }

    addTeacher(teacher) {
        this.cTeachers.push(teacher);
    }

    addStudent(student) {
        this.cStudents.push(student);
    }

    addSchedule(schedule) {
        this.cSchedules.push(schedule);
    }

    getTeachers() {
        return this.cTeachers;
    }

    getStudents() {
        return this.cStudents;
    }

    getCourseCode() {
        return this.cCode;
    }

    getCourseName() {
        return this.cName;
    }

    getCourseDescription() {
        return this.cDesc;
    }

    getCourseSchedules() {
        return this.cSchedules;
    }
}

const teacher1 = new Teacher(1110, 'Dr.', 'Heero', 'Yuy', 'PhD');
const student1 = new Student(1001, 'Alberto Jr', 'Anunciado', 'BSIT', 3);
const schedule1 = new Schedule(1, 'MWF', '08:00am - 09:00am');
const schedule2 = new Schedule(2, 'TTG', '8:30am - 10:00am');
const student2 = new Student(1001, 'Wing', 'Gundam', 'BSIT', 3);

const course1 = new Course(11100, 'Apps Dev 1', 'Applications Development and Emerging Technologies');
course1.addTeacher(teacher1);
course1.addStudent(student1);
course1.addSchedule(schedule1);
course1.addSchedule(schedule2);

console.log(`Course Code: ${course1.getCourseCode()}`);
console.log(`Course Name: ${course1.getCourseName()}`);
console.log(`Course Description: ${course1.getCourseDescription()}`);
console.log('Teachers:', course1.getTeachers().map(teacher => teacher.toString()));
console.log('Students:', course1.getStudents().map(student => student.toString()));
console.log('Schedules:', course1.getCourseSchedules());

document.write(`<h2>Teacher:</h2>${teacher1.toString()}<br>`);
document.write(`<h2>Student:</h2>${student1.toString()}<br>`);
document.write(`<h2>Schedules:</h2>${course1.getCourseSchedules().map(schedule => schedule.toString()).join('<br>')}`);
