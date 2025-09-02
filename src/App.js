import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import EvaluationForm from './components/EvaluationForm';
import ResultsPage from './components/ResultsPage';
import YearFolders from './components/YearFolders';
import { students as initialStudents } from './data/database';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [students, setStudents] = useState(initialStudents);

  useEffect(() => {
    // Check if user is already logged in
    const savedAuth = localStorage.getItem('isAuthenticated');
    const savedUser = localStorage.getItem('currentUser');
    
    if (savedAuth === 'true' && savedUser) {
      setIsAuthenticated(true);
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setCurrentUser(user);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('currentUser', JSON.stringify(user));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
  };

  const updateStudent = (updatedStudent) => {
    setStudents(prevStudents => 
      prevStudents.map(student => 
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };

  const addStudent = (newStudent) => {
    setStudents(prevStudents => [...prevStudents, newStudent]);
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={<Dashboard user={currentUser} onLogout={handleLogout} />} 
          />
          <Route 
            path="/dashboard" 
            element={<Dashboard user={currentUser} onLogout={handleLogout} />} 
          />
          <Route 
            path="/year-folders" 
            element={<YearFolders user={currentUser} onLogout={handleLogout} />} 
          />
          <Route 
            path="/students/:year" 
            element={
              <StudentList 
                students={students} 
                user={currentUser} 
                onLogout={handleLogout} 
              />
            } 
          />
          <Route 
            path="/evaluation/:studentId" 
            element={
              <EvaluationForm 
                students={students} 
                onUpdateStudent={updateStudent}
                user={currentUser} 
                onLogout={handleLogout} 
              />
            } 
          />
          <Route 
            path="/results" 
            element={
              <ResultsPage 
                students={students} 
                user={currentUser} 
                onLogout={handleLogout} 
              />
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
