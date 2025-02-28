'use client';
import React, { useState, useEffect } from "react";

const StudentInformation = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students data from public/students.json
    fetch("/students.json")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Student Information
      </h1>

      {students.length === 0 ? (
        <p className="text-center text-gray-500">No students found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {student.firstName} {student.lastName}
              </h2>
              <p className="text-gray-500 text-sm">
                ID:{" "}
                <span className="font-medium text-gray-700">{student.id}</span>
              </p>
              <p className="text-gray-500 text-sm">
                Date of Birth:{" "}
                <span className="font-medium text-gray-700">
                  {student.dateOfBirth}
                </span>
              </p>
              <p className="text-gray-500 text-sm">
                Grade:{" "}
                <span className="font-medium text-gray-700">{student.grade}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentInformation;
