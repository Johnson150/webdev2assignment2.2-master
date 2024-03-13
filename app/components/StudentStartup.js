import React from 'react';
import studentsData from './students.json';

const StudentStartup = () => {
    const students = studentsData.students;

    return (
        <div className="text-center">
            <h1 className="text-xl underline">List of Students</h1>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>
                        <div>
                            <strong>Name:</strong> {student.firstName} {student.lastName}
                        </div>
                        <div><strong>Date of Birth:</strong> {student.dateOfBirth}</div>
                        <div><strong>Grade:</strong> {student.grade}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentStartup;
