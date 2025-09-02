import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { academicStandingRules } from '../data/database';

const EvaluationForm = ({ students, onUpdateStudent, user, onLogout }) => {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [grades, setGrades] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [gpa, setGpa] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const foundStudent = students.find(s => s.id === studentId);
    if (foundStudent) {
      setStudent(foundStudent);
      setGrades(foundStudent.grades || {});
      if (foundStudent.gpa) {
        setGpa(foundStudent.gpa);
        setStatus(foundStudent.status);
      }
    }
  }, [studentId, students]);

  const calculateGPA = (currentGrades) => {
    if (!currentGrades || Object.keys(currentGrades).length === 0) {
      return 0;
    }

    let totalWeightedGrades = 0;
    let totalUnits = 0;

    Object.values(currentGrades).forEach(subject => {
      if (subject.grade && subject.units) {
        totalWeightedGrades += subject.grade * subject.units;
        totalUnits += subject.units;
      }
    });

    return totalUnits > 0 ? (totalWeightedGrades / totalUnits) : 0;
  };

  const determineStatus = (gpa) => {
    if (gpa <= academicStandingRules.retention) {
      return 'passed';
    } else if (gpa <= academicStandingRules.passing) {
      return 'retained';
    } else {
      return 'dismissed';
    }
  };

  const handleGradeChange = (courseCode, field, value) => {
    const updatedGrades = {
      ...grades,
      [courseCode]: {
        ...grades[courseCode],
        [field]: field === 'grade' ? parseFloat(value) || 0 : value
      }
    };
    setGrades(updatedGrades);

    // Recalculate GPA in real-time
    const newGpa = calculateGPA(updatedGrades);
    setGpa(newGpa);
    setStatus(determineStatus(newGpa));
  };

  const addNewSubject = () => {
    const courseCode = prompt('Enter course code (e.g., NGEC 4):');
    if (courseCode && !grades[courseCode]) {
      const description = prompt('Enter course description:');
      const units = parseInt(prompt('Enter units:')) || 3;
      
      setGrades(prev => ({
        ...prev,
        [courseCode]: {
          units: units,
          grade: 0,
          description: description || ''
        }
      }));
    }
  };

  const removeSubject = (courseCode) => {
    if (window.confirm(`Remove ${courseCode} from this student's record?`)) {
      const updatedGrades = { ...grades };
      delete updatedGrades[courseCode];
      setGrades(updatedGrades);
      
      const newGpa = calculateGPA(updatedGrades);
      setGpa(newGpa);
      setStatus(determineStatus(newGpa));
    }
  };

  const handleSave = () => {
    const updatedStudent = {
      ...student,
      grades: grades,
      gpa: gpa,
      status: status
    };
    
    onUpdateStudent(updatedStudent);
    setIsEditing(false);
    alert('Student record updated successfully!');
  };

  const getStatusInfo = (status) => {
    const statusConfig = {
      passed: { 
        color: '#155724', 
        background: '#d4edda', 
        text: 'PASSED',
        description: 'Student meets academic standards and can continue in current program.'
      },
      retained: { 
        color: '#856404', 
        background: '#fff3cd', 
        text: 'RETAINED',
        description: 'Student can remain in CELA but may need to change major.'
      },
      dismissed: { 
        color: '#721c24', 
        background: '#f8d7da', 
        text: 'DISMISSED',
        description: 'Student no longer meets CELA academic standards.'
      }
    };
    return statusConfig[status] || { color: '#666', background: '#f8f9fa', text: 'PENDING', description: 'Academic standing not yet determined.' };
  };

  if (!student) {
    return (
      <div className="container">
        <div className="card">
          <h2>Student not found</h2>
          <p>The requested student could not be found.</p>
          <button onClick={() => navigate('/year-folders')} className="btn btn-primary">
            Back to Year Folders
          </button>
        </div>
      </div>
    );
  }

  const statusInfo = getStatusInfo(status);
  const year = student.id.substring(0, 4) + '-' + (parseInt(student.id.substring(0, 4)) + 1);

  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1>Student Evaluation</h1>
              <p>{student.name} - {student.id}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <button 
                onClick={() => navigate(`/students/${year}`)}
                className="btn"
                style={{ 
                  background: 'rgba(255,255,255,0.2)', 
                  color: 'white',
                  border: '2px solid white'
                }}
              >
                ← Back to Students
              </button>
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
        {/* Student Profile Card */}
        <div className="card">
          <h2>Student Profile</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
            <div>
              <strong>Name:</strong> {student.name}<br/>
              <strong>Student ID:</strong> {student.id}<br/>
              <strong>Age:</strong> {student.age}<br/>
              <strong>Sex:</strong> {student.sex}
            </div>
            <div>
              <strong>Course:</strong> {student.course}<br/>
              <strong>Year Level:</strong> {student.yearLevel}<br/>
              <strong>Semester:</strong> {student.semester}
            </div>
          </div>
        </div>

        {/* Academic Standing Card */}
        {gpa !== null && (
          <div className="card">
            <h2>Academic Standing</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
              <div style={{ 
                textAlign: 'center', 
                padding: '20px', 
                background: statusInfo.background, 
                borderRadius: '10px',
                border: `2px solid ${statusInfo.color}`
              }}>
                <h3 style={{ color: statusInfo.color, margin: '0 0 10px 0' }}>
                  GPA: {gpa.toFixed(2)}
                </h3>
                <div style={{ 
                  padding: '8px 16px', 
                  background: statusInfo.color, 
                  color: 'white',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  marginBottom: '10px'
                }}>
                  {statusInfo.text}
                </div>
                <p style={{ color: statusInfo.color, margin: 0, fontSize: '14px' }}>
                  {statusInfo.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Grades Evaluation Card */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2>Course Grades Evaluation</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              {!isEditing ? (
                <button 
                  onClick={() => setIsEditing(true)} 
                  className="btn btn-primary"
                >
                  Edit Grades
                </button>
              ) : (
                <>
                  <button 
                    onClick={addNewSubject} 
                    className="btn btn-success"
                  >
                    Add Subject
                  </button>
                  <button 
                    onClick={handleSave} 
                    className="btn btn-success"
                  >
                    Save Changes
                  </button>
                  <button 
                    onClick={() => setIsEditing(false)} 
                    className="btn"
                    style={{ background: '#6c757d', color: 'white' }}
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="table">
              <thead>
                <tr>
                  <th>COURSE CODE</th>
                  <th>COURSE DESCRIPTION</th>
                  <th>UNITS</th>
                  <th>GRADE</th>
                  <th>RESULT</th>
                  {isEditing && <th>ACTION</th>}
                </tr>
              </thead>
              <tbody>
                {Object.entries(grades).map(([courseCode, subject]) => (
                  <tr key={courseCode}>
                    <td>
                      <strong>{courseCode}</strong>
                    </td>
                    <td>
                      {isEditing ? (
                        <input
                          type="text"
                          value={subject.description || ''}
                          onChange={(e) => handleGradeChange(courseCode, 'description', e.target.value)}
                          className="form-control"
                          style={{ minWidth: '200px' }}
                        />
                      ) : (
                        subject.description || 'No description'
                      )}
                    </td>
                    <td>
                      {isEditing ? (
                        <input
                          type="number"
                          value={subject.units || ''}
                          onChange={(e) => handleGradeChange(courseCode, 'units', parseInt(e.target.value) || 0)}
                          className="form-control"
                          style={{ width: '80px' }}
                          min="1"
                          max="6"
                        />
                      ) : (
                        subject.units || 0
                      )}
                    </td>
                    <td>
                      {isEditing ? (
                        <input
                          type="number"
                          value={subject.grade || ''}
                          onChange={(e) => handleGradeChange(courseCode, 'grade', e.target.value)}
                          className="form-control"
                          style={{ width: '100px' }}
                          min="1.00"
                          max="5.00"
                          step="0.25"
                        />
                      ) : (
                        <span style={{ 
                          fontWeight: 'bold',
                          color: subject.grade <= 2.25 ? '#155724' : 
                                 subject.grade <= 2.50 ? '#856404' : '#721c24'
                        }}>
                          {subject.grade ? subject.grade.toFixed(2) : 'N/A'}
                        </span>
                      )}
                    </td>
                    <td>
                      <span style={{ 
                        fontSize: '12px',
                        color: subject.grade <= 2.50 ? '#155724' : '#721c24'
                      }}>
                        {subject.grade <= 2.50 ? 'PASSED' : 'FAILED'}
                      </span>
                    </td>
                    {isEditing && (
                      <td>
                        <button
                          onClick={() => removeSubject(courseCode)}
                          className="btn btn-danger"
                          style={{ fontSize: '12px', padding: '4px 8px' }}
                        >
                          Remove
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
              {Object.keys(grades).length > 0 && (
                <tfoot>
                  <tr style={{ backgroundColor: '#f8f9fa', fontWeight: 'bold' }}>
                    <td colSpan="2">TOTAL</td>
                    <td>{Object.values(grades).reduce((sum, subject) => sum + (subject.units || 0), 0)}</td>
                    <td colSpan={isEditing ? 3 : 2}>
                      GPA: {gpa ? gpa.toFixed(2) : 'Not calculated'}
                    </td>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>

          {Object.keys(grades).length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              <h3>No grades recorded</h3>
              <p>Click "Edit Grades" and then "Add Subject" to start adding course grades.</p>
            </div>
          )}
        </div>

        {/* Academic Standing Rules Reference */}
        <div className="card">
          <h3>CELA Academic Standing Rules</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
            <div style={{ padding: '15px', background: '#d4edda', borderRadius: '8px', textAlign: 'center' }}>
              <h4 style={{ color: '#155724', marginBottom: '10px' }}>PASSED</h4>
              <p style={{ color: '#155724', margin: 0 }}>GPA ≤ 2.25</p>
            </div>
            <div style={{ padding: '15px', background: '#fff3cd', borderRadius: '8px', textAlign: 'center' }}>
              <h4 style={{ color: '#856404', marginBottom: '10px' }}>RETAINED</h4>
              <p style={{ color: '#856404', margin: 0 }}>2.25 &lt; GPA ≤ 2.50</p>
            </div>
            <div style={{ padding: '15px', background: '#f8d7da', borderRadius: '8px', textAlign: 'center' }}>
              <h4 style={{ color: '#721c24', marginBottom: '10px' }}>DISMISSED</h4>
              <p style={{ color: '#721c24', margin: 0 }}>GPA &gt; 2.50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluationForm;
