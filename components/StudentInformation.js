'use client';
import React, { useState, useEffect } from "react";

const StudentInformation = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("/students.json");
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Student Information</h1>
      {students.length === 0 ? (
        <p className="text-center text-gray-500">No students found.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {students.map(({ id, firstName, lastName, dateOfBirth, grade }) => (
            <div key={id} className="bg-white shadow rounded p-4 border">
              <h2 className="text-lg font-semibold">{firstName} {lastName}</h2>
              <p className="text-sm text-gray-600">ID: {id}</p>
              <p className="text-sm text-gray-600">DOB: {dateOfBirth}</p>
              <p className="text-sm text-gray-600">Grade: {grade}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentInformation;