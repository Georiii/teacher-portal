import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { academicStandingRules } from '../data/database';

const StudentList = ({ students, user, onLogout }) => {
  const { year } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [processedStudents, setProcessedStudents] = useState(students);

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

  // Process all students (automated processing)
  const processAllStudents = () => {
    const processed = processedStudents.map(student => {
      const gpa = calculateGPA(student);
      const status = determineStatus(gpa);
      return {
        ...student,
        gpa: gpa,
        status: status
      };
    });
    setProcessedStudents(processed);
    alert('All students processed successfully! GPAs calculated and academic standing determined.');
  };

  useEffect(() => {
    // Filter students by year and search term
    const yearFilteredStudents = processedStudents.filter(student => {
      const studentYear = student.id.substring(0, 4);
      const targetYear = year.substring(0, 4);
      return studentYear === targetYear;
    });

    const searchFiltered = yearFilteredStudents.filter(student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.yearLevel.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredStudents(searchFiltered);
  }, [year, searchTerm, processedStudents]);

  const getStatusBadge = (status) => {
    if (!status) return null;
    
    const statusConfig = {
      passed: { class: 'status-passed', text: 'PASSED' },
      retained: { class: 'status-retained', text: 'RETAINED' },
      dismissed: { class: 'status-dismissed', text: 'DISMISSED' }
    };

    const config = statusConfig[status];
    return (
      <span className={`status-badge ${config.class}`}>
        {config.text}
      </span>
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1>Students - Academic Year {year}</h1>
              <p>Manage student records and evaluations</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <Link 
                to="/year-folders" 
                className="btn"
                style={{ 
                  background: 'rgba(255,255,255,0.2)', 
                  color: 'white',
                  border: '2px solid white',
                  textDecoration: 'none'
                }}
              >
                ← Back to Years
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
        {/* Search and Process Section */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '30px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <input
            type="text"
            placeholder="🔍 Search students by name, ID, or year level..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
            style={{ flexGrow: 1, minWidth: '300px' }}
          />
          
          <button
            onClick={processAllStudents}
            className="btn btn-warning"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              fontSize: '16px',
              padding: '12px 20px'
            }}
          >
            💻 Process All Grades
          </button>
        </div>

        {/* Students Table */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2>STUDENT RECORDS</h2>
            <div style={{ fontSize: '14px', color: '#666' }}>
              Found {filteredStudents.length} student(s)
            </div>
          </div>

          {filteredStudents.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              <h3>No students found</h3>
              <p>Try adjusting your search criteria or select a different academic year.</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>STUDENT NAME</th>
                    <th>STUDENT ID#</th>
                    <th>SCHOOL YEAR</th>
                    <th>SEMESTER</th>
                    <th>GPA</th>
                    <th>STATUS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student, index) => (
                    <tr key={student.id}>
                      <td>
                        <strong>{student.name}</strong>
                        <br />
                        <small style={{ color: '#666' }}>{student.course}</small>
                      </td>
                      <td>{student.id}</td>
                      <td>{student.yearLevel}</td>
                      <td>{student.semester}</td>
                      <td>
                        {student.gpa ? (
                          <span style={{ 
                            fontWeight: 'bold',
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
                          style={{ fontSize: '14px', padding: '8px 16px' }}
                        >
                          View/Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Summary Statistics */}
        {filteredStudents.length > 0 && (
          <div className="card" style={{ marginTop: '20px' }}>
            <h3>Academic Standing Summary</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', marginTop: '20px' }}>
              <div style={{ textAlign: 'center', padding: '20px', background: '#d4edda', borderRadius: '10px' }}>
                <h2 style={{ color: '#155724', margin: '0 0 10px 0' }}>
                  {filteredStudents.filter(s => s.status === 'passed').length}
                </h2>
                <p style={{ color: '#155724', margin: 0 }}>Passed</p>
              </div>
              <div style={{ textAlign: 'center', padding: '20px', background: '#fff3cd', borderRadius: '10px' }}>
                <h2 style={{ color: '#856404', margin: '0 0 10px 0' }}>
                  {filteredStudents.filter(s => s.status === 'retained').length}
                </h2>
                <p style={{ color: '#856404', margin: 0 }}>Retained</p>
              </div>
              <div style={{ textAlign: 'center', padding: '20px', background: '#f8d7da', borderRadius: '10px' }}>
                <h2 style={{ color: '#721c24', margin: '0 0 10px 0' }}>
                  {filteredStudents.filter(s => s.status === 'dismissed').length}
                </h2>
                <p style={{ color: '#721c24', margin: 0 }}>Dismissed</p>
              </div>
              <div style={{ textAlign: 'center', padding: '20px', background: '#e2e3e5', borderRadius: '10px' }}>
                <h2 style={{ color: '#383d41', margin: '0 0 10px 0' }}>
                  {filteredStudents.filter(s => !s.status).length}
                </h2>
                <p style={{ color: '#383d41', margin: 0 }}>Pending</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList;
