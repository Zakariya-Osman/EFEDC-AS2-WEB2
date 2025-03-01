'use client'; // Client-side React component

/**
 * StudentForm Component
 * Author: Zakariya Osman
 * Date: 2025-02-23
 * Description: This React component allows users to add new student records by filling out a form.
 *              The form collects the student's first name, last name, date of birth, and grade.
 *              When you submit, the student details are added to the application state through context.
 *              The form prevents submission if any field is empty and resets after successful submission.
 * Inputs: User enters first name, last name, date of birth, and grade.
 * Processing: Updates state as user inputs data, validates the form, and submits data to context.
 * Output: A new student record is added to the system, and the form resets.
 */


import React, { useState } from "react";
import { useStudents } from "../context/StudentProvider"; // Custom hook for student context

const StudentForm = () => {
  const { addStudent } = useStudents(); // Get the addStudent function from the context
  const [newStudent, setNewStudent] = useState({
    firstName: "", // Student's first name
    lastName: "", // Student's last name
    dateOfBirth: "", // Student's date of birth
    grade: "" // Student's grade
  });

  const handleChange = (e) => {
    // Update student object with new input value
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!newStudent.firstName || !newStudent.lastName || !newStudent.dateOfBirth || !newStudent.grade) {
      return; // If any field is missing, stop the function
    }

    addStudent(newStudent); // Add new student to the context

    // Reset the form fields after submission
    setNewStudent({ firstName: "", lastName: "", dateOfBirth: "", grade: "" });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto pt-20"> {/* Centered form container */}
      <h1 className="text-2xl font-bold text-center mb-4">Add New Student</h1> {/* Form title */}
      <form className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition" onSubmit={handleSubmit}>
        <div className="grid gap-4"> {/* Form input fields */}
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
