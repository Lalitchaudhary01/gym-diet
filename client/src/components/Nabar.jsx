import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-green-600">
            FitAI
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#dashboard" className="hover:text-green-600">Dashboard</a>
            <a href="#diet" className="hover:text-green-600">Diet Planner</a>
            <a href="#recipes" className="hover:text-green-600">Recipes</a>
            <a href="#shopping" className="hover:text-green-600">Shopping List</a>
            <a href="#tracker" className="hover:text-green-600">Analytics</a>
          </div>

          {/* Profile + Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-lg">
          <a href="#dashboard" className="block hover:text-green-600">Dashboard</a>
          <a href="#diet" className="block hover:text-green-600">Diet Planner</a>
          <a href="#recipes" className="block hover:text-green-600">Recipes</a>
          <a href="#shopping" className="block hover:text-green-600">Shopping List</a>
          <a href="#tracker" className="block hover:text-green-600">Analytics</a>
          <button className="w-full px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
