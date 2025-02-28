'use client';
import React from "react";
import { useStudents } from "../context/StudentProvider";

const StudentList = () => {
  const { students } = useStudents();

  return (
    <div>
      StudentList
    </div>
  );
};

export default StudentList;
