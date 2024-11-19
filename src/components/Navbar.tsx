import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black border-b border-red-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-red-600 hover:text-red-500">
            <Book size={24} />
            <span className="font-bold text-lg">Biblioteca Libertaria</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="flex items-center space-x-1 text-gray-300 hover:text-red-500">
              <Home size={18} />
              <span>Inicio</span>
            </Link>
            <Link to="/books" className="flex items-center space-x-1 text-gray-300 hover:text-red-500">
              <Book size={18} />
              <span>Libros</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;