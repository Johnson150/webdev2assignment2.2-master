// Directive to inform tooling this code should be executed in a client-side environment.
"use client";

// Import necessary React functionalities and components for this component.
import React, { useState } from 'react';
import Navbar from './components/Navbar'; // Importing the Navbar component.
import Footer from './components/Footer'; // Importing the Footer component.
import StudentList from './components/StudentList'; // Importing the StudentList component.
import StudentStartup from './components/StudentStartup'; // Importing the StudentStartup component.
import AddNewStudent from './components/AddNewStudent'; // Importing the AddNewStudent component.

// Define the Home component as the default export of this file.
export default function Home() {
  // Initialize 'students' state as an empty array. This state will hold the list of students.
  const [students, setStudents] = useState([]);

  // Define a function 'addStudent' to update the 'students' state by adding a new student.
  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]); // Add the new student to the existing list of students.
  };

  // The component renders the Navbar, StudentStartup, StudentList, AddNewStudent form, and Footer.
  return (
    <main>
      <StudentStartup /> {/* Render the StudentStartup component. */}
      <StudentList students={students} /> {/* Render the StudentList component, passing 'students' as a prop. */}
      <AddNewStudent addStudent={addStudent} /> {/* Render the AddNewStudent component, passing 'addStudent' as a prop. */}
      <Footer /> {/* Render the Footer component. */}
    </main>
  );
}

