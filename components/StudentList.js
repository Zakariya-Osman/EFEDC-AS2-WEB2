'use client';
import React from "react";
import { useStudents } from "../context/StudentProvider";

const StudentList = () => {
  const { students } = useStudents();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Student Information</h1>
      {students.length === 0 ? (
        <p className="text-center text-gray-500">No students found.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {students.map(({ id, firstName, lastName, dateOfBirth, grade }) => (
            <div key={id} className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition">
              <h2 className="text-lg font-semibold text-gray-800">{firstName} {lastName}</h2>
              <p className="text-sm text-gray-500">ID: <span className="font-medium text-gray-700">{id}</span></p>
              <p className="text-sm text-gray-500">DOB: <span className="font-medium text-gray-700">{dateOfBirth}</span></p>
              <p className="text-sm text-gray-500">Grade: <span className="font-medium text-gray-700">{grade}</span></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentList;
