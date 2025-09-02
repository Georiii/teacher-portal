import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1>Digital Students Evaluation System</h1>
              <p>Zamboanga State College of Marine Sciences and Technology</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span>Welcome, {user?.username}!</span>
              <button 
                onClick={onLogout}
                className="btn"
                style={{ 
                  background: 'rgba(255,255,255,0.2)', 
                  color: 'white',
                  border: '2px solid white'
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Main Navigation Cards */}
        <div className="folder-grid">
          <Link to="/year-folders" style={{ textDecoration: 'none' }}>
            <div className="folder-card">
              <div className="folder-icon">
                📁
              </div>
              <h3>Student Records</h3>
              <p>Browse students by academic year and manage their profiles</p>
            </div>
          </Link>

          <Link to="/results" style={{ textDecoration: 'none' }}>
            <div className="folder-card">
              <div className="folder-icon">
                📊
              </div>
              <h3>Evaluation Results</h3>
              <p>View processed results and academic standing status</p>
            </div>
          </Link>

          <div className="folder-card" style={{ opacity: 0.7, cursor: 'not-allowed' }}>
            <div className="folder-icon">
              ⚙️
            </div>
            <h3>Automated Processing</h3>
            <p>Bulk process grades and generate reports</p>
            <small style={{ color: '#666', marginTop: '10px', display: 'block' }}>
              Click the processing icon in student lists
            </small>
          </div>
        </div>

        {/* System Information */}
        <div className="card">
          <h2>System Overview</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)', 
              color: 'white', 
              padding: '20px', 
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h3>INPUT</h3>
              <p>• Student Profiles</p>
              <p>• Final Grades</p>
              <p>• Academic Standing Rules</p>
            </div>
            
            <div style={{ 
              background: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)', 
              color: 'white', 
              padding: '20px', 
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h3>PROCESS</h3>
              <p>• Calculate GPA</p>
              <p>• Compare against retention criteria</p>
              <p>• Apply academic rules</p>
            </div>
            
            <div style={{ 
              background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)', 
              color: 'white', 
              padding: '20px', 
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h3>OUTPUT</h3>
              <p>• Passed Students</p>
              <p>• Retained Students</p>
              <p>• Dismissed Students</p>
            </div>
          </div>
        </div>

        {/* Academic Standing Rules */}
        <div className="card">
          <h2>Academic Standing Rules (CELA)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
            <div style={{ padding: '15px', background: '#d4edda', borderRadius: '8px', textAlign: 'center' }}>
              <h4 style={{ color: '#155724', marginBottom: '10px' }}>PASSED</h4>
              <p style={{ color: '#155724', margin: 0 }}>GPA ≤ 2.25</p>
              <small style={{ color: '#155724' }}>Excellent to Satisfactory</small>
            </div>
            <div style={{ padding: '15px', background: '#fff3cd', borderRadius: '8px', textAlign: 'center' }}>
              <h4 style={{ color: '#856404', marginBottom: '10px' }}>RETAINED</h4>
              <p style={{ color: '#856404', margin: 0 }}>2.25 &lt; GPA ≤ 2.50</p>
              <small style={{ color: '#856404' }}>Different major option</small>
            </div>
            <div style={{ padding: '15px', background: '#f8d7da', borderRadius: '8px', textAlign: 'center' }}>
              <h4 style={{ color: '#721c24', marginBottom: '10px' }}>DISMISSED</h4>
              <p style={{ color: '#721c24', margin: 0 }}>GPA &gt; 2.50</p>
              <small style={{ color: '#721c24' }}>No longer in CELA</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
