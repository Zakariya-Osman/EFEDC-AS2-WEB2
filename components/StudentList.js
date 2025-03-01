'use client';  // This is used to mark the file as a client-side component

import React, { useState } from 'react';

//fetching student data
const useStudents = () => {
  const students = [
    {
      id: 1,
      firstName: "Zack",
      lastName: "Osman",
      dateOfBirth: "2007-05-12",
      grade: "10"
    },
    {
      id: 2,
      firstName: "Jakob",
      lastName: "Howard",
      dateOfBirth: "2008-09-23",
      grade: "9"
    },
    {
      id: 3,
      firstName: "Kenneth",
      lastName: "Cellona",
      dateOfBirth: "2006-03-18",
      grade: "11"
    },
    {
      id: 4,
      firstName: "Simranjit",
      lastName: " Kaur Gill",
      dateOfBirth: "2004-07-07",
      grade: "12"
    },
    {
      id: 5,
      firstName: "Ash",
      lastName: "Ketchum",
      dateOfBirth: "2005-11-22",
      grade: "10"
    }
  ];
  return { students };
};

const StudentList = () => {
  
  const { students } = useStudents();
  const [searchTerm, setSearchTerm] = useState('');


  const filteredStudents = students.filter(student =>
    `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Student Information</h1>
      <input
        type="text"
        className="border p-2 mb-4 w-full"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredStudents.length === 0 ? (
        <p className="text-center text-gray-500">No students found.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStudents.map(({ id, firstName, lastName, dateOfBirth, grade }) => (
            <div
              key={id}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition"
            >
              <h2 className="text-lg font-semibold text-gray-800">{firstName} {lastName}</h2>
              <p className="text-sm text-gray-500">
                ID: <span className="font-medium text-gray-700">{id}</span>
              </p>
              <p className="text-sm text-gray-500">
                DOB: <span className="font-medium text-gray-700">{dateOfBirth}</span>
              </p>
              <p className="text-sm text-gray-500">
                Grade: <span className="font-medium text-gray-700">{grade}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentList;
