"use strict";
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.grades = [];
    this.visits = new Array(25).fill(null);
  }
  countTheAge() {
    const data = new Date().getFullYear();
    return data - this.year;
  }
  present() {
    let index = this.visits.indexOf(null);
    if (index !== -1) {
      this.visits[index] = true;
    }
  }
  absent() {
    let index = this.visits.indexOf(null);
    if (index !== -1) {
      this.visits[index] = false;
    }
  }
  countTheAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
    let arithmeticMean = this.grades.reduce(function (sum, grade) {
      return sum + grade;
    }, 0);
    return arithmeticMean / this.grades.length;
  }
  // calculateAttendanceRate() {
  //     const totalClasses = this.attendance.length;
  //     const attendedClasses = this.attendance.filter(item => item === true).length;
  //     return attendedClasses / totalClasses;
  // }
  countTheAttendanceRate() {
    let numberOfVisits = this.visits.filter((item) => item === true).length;
    // let attendanceCount = this.visits.length;
    return numberOfVisits / this.visits.length;
  }
  summary() {
    let averageGrade = this.countTheAverageGrade();
    let attendanceRate = this.countTheAttendanceRate();

    if (averageGrade > 90 && attendanceRate > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
      return "Добре, але можна краще!";
    } else {
      return "Редиска!";
    }
  }
}

let student1 = new Student("Андрій", "Шевченко", 2005);
student1.grades = [100, 95, 90, 100];
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();

let student2 = new Student("Олександр", "Шовковський", 2008);
student2.grades = [50, 2];
student2.present();
student2.present();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.present();
student2.present();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();

let student3 = new Student("Олександр", "Зінченко", 2007);
student3.grades = [100];
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.absent();
student3.absent();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();

console.log(`Студент: ${student1.firstName} ${student1.lastName}
Вік: ${student1.countTheAge()} 
Середній бал: ${student1.countTheAverageGrade()} 
Відвідування: ${student1.visits}  
Висновок: ${student1.summary()}`);

console.log(`Студент: ${student2.firstName} ${student2.lastName}
Вік: ${student2.countTheAge()} 
Середній бал: ${student2.countTheAverageGrade()} 
Відвідування: ${student2.visits}  
Висновок: ${student2.summary()}`);

console.log(`Студент: ${student3.firstName} ${student3.lastName}
Вік: ${student3.countTheAge()} 
Середній бал: ${student3.countTheAverageGrade()} 
Відвідування: ${student3.visits}  
Висновок: ${student3.summary()}`);
