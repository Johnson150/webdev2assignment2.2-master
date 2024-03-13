"use client"
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddNewStudent from './components/AddNewStudent';


export default function Home() {
  const [students, setStudents] = useState([]);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <main>
      <Navbar />
      <AddNewStudent addStudent={addStudent} />
      <Footer />
    </main>
  );
}
