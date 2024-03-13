// Import the React library to use React features within this component.
import React from 'react';
// Import the studentsData from a local JSON file to use as the data source for the student list.
import studentsData from './students.json';

// Define a functional component named StudentStartup.
const StudentStartup = () => {
    // Extract the 'students' array from the imported 'studentsData'.
    const students = studentsData.students;

    // Return JSX for rendering the student startup component.
    return (
        // A div wrapper for the content with text aligned to the center.
        <div className="text-center">
            {/* Heading displaying the title of the list */}
            <h1 className="text-xl underline">List of Students</h1>
            {/* Unordered list to display each student */}
            <ul>
                {/* Iterate over the 'students' array using the map function. Use the current index in the array as a key for each list item. */}
                {students.map((student, index) => (
                    // List item with a unique key for React to track each element's identity efficiently.
                    <li key={index}>
                        {/* Display student's full name with a strong emphasis on the 'Name' label */}
                        <div>
                            <strong>Name:</strong> {student.firstName} {student.lastName}
                        </div>
                        {/* Display student's date of birth with a strong emphasis on the 'Date of Birth' label */}
                        <div><strong>Date of Birth:</strong> {student.dateOfBirth}</div>
                        {/* Display student's grade with a strong emphasis on the 'Grade' label */}
                        <div><strong>Grade:</strong> {student.grade}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Export the StudentStartup component so it can be used elsewhere in the application.
export default StudentStartup;

