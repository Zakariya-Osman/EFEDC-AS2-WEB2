import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full">
      <ul className="flex space-x-6 justify-center"> 
        <li className="text-white hover:underline cursor-pointer px-4">Home</li>
        <li className="text-white hover:underline cursor-pointer px-4">Add Student</li>
        <li className="text-white hover:underline cursor-pointer px-4">About</li>
        <li className="text-white hover:underline cursor-pointer px-4">Student List</li>
      </ul>
    </nav>
  )
}

export default Navbar