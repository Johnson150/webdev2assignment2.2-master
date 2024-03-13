"use client";

import React from 'react';
import Head from 'next/head';
import data from '../public/students.json';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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

        
    <main> 
      
      <Head>
        <title>Students</title>
      </Head>

      <Navbar />

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

      <Footer />

    </main>
    
  );
};
