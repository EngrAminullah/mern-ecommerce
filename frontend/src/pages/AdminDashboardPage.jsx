import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboardPage = () => {
  return (
    <div className="py-12 px-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Admin Dashboard</h1>

      <div className="flex justify-center gap-8">
        <Link to="/admin/products" className="bg-blue-600 text-white py-3 px-6 rounded-lg text-xl">
          Manage Products
        </Link>
        <Link to="/admin/orders" className="bg-blue-600 text-white py-3 px-6 rounded-lg text-xl">
          Manage Orders
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
