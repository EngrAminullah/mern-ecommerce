import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-700 text-white">
      <Link to="/" className="text-2xl font-bold">MERNShop</Link>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/cart" className="hover:text-gray-300">Cart</Link>
        {/* Admin Link */}
        <Link to="/admin" className="hover:text-gray-300">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;
