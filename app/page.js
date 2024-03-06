import React from 'react';
import data from './students.json';

const studentList = () => {
  const { firstName, lastName, dateOfBirth, grade } = data;

  return firstName.map((firstName, index) => ({
    firstName,
    lastName: lastName[index],
    dateOfBirth: dateOfBirth[index],
    grade: grade[index]
  }));
};

export default function Home() {
  const students = studentList(); // Call the function to get the list of students

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1 className="p-24 bg-blue-100">Students</h1>

      <div>
      <h1>List of Students</h1>
      <ul>
        {students.map(student => (
          <li key={`${student.firstName}-${student.lastName}`}>
            <div>
              <strong>Name:</strong> {student.firstName} {student.lastName}
            </div>
            <div><strong>Date of Birth:</strong> {student.dateOfBirth}</div>
            <div><strong>Grade:</strong> {student.grade}</div>
          </li>
        ))}
      </ul>
    </div>

      <footer className="p-24 bg-red-300">
        <p>School Info</p>
      </footer>

    </main>
    
  );
};
