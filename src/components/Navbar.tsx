import { FaSearch, FaShoppingCart, FaHeart } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">Bandage</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {['Home', 'Shop', 'About', 'Blog', 'Contact', 'Pages'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-800 hover:text-blue-600"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right Icons and Login */}
        <div className="flex items-center space-x-6">
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 hover:text-blue-600">
              <FaSearch />
            </span>
            <span className="text-gray-600 hover:text-blue-600">
              <FaShoppingCart />
            </span>
            <span className="text-gray-600 hover:text-blue-600">
              <FaHeart />
            </span>
          </div>

          {/* Login/Register */}
          <div>
            <Link href="/login" className="text-gray-800 hover:text-blue-600">
              Login / Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
