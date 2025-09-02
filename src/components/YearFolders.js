import React from 'react';
import { Link } from 'react-router-dom';
import { yearLevels } from '../data/database';

const YearFolders = ({ user, onLogout }) => {
  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1>Student Records by Academic Year</h1>
              <p>Select an academic year to view student records</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <Link 
                to="/dashboard" 
                className="btn"
                style={{ 
                  background: 'rgba(255,255,255,0.2)', 
                  color: 'white',
                  border: '2px solid white',
                  textDecoration: 'none'
                }}
              >
                ← Dashboard
              </Link>
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
        {/* Search Bar */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <input
            type="text"
            placeholder="🔍 Search academic years..."
            className="search-bar"
            style={{ maxWidth: '500px' }}
          />
        </div>

        {/* Processing Icon Info */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '20px',
          padding: '15px',
          background: '#e3f2fd',
          borderRadius: '10px'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💻</div>
          <p style={{ margin: 0, color: '#1976d2' }}>
            <strong>THIS ICON IS FOR THE PROCESS (AUTOMATED EVALUATION/CALCULATION) OF GRADES TO INPUT.</strong>
          </p>
        </div>

        {/* Year Folders Grid */}
        <div className="folder-grid">
          {yearLevels.map((year, index) => (
            <Link 
              key={year} 
              to={`/students/${year}`} 
              style={{ textDecoration: 'none' }}
            >
              <div className="folder-card">
                <div className="folder-icon">
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#667eea',
                    textAlign: 'center'
                  }}>
                    ZSCMST<br/>LOGO
                  </div>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{year}</h3>
                <p style={{ color: '#666', margin: 0 }}>
                  Academic Year {year}
                </p>
                <div style={{ 
                  marginTop: '15px',
                  padding: '8px 16px',
                  background: '#f0f0f0',
                  borderRadius: '20px',
                  fontSize: '14px',
                  color: '#333'
                }}>
                  Click to view students
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Instructions */}
        <div className="card" style={{ marginTop: '40px' }}>
          <h2>Instructions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
            <div>
              <h4>📁 Select Academic Year</h4>
              <p>Click on any folder above to view students enrolled in that academic year.</p>
            </div>
            <div>
              <h4>👥 Manage Students</h4>
              <p>View student profiles, enter grades, and manage academic records.</p>
            </div>
            <div>
              <h4>💻 Process Grades</h4>
              <p>Use the automated processing feature to calculate GPAs and determine academic standing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearFolders;
