// src/Components/CustomerDashboard.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomerDashboard.css'; 
export default function CustomerDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (role !== 'CUSTOMER') {
      alert('Access denied. Please login as a customer.');
      navigate('/login');
    }
  }, [navigate]);

  // Function to redirect to customer dashboard
  const goToCustomerDashboard = () => {
    window.location.href = "http://localhost:8080/customer.html"; 
  };

  return (
    <div>
      <h1>Customer Dashboard</h1>
      <p>Welcome, valued customer!</p>
       {/* Redirect Button */}
      <button onClick={goToCustomerDashboard} className="redirect-button">
        Go to Customer Dashboard
      </button>
    </div>
  );
}
