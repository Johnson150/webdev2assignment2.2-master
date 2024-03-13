import React, { useState } from 'react';

const AddNewStudent = ({ addStudent }) => {
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

  const handleSubmit = event => {
    event.preventDefault();
    addStudent(newStudent); // Call the addStudent function passed from the parent component
    // Reset the form fields after adding a student
    setNewStudent({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      grade: ''
    });
  };

  return (
    
    <div className="text-center">

      <form onSubmit={handleSubmit}>
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
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddNewStudent;
