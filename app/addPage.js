// Directive to inform tooling this code should be executed in a client-side environment.
"use client";

// Import necessary React functionalities and components for this component.
import React, { useState } from 'react'; // Import React and the useState hook from the 'react' library.
import Navbar from './components/Navbar'; // Import the Navbar component from the components directory.
import Footer from './components/Footer'; // Import the Footer component from the components directory.
import AddNewStudent from './components/AddNewStudent'; // Import the AddNewStudent component for adding new students.

// Define the Home component as the default export of this file.
export default function Home() {
  // Initialize 'students' state as an empty array. This state will hold the list of students added.
  const [students, setStudents] = useState([]);

  // Define a function 'addStudent' to update the 'students' state by adding a new student.
  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]); // Add the new student to the existing list of students.
  };

  // The component renders the Navbar, AddNewStudent form, and Footer.
  return (
    <main>
      <Navbar /> {/* Render the Navbar at the top */}
      <AddNewStudent addStudent={addStudent} /> {/* Render the AddNewStudent component, passing 'addStudent' as a prop */}
      <Footer /> {/* Render the Footer at the bottom */}
    </main>
  );
}
