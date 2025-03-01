export default function Navbar() {
  return (
    <nav className="bg-purple-700 text-white py-4 w-full shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* School Name */}
        <h1 className="text-2xl font-bold">Somerset Alabama Igloo of Technology</h1>
        
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About Us</a></li>
          <li><a href="#" className="hover:text-gray-300">Academics</a></li>
          <li><a href="#" className="hover:text-gray-300">Admissions</a></li>
          <li><a href="#" className="hover:text-gray-300">Student Life</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
