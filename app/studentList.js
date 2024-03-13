import React from 'react';

const studentList = () => {
    const { firstName, lastName, dateOfBirth, grade } = data;
  
    return firstName.map((firstName, index) => ({
      firstName,
      lastName: lastName[index],
      dateOfBirth: dateOfBirth[index],
      grade: grade[index]
    }));
  };