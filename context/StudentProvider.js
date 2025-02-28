'use client';
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
    throw new Error("useStudents must be used within a StudentProvider");
  }
  return context;
};
