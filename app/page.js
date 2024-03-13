"use client"
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StudentList from './components/StudentList';
import AddNewStudent from './components/AddNewStudent';
import StudentStartup from './components/studentStartup';

export default function Home() {
  const [students, setStudents] = useState([]);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <main>
      <Navbar />
      <StudentStartup />
      <StudentList students={students} />
      <AddNewStudent addStudent={addStudent} />
      <Footer />
    </main>
  );
}
