import React from "react";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}.`;
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}

function Hierarchy() {
  const person = new Person("Alex Johnson", 30);
  const student = new Student("Emma Watson", 20, "CSE");
  const teacher = new Teacher("Mr. Smith", 45, "Mathematics");

  return (
    <div className="page">
      <h1>Person Class Hierarchy</h1>

      <div className="card">
        <h2>{person.name} (Person)</h2>
        <p>Age: {person.age}</p>
        <p><i>{person.greet()}</i></p>
      </div>

      <div className="card">
        <h2>{student.name} (Student)</h2>
        <p>Age: {student.age}</p>
        <p><i>{student.greet()}</i></p>
      </div>

      <div className="card">
        <h2>{teacher.name} (Teacher)</h2>
        <p>Age: {teacher.age}</p>
        <p><i>{teacher.greet()}</i></p>
      </div>
    </div>
  );
}

export default Hierarchy;
