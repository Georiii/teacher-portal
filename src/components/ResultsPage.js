import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { academicStandingRules } from '../data/database';

const ResultsPage = ({ students, user, onLogout }) => {
  const [processedStudents, setProcessedStudents] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  // Calculate GPA for a student
  const calculateGPA = (student) => {
    if (!student.grades || Object.keys(student.grades).length === 0) {
      return 0;
    }

    let totalWeightedGrades = 0;
    let totalUnits = 0;

    Object.values(student.grades).forEach(subject => {
      totalWeightedGrades += subject.grade * subject.units;
      totalUnits += subject.units;
    });

    return totalUnits > 0 ? (totalWeightedGrades / totalUnits) : 0;
  };

  // Determine academic status based on GPA
  const determineStatus = (gpa) => {
    if (gpa <= academicStandingRules.retention) {
      return 'passed';
    } else if (gpa <= academicStandingRules.passing) {
      return 'retained';
    } else {
      return 'dismissed';
    }
  };

  // Process all students on component mount
  useEffect(() => {
    const processed = students.map(student => {
      const gpa = calculateGPA(student);
      const status = determineStatus(gpa);
      return {
        ...student,
        gpa: gpa || student.gpa,
        status: status || student.status
      };
    });
    setProcessedStudents(processed);
  }, [students]);

  // Filter results based on status and search term
  useEffect(() => {
    let filtered = processedStudents;

    // Filter by status
    if (filter !== 'all') {
      filtered = filtered.filter(student => student.status === filter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.yearLevel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.course.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredResults(filtered);
  }, [processedStudents, filter, searchTerm]);

  const getStatusBadge = (status) => {
    const statusConfig = {
      passed: { class: 'status-passed', text: 'PASSED', color: '#155724' },
      retained: { class: 'status-retained', text: 'RETAINED', color: '#856404' },
      dismissed: { class: 'status-dismissed', text: 'DISMISSED', color: '#721c24' }
    };

    const config = statusConfig[status];
    if (!config) return null;

    return (
      <span className={`status-badge ${config.class}`}>
        {config.text}
      </span>
    );
  };

  const exportResults = () => {
    const csvContent = [
      ['Student Name', 'Student ID', 'Course', 'Year Level', 'GPA', 'Status'],
      ...filteredResults.map(student => [
        student.name,
        student.id,
        student.course,
        student.yearLevel,
        student.gpa ? student.gpa.toFixed(2) : 'N/A',
        student.status ? student.status.toUpperCase() : 'PENDING'
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `student_evaluation_results_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const statistics = {
    total: processedStudents.length,
    passed: processedStudents.filter(s => s.status === 'passed').length,
    retained: processedStudents.filter(s => s.status === 'retained').length,
    dismissed: processedStudents.filter(s => s.status === 'dismissed').length,
    pending: processedStudents.filter(s => !s.status).length
  };

  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1>Evaluation Results</h1>
              <p>Academic standing results for all students</p>
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
        {/* Statistics Overview */}
        <div className="card">
          <h2>Overall Statistics</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', marginTop: '20px' }}>
            <div style={{ textAlign: 'center', padding: '20px', background: '#e3f2fd', borderRadius: '10px' }}>
              <h2 style={{ color: '#1976d2', margin: '0 0 10px 0' }}>{statistics.total}</h2>
              <p style={{ color: '#1976d2', margin: 0 }}>Total Students</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', background: '#d4edda', borderRadius: '10px' }}>
              <h2 style={{ color: '#155724', margin: '0 0 10px 0' }}>{statistics.passed}</h2>
              <p style={{ color: '#155724', margin: 0 }}>Passed</p>
              <small style={{ color: '#155724' }}>({statistics.total > 0 ? ((statistics.passed / statistics.total) * 100).toFixed(1) : 0}%)</small>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', background: '#fff3cd', borderRadius: '10px' }}>
              <h2 style={{ color: '#856404', margin: '0 0 10px 0' }}>{statistics.retained}</h2>
              <p style={{ color: '#856404', margin: 0 }}>Retained</p>
              <small style={{ color: '#856404' }}>({statistics.total > 0 ? ((statistics.retained / statistics.total) * 100).toFixed(1) : 0}%)</small>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', background: '#f8d7da', borderRadius: '10px' }}>
              <h2 style={{ color: '#721c24', margin: '0 0 10px 0' }}>{statistics.dismissed}</h2>
              <p style={{ color: '#721c24', margin: 0 }}>Dismissed</p>
              <small style={{ color: '#721c24' }}>({statistics.total > 0 ? ((statistics.dismissed / statistics.total) * 100).toFixed(1) : 0}%)</small>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', background: '#e2e3e5', borderRadius: '10px' }}>
              <h2 style={{ color: '#383d41', margin: '0 0 10px 0' }}>{statistics.pending}</h2>
              <p style={{ color: '#383d41', margin: 0 }}>Pending</p>
              <small style={{ color: '#383d41' }}>({statistics.total > 0 ? ((statistics.pending / statistics.total) * 100).toFixed(1) : 0}%)</small>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="card">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <h2>Results List</h2>
            <button
              onClick={exportResults}
              className="btn btn-success"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              📊 Export CSV
            </button>
          </div>

          {/* Filter Buttons */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setFilter('all')}
              className={`btn ${filter === 'all' ? 'btn-primary' : ''}`}
              style={filter !== 'all' ? { background: '#e9ecef', color: '#333' } : {}}
            >
              All ({statistics.total})
            </button>
            <button
              onClick={() => setFilter('passed')}
              className={`btn ${filter === 'passed' ? 'btn-success' : ''}`}
              style={filter !== 'passed' ? { background: '#e9ecef', color: '#333' } : {}}
            >
              Passed ({statistics.passed})
            </button>
            <button
              onClick={() => setFilter('retained')}
              className={`btn ${filter === 'retained' ? 'btn-warning' : ''}`}
              style={filter !== 'retained' ? { background: '#e9ecef', color: '#333' } : {}}
            >
              Retained ({statistics.retained})
            </button>
            <button
              onClick={() => setFilter('dismissed')}
              className={`btn ${filter === 'dismissed' ? 'btn-danger' : ''}`}
              style={filter !== 'dismissed' ? { background: '#e9ecef', color: '#333' } : {}}
            >
              Dismissed ({statistics.dismissed})
            </button>
          </div>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="🔍 Search by name, ID, year level, or course..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
            style={{ marginBottom: '20px' }}
          />

          {/* Results Table */}
          {filteredResults.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              <h3>No results found</h3>
              <p>Try adjusting your search criteria or filters.</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>STUDENT NAME</th>
                    <th>STUDENT ID</th>
                    <th>COURSE</th>
                    <th>YEAR LEVEL</th>
                    <th>GPA</th>
                    <th>STATUS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredResults.map((student, index) => (
                    <tr key={student.id}>
                      <td>
                        <strong>{student.name}</strong>
                        <br />
                        <small style={{ color: '#666' }}>Age: {student.age}, {student.sex}</small>
                      </td>
                      <td>{student.id}</td>
                      <td>
                        <small>{student.course}</small>
                      </td>
                      <td>{student.yearLevel}<br/><small>{student.semester}</small></td>
                      <td>
                        {student.gpa ? (
                          <span style={{ 
                            fontWeight: 'bold',
                            fontSize: '16px',
                            color: student.gpa <= 2.25 ? '#155724' : 
                                   student.gpa <= 2.50 ? '#856404' : '#721c24'
                          }}>
                            {student.gpa.toFixed(2)}
                          </span>
                        ) : (
                          <span style={{ color: '#666', fontStyle: 'italic' }}>Not calculated</span>
                        )}
                      </td>
                      <td>
                        {getStatusBadge(student.status)}
                      </td>
                      <td>
                        <Link 
                          to={`/evaluation/${student.id}`}
                          className="btn btn-primary"
                          style={{ fontSize: '12px', padding: '6px 12px' }}
                        >
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div style={{ marginTop: '20px', textAlign: 'center', color: '#666' }}>
            Showing {filteredResults.length} of {statistics.total} students
          </div>
        </div>

        {/* Academic Standing Rules */}
        <div className="card">
          <h3>Academic Standing Criteria (CELA)</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
            <div style={{ padding: '20px', background: '#d4edda', borderRadius: '10px' }}>
              <h4 style={{ color: '#155724', marginBottom: '15px' }}>✅ PASSED</h4>
              <p style={{ color: '#155724', margin: '0 0 10px 0', fontSize: '18px', fontWeight: 'bold' }}>
                GPA ≤ 2.25
              </p>
              <p style={{ color: '#155724', margin: 0, fontSize: '14px' }}>
                Student meets academic standards and can continue in current program without restrictions.
              </p>
            </div>
            
            <div style={{ padding: '20px', background: '#fff3cd', borderRadius: '10px' }}>
              <h4 style={{ color: '#856404', marginBottom: '15px' }}>⚠️ RETAINED</h4>
              <p style={{ color: '#856404', margin: '0 0 10px 0', fontSize: '18px', fontWeight: 'bold' }}>
                2.25 &lt; GPA ≤ 2.50
              </p>
              <p style={{ color: '#856404', margin: 0, fontSize: '14px' }}>
                Student can remain in CELA but may need to change major or take remedial actions.
              </p>
            </div>
            
            <div style={{ padding: '20px', background: '#f8d7da', borderRadius: '10px' }}>
              <h4 style={{ color: '#721c24', marginBottom: '15px' }}>❌ DISMISSED</h4>
              <p style={{ color: '#721c24', margin: '0 0 10px 0', fontSize: '18px', fontWeight: 'bold' }}>
                GPA &gt; 2.50
              </p>
              <p style={{ color: '#721c24', margin: 0, fontSize: '14px' }}>
                Student no longer meets CELA academic standards and cannot continue in the department.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
