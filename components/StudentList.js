/**
 * StudentForm Component
 * Author: Simranjit Kaur Gill
 * Date: 3/1/2025
 * Description: This React component displays a list of students and allows users to search by name. It retrieves student data from context and filters the list based on user input.  
 * Inputs: A list of students from context and a search term entered by the user.  
 * Processing: Filters the student list based on the search term (irst and last names).  
 * Output: outputs a list of students or a message if no matches are found.  
 */


'use client'; // This directive indicates that this file is part of the client-side React application.

import React, { useState } from "react"; // Import React and the useState hook from React
import { useStudents } from "../context/StudentProvider"; // Import custom hook to access student data from context

const StudentList = () => {
 // Access the list of students from the StudentProvider context
 const { students } = useStudents();
 // State to store the search term entered by the user
 const [searchTerm, setSearchTerm] = useState('');
 // Filter the students list based on the search term (by matching first name and last name)
 const filteredStudents = students.filter(student =>
   `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
 );
 return (
<div className="p-6 max-w-4xl mx-auto"> {/* Container with padding and centering */}
<h1 className="text-2xl font-bold text-center mb-4">Student Information</h1>
     {/* Search input field for filtering students */}
<input
       type="text"
       className="border p-2 mb-4 w-full"
       placeholder="Search by name"
       value={searchTerm} // The value of the input field is controlled by the `searchTerm` state
       onChange={(e) => setSearchTerm(e.target.value)} // Update `searchTerm` when the user types
     />
     {/* If no students match the search term, show a message */}
     {filteredStudents.length === 0 ? (
<p className="text-center text-gray-500">No students found.</p>
     ) : (
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"> {/* Display students in a responsive grid */}
         {/* Iterate through filtered students and display each student's details */}
         {filteredStudents.map(({ id, firstName, lastName, dateOfBirth, grade }) => (
<div key={id} className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition">
             {/* Display student details */}
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
export default StudentList; // Export the component to be used in other parts of the application
