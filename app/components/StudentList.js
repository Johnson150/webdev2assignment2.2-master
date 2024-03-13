// Import the React library to enable the use of React features within this component.
import React from 'react';

// Define a functional component named StudentList that takes a prop 'students' which is expected to be an array of student objects.
const StudentList = ({ students }) => {
  // Return JSX for rendering the student list.
  return (
    // A div wrapper for the list with text centered.
    <div className="text-center">
      {/* Unordered list to display each student as a list item */}
      <ul>
        {/* Iterate over the 'students' array passed as a prop using the map function. For each 'student' object, render a list item. */}
        {students.map(student => (
          // List item with a unique key derived from the student's first and last name to help React identify which items have changed, are added, or are removed.
          <li key={`${student.firstName}-${student.lastName}`}>
            {/* Display student's first and last name with a strong emphasis on 'First Name' label */}
            <div>
              <strong>Name:</strong> {student.firstName} {student.lastName}
            </div>
            {/* Display student's date of birth with a strong emphasis on 'Date of Birth' label */}
            <div><strong>Date of Birth:</strong> {student.dateOfBirth}</div>
            {/* Display student's grade with a strong emphasis on 'Grade' label */}
            <div><strong>Grade:</strong> {student.grade}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the StudentList component so it can be used in other parts of the application.
export default StudentList;
