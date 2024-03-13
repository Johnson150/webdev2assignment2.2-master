"use client"
import React, { useState } from 'react';
import studentsData from './students.json';

const studentList = () => {
  const students = studentsData.students;
  
  return students.map(student => ({
    firstName: student.firstName,
    lastName: student.lastName,
    dateOfBirth: student.dateOfBirth,
    grade: student.grade
  }));
};

export default function Home() {
  const [students, setStudents] = useState(studentList());
  const [newStudent, setNewStudent] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    grade: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewStudent({
      ...newStudent,
      [name]: value
    });
  };

  const addStudent = event => {
    event.preventDefault(); // Prevent the default form submission behavior
    setStudents([...students, newStudent]);
    setNewStudent({ // Reset the form fields after adding a student
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      grade: ''
    });
  };

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
      
      <div>
        <h2>Add New Student</h2>
        <form className='flex min-h-screen flex-col items-center justify-between p-24 bg-blue-200' onSubmit={addStudent}>
          <label>
            First Name:
            <input type="text" name="firstName" value={newStudent.firstName} onChange={handleInputChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" value={newStudent.lastName} onChange={handleInputChange} />
          </label>
          <label>
            Date of Birth:
            <input type="text" name="dateOfBirth" value={newStudent.dateOfBirth} onChange={handleInputChange} />
          </label>
          <label>
            Grade:
            <input type="text" name="grade" value={newStudent.grade} onChange={handleInputChange} />
          </label>
          <button className = "bg-green-200" type="submit">Add Student</button>
        </form>
      </div>
      
      <footer className="p-24 bg-red-300">
        <p>School Info</p>
      </footer>
    </main>
  );
}
