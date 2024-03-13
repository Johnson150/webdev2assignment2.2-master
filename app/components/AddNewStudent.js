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
    addStudent(newStudent);
    setNewStudent({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      grade: ''
    });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-blue-200 p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
          <div className="w-full sm:w-1/2">
            <label className="block mb-2">
              First Name:
              <input type="text" name="firstName" value={newStudent.firstName} onChange={handleInputChange} className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
            </label>
          </div>
          <div className="w-full sm:w-1/2">
            <label className="block mb-2">
              Last Name:
              <input type="text" name="lastName" value={newStudent.lastName} onChange={handleInputChange} className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
            </label>
          </div>
          <div className="w-full sm:w-1/2">
            <label className="block mb-2">
              Date of Birth:
              <input type="text" name="dateOfBirth" value={newStudent.dateOfBirth} onChange={handleInputChange} className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
            </label>
          </div>
          <div className="w-full sm:w-1/2">
            <label className="block mb-2">
              Grade:
              <input type="text" name="grade" value={newStudent.grade} onChange={handleInputChange} className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
            </label>
          </div>
          <div className="w-full">
            <button className="bg-green-200 px-4 py-2 rounded-md shadow-md" type="submit">Add Student</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewStudent;
