// src/Components/ManagerDashboard.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ManagerDashboard.css';

export default function ManagerDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (role !== 'ROLE_MANAGER') {
      alert('Access denied. Please login as a customer.');
      navigate('/login');
    }
  }, [navigate]);

  // Function to redirect to employee dashboard
  const goToManagerDashboard = () => {
    window.location.href = "http://localhost:8080/Manager.html"; 
  };

  return (
    <div>
      <h1>Manager Dashboard</h1>
      <p>Welcome, Manager!</p>

      {/* Redirect Button */}
      <button onClick={goToManagerDashboard} className="redirect-button">
        Go to Manager Dashboard
      </button>


    </div>
  );
}
