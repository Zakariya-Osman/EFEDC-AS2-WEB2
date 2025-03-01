import React from 'react'

/**
 * Navbar Component
 * 
 * Name: Kenneth Cellona
 * Date: March 1, 2025
 * Description:
 * A simple navigation bar with links to Home, Add Student, About, and Student List.
 * It's styled with Tailwind CSS and stays fixed at the top of the page.
 * 
 * No user input, just a static menu. Outputs a responsive navbar.
 */

const Navbar = () => {
  return (
    // Navigation bar with fixed position and padding
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