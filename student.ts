import { faker } from "@faker-js/faker";
// student class
class Student {
  name: string;
  id: number;
  course: cor[] = [];
  constructor(n: string, id: number) {
    this.name = n;
    this.id = id;
  }
  addCourse(obj: cor) {
    this.course.push(obj);
  }
}

// interface
interface cor {
  name: string;
  status: boolean;
}
interface std extends cor {
  id: number;
}

// course class
class Course {
  subject: string;
  fees: number;

  students: std[] = [];
  addStd(obj: std) {
    if (obj) {
      this.students.push(obj);
    }
  }
  constructor(s: string, f: number) {
    this.subject = s;
    this.fees = f;
  }
}

// create student

let s1 = new Student("Ratan lal", Math.floor(1000 + Math.random() * 9000));
let s2 = new Student("Bilal", Math.floor(1000 + Math.random() * 9000));
let s3 = new Student("Ahmed", Math.floor(1000 + Math.random() * 9000));

// create course
let c1 = new Course("English", 2000);
let c2 = new Course("Urdu", 1000);

c1.addStd({ name: s1.name, id: s1.id, status: true });
c1.addStd({ name: s2.name, id: s2.id, status: true });
c2.addStd({ name: s3.name, id: s3.id, status: true });
c2.addStd({ name: s1.name, id: s1.id, status: true });

s1.addCourse({ name: c1.subject, status: true });
s1.addCourse({ name: c2.subject, status: true });
s2.addCourse({ name: c1.subject, status: true });
s3.addCourse({ name: c2.subject, status: true });

console.log(c1);
console.log(s1);
console.log(s2);
console.log(s3);
