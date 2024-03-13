import React from 'react';

const StudentList = ({ students }) => {
  return (
    <div className="text-center">
      <ul>
        {students.map(student => (
          <li key={`${student.firstName}-${student.lastName}`}>
            <div>
              <strong>First Name:</strong> {student.firstName} {student.lastName}
            </div>
            <div><strong>Date of Birth:</strong> {student.dateOfBirth}</div>
            <div><strong>Grade:</strong> {student.grade}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
