import React from 'react';
import data from '../public/students.json';

const StudentList = () => {
  const { firstName, lastName, dateOfBirth, grade } = data;

  const students = firstName.map((firstName, index) => ({
    firstName,
    lastName: lastName[index],
    dateOfBirth: dateOfBirth[index],
    grade: grade[index]
  }));

  return (
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
  );
};

export default StudentList;
