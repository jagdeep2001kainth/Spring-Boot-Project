import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployeeDashboard.css';
export default function EmployeeDashboard() {
const navigate = useNavigate();
useEffect(() => {
const role = localStorage.getItem('userRole');
if (role !== 'EMPLOYEE') {
alert('Access denied. Please login as employee.');
navigate('/login');
}
}, [navigate]);

 // Function to redirect to employee dashboard
  const goToEmployeeDashboard = () => {
    window.location.href = "http://localhost:8080/employee-dashboard.html"; 
  };

return (
    <div>
      <h1>Employee Dashboard</h1>
      <p>Welcome</p>

      {/* Redirect Button */}
      <button onClick={goToEmployeeDashboard} className="redirect-button">
        Go to Employee Dashboard
      </button>
    </div>
  );
}