'use client';
import React, { useState } from "react";
import { useStudents } from "../context/StudentProvider";

const StudentForm = () => {
  const { addStudent } = useStudents();
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    grade: ""
  });

  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newStudent.firstName || !newStudent.lastName || !newStudent.dateOfBirth || !newStudent.grade) {
      return;
    }

    addStudent(newStudent);

    setNewStudent({ firstName: "", lastName: "", dateOfBirth: "", grade: "" });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Add New Student</h1>
      <form className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition" onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <input type="text" name="firstName" placeholder="First Name" value={newStudent.firstName} onChange={handleChange} required className="p-2 border border-gray-300 rounded w-full"/>
          <input type="text" name="lastName" placeholder="Last Name" value={newStudent.lastName} onChange={handleChange} required className="p-2 border border-gray-300 rounded w-full"/>
          <input type="date" name="dateOfBirth" value={newStudent.dateOfBirth} onChange={handleChange} required className="p-2 border border-gray-300 rounded w-full"/>
          <input type="text" name="grade" placeholder="Grade" value={newStudent.grade} onChange={handleChange} required className="p-2 border border-gray-300 rounded w-full"/>
        </div>
        <button type="submit" className="mt-4 bg-gray-800 text-white px-4 py-2 rounded w-full hover:bg-gray-900 transition">Add Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
