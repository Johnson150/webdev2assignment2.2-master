// Import React and its useState hook for managing component state.
import React, { useState } from 'react';

// Define a functional component named AddNewStudent that accepts a prop called addStudent.
const AddNewStudent = ({ addStudent }) => {
  // useState hook initializes newStudent state with an object containing empty strings for student details.
  const [newStudent, setNewStudent] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    grade: ''
  });

  // Function to handle input changes, updating the newStudent state with the new value for a given field.
  const handleInputChange = event => {
    const { name, value } = event.target; // Destructure name and value from the event target (input fields).
    setNewStudent({
      ...newStudent, // Spread operator to copy existing student details.
      [name]: value // Use computed property name to set the value for the specific field.
    });
  };

  // Function to handle form submission, preventing the default form submit action.
  const handleSubmit = event => {
    event.preventDefault(); // Prevent default form submission behavior.
    addStudent(newStudent); // Call the addStudent function passed as a prop with the newStudent object.
    setNewStudent({ // Reset the newStudent state to initial empty values.
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      grade: ''
    });
  };

  // JSX to render the form for adding a new student.
  return (
    <div className="flex justify-center items-center">
      <div className="bg-blue-200 p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
          {/* Input field for the first name */}
          <div className="w-full sm:w-1/2">
            <label className="block mb-2">
              First Name:
              <input type="text" name="firstName" value={newStudent.firstName} onChange={handleInputChange} className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
            </label>
          </div>
          {/* Input field for the last name */}
          <div className="w-full sm:w-1/2">
            <label className="block mb-2">
              Last Name:
              <input type="text" name="lastName" value={newStudent.lastName} onChange={handleInputChange} className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
            </label>
          </div>
          {/* Input field for the date of birth */}
          <div className="w-full sm:w-1/2">
            <label className="block mb-2">
              Date of Birth:
              <input type="text" name="dateOfBirth" value={newStudent.dateOfBirth} onChange={handleInputChange} className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
            </label>
          </div>
          {/* Input field for the grade */}
          <div className="w-full sm:w-1/2">
            <label className="block mb-2">
              Grade:
              <input type="text" name="grade" value={newStudent.grade} onChange={handleInputChange} className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
            </label>
          </div>
          {/* Submit button for the form */}
          <div className="w-full">
            <button className="bg-green-200 px-4 py-2 rounded-md shadow-md" type="submit">Add Student</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Export the AddNewStudent component for use in other parts of the application.
export default AddNewStudent;
