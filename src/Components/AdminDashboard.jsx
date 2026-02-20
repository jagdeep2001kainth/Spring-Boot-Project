// src/Components/AdminDashboard.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';
export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (role !== 'ADMIN') {
      alert('Access denied. Please login as admin.');
      navigate('/login');
    }
  }, [navigate]);

  // Function to redirect to employee dashboard
  const goToAdminDashboard = () => {
    window.location.href = "http://localhost:8080/admin-dashboard.html"; 
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, administrator!</p>

      {/* Redirect Button */}
      <button onClick={goToAdminDashboard} className="redirect-button">
        Go to Admin Dashboard
      </button>
    </div>
  );
}
