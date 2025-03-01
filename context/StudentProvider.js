'use client'; // Client-side React component

/**
 * Student Context Provider
 * Author: Zakariya Osman
 * Date: 2025-02-23
 * Description: This component creates a React Context for managing student data within the application.
 *              It hgives functionality for fetching student data from a JSON file and allows adding new students.
 *              The provider ensures that all components consuming this context have access to student data.
 * Inputs: Fetches student data from an external JSON file and allows new student entries.
 * Processing: Initializes state with student data on mount, updates state when new students are added.
 * Output: Provides student data and functions for updating it to the entire application via Context.
 */


import React, { createContext, useState, useEffect, useContext } from "react";

// Create Context
const StudentContext = createContext();

// Provider Component
export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  // Fetch students from JSON on mount
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

  // Function to add a new student
  const addStudent = (newStudent) => {
    setStudents((prevStudents) => [
      ...prevStudents,
      { ...newStudent, id: prevStudents.length + 1 }
    ]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

// Custom Hook to Use Context
export const useStudents = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudents must be used in a StudentProvider");
  }
  return context;
};
