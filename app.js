// Global State Management
let currentUser = null;
let currentYear = null;
let currentStudentId = null;
let isEditing = false;
let currentFilter = 'all';

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    // Always start with login page - clear any previous sessions
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    currentUser = null;
    
    // Ensure login page is shown
    showLoginPage();

    // Add event listeners
    setupEventListeners();
});

// Event Listeners Setup
function setupEventListeners() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Search functionality
    const studentSearch = document.getElementById('studentSearch');
    if (studentSearch) {
        studentSearch.addEventListener('input', handleStudentSearch);
    }

    const resultsSearch = document.getElementById('resultsSearch');
    if (resultsSearch) {
        resultsSearch.addEventListener('input', handleResultsSearch);
    }
    
    const yearSearch = document.getElementById('yearSearch');
    if (yearSearch) {
        yearSearch.addEventListener('input', handleYearSearch);
    }
}

// Authentication Functions
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const loginBtn = document.getElementById('loginBtn');
    
    // Clear previous errors
    errorMessage.style.display = 'none';
    
    // Disable button and show loading
    loginBtn.disabled = true;
    loginBtn.textContent = 'Logging In...';
    
    // Simulate login delay
    setTimeout(() => {
        const user = database.users.find(u => u.username === username && u.password === password);
        
        if (user) {
            currentUser = user;
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('currentUser', JSON.stringify(user));
            showDashboard();
            updateWelcomeMessages();
        } else {
            errorMessage.textContent = 'Invalid username or password';
            errorMessage.style.display = 'block';
        }
        
        // Re-enable button
        loginBtn.disabled = false;
        loginBtn.textContent = 'LOG IN';
    }, 1000);
}

function logout() {
    currentUser = null;
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    showLoginPage();
}

// Page Navigation Functions
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

function showLoginPage() {
    showPage('loginPage');
}

function showDashboard() {
    showPage('dashboardPage');
    updateWelcomeMessages();
}

function showYearFolders() {
    showPage('yearFoldersPage');
    updateWelcomeMessages();
}

function showStudentList(year) {
    // Map academic years to year levels
    const yearMapping = {
        '2022-2023': 'First Year',
        '2021-2022': 'Second Year', 
        '2020-2021': 'Third Year',
        '2025-2026': 'Fourth Year'
    };
    
    const yearLevel = yearMapping[year] || year;
    currentYear = yearLevel;
    
    showPage('studentListPage');
    updateWelcomeMessages();
    
    // Update page title
    const title = document.getElementById('studentListTitle');
    if (title) {
        title.textContent = `${yearLevel} Students - Academic Year ${year}`;
    }
    
    // Load and display students
    loadStudentList();
}

function showEvaluation(studentId) {
    currentStudentId = studentId;
    showPage('evaluationPage');
    updateWelcomeMessages();
    loadStudentEvaluation();
}

function showResults() {
    showPage('resultsPage');
    updateWelcomeMessages();
    loadResultsPage();
}

function goBackToStudentList() {
    if (currentYear) {
        showStudentList(currentYear);
    } else {
        showYearFolders();
    }
}

// Update welcome messages across all pages
function updateWelcomeMessages() {
    const welcomeElements = [
        'welcomeMessage', 'welcomeMessage2', 'welcomeMessage3', 
        'welcomeMessage4', 'welcomeMessage5'
    ];
    
    welcomeElements.forEach(id => {
        const element = document.getElementById(id);
        if (element && currentUser) {
            element.textContent = `Welcome, ${currentUser.username}!`;
        }
    });
}

// Student List Functions
function loadStudentList() {
    const students = utils.filterStudentsByYear(currentYear);
    displayStudents(students);
    updateSummaryStats(students);
}

function displayStudents(students) {
    const container = document.getElementById('studentTableContainer');
    const countElement = document.getElementById('studentCount');
    
    if (!container) return;
    
    // Update count
    if (countElement) {
        countElement.textContent = `Found ${students.length} student(s)`;
    }
    
    if (students.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No students found</h3>
                <p>Try adjusting your search criteria or select a different academic year.</p>
            </div>
        `;
        return;
    }
    
    let tableHTML = `
        <div style="overflow-x: auto;">
            <table class="table">
                <thead>
                    <tr>
                        <th>STUDENT NAME</th>
                        <th>STUDENT ID#</th>
                        <th>SCHOOL YEAR</th>
                        <th>SEMESTER</th>
                        <th>GPA</th>
                        <th>STATUS</th>
                        <th>DEAN'S LIST</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    students.forEach(student => {
        const gpaColor = student.gpa ? 
            (student.gpa <= 2.25 ? '#155724' : 
             student.gpa <= 2.50 ? '#856404' : '#721c24') : '#666';
        
        tableHTML += `
            <tr>
                <td>
                    <strong>${student.name}</strong><br/>
                    <small style="color: #666;">${student.course}</small>
                </td>
                <td>${student.id}</td>
                <td>${student.yearLevel}</td>
                <td>${student.semester}</td>
                <td>
                    ${student.gpa ? 
                        `<span style="font-weight: bold; color: ${gpaColor};">${student.gpa.toFixed(2)}</span>` :
                        '<span style="color: #666; font-style: italic;">Not calculated</span>'
                    }
                </td>
                <td>${utils.getStatusBadge(student.status)}</td>
                <td>${utils.getDeansListBadge(student.gpa)}</td>
                <td>
                    <button onclick="showEvaluation('${student.id}')" class="btn btn-primary" style="font-size: 14px; padding: 8px 16px;">
                        View/Edit
                    </button>
                </td>
            </tr>
        `;
    });
    
    tableHTML += `
                </tbody>
            </table>
        </div>
    `;
    
    container.innerHTML = tableHTML;
}

function handleStudentSearch() {
    const searchTerm = document.getElementById('studentSearch').value.toLowerCase();
    const allStudents = utils.filterStudentsByYear(currentYear);
    
    // Enhanced search - search by name, ID, course, year level, status, and dean's list
    const filteredStudents = allStudents.filter(student => {
        const name = student.name.toLowerCase();
        const id = student.id.toLowerCase();
        const course = student.course.toLowerCase();
        const yearLevel = student.yearLevel.toLowerCase();
        const status = (student.status || '').toLowerCase();
        const isDeansList = utils.isDeansList(student.gpa) ? 'dean\'s list deans list' : '';
        
        return name.includes(searchTerm) || 
               id.includes(searchTerm) || 
               course.includes(searchTerm) ||
               yearLevel.includes(searchTerm) ||
               status.includes(searchTerm) ||
               isDeansList.includes(searchTerm);
    });
    
    displayStudents(filteredStudents);
    updateSummaryStats(filteredStudents);
    
    // Update search results count
    updateSearchResultsCount(filteredStudents.length, allStudents.length);
}

// Helper function to update search results count display
function updateSearchResultsCount(filtered, total) {
    // Add a search results indicator if it doesn't exist
    let countDisplay = document.querySelector('.search-results-count');
    if (!countDisplay) {
        const searchContainer = document.querySelector('.search-container') || document.querySelector('.search-bar');
        if (searchContainer) {
            countDisplay = document.createElement('div');
            countDisplay.className = 'search-results-count';
            countDisplay.style.cssText = 'font-size: 0.9em; color: #666; margin-top: 5px;';
            searchContainer.appendChild(countDisplay);
        }
    }
    
    if (countDisplay) {
        if (filtered === total) {
            countDisplay.textContent = `Showing all ${total} students`;
        } else {
            countDisplay.textContent = `Showing ${filtered} of ${total} students`;
        }
    }
}

function updateResultsSearchCount(filtered, total) {
    // Add a search results indicator if it doesn't exist
    let countDisplay = document.querySelector('.results-search-count');
    if (!countDisplay) {
        const searchContainer = document.querySelector('#resultsPage .search-container') || document.querySelector('#resultsPage .search-bar');
        if (searchContainer) {
            countDisplay = document.createElement('div');
            countDisplay.className = 'results-search-count';
            countDisplay.style.cssText = 'font-size: 0.9em; color: #666; margin-top: 5px;';
            searchContainer.appendChild(countDisplay);
        }
    }
    
    if (countDisplay) {
        if (filtered === total) {
            countDisplay.textContent = `Showing all ${total} results`;
        } else {
            countDisplay.textContent = `Showing ${filtered} of ${total} results`;
        }
    }
}

function updateSummaryStats(students) {
    const summaryCard = document.getElementById('summaryCard');
    if (!summaryCard) return;
    
    const stats = {
        passed: students.filter(s => s.status === 'passed').length,
        retained: students.filter(s => s.status === 'retained').length,
        dismissed: students.filter(s => s.status === 'dismissed').length,
        pending: students.filter(s => !s.status).length,
        deansList: students.filter(s => utils.isDeansList(s.gpa)).length
    };
    
    // Update summary counts
    document.getElementById('passedCount').textContent = stats.passed;
    document.getElementById('retainedCount').textContent = stats.retained;
    document.getElementById('dismissedCount').textContent = stats.dismissed;
    document.getElementById('pendingCount').textContent = stats.pending;
    document.getElementById('deansListCount').textContent = stats.deansList;
    
    // Show summary if there are students
    summaryCard.style.display = students.length > 0 ? 'block' : 'none';
}

// Process All Students
function processAllStudents() {
    const students = utils.filterStudentsByYear(currentYear);
    
    students.forEach(student => {
        const gpa = utils.calculateGPA(student);
        const status = utils.determineStatus(gpa);
        
        // Update student in database
        const dbStudent = database.students.find(s => s.id === student.id);
        if (dbStudent) {
            dbStudent.gpa = gpa;
            dbStudent.status = status;
        }
    });
    
    // Reload the student list
    loadStudentList();
    
    alert('All students processed successfully! GPAs calculated and academic standing determined.');
}

// Student Evaluation Functions
function loadStudentEvaluation() {
    const student = database.students.find(s => s.id === currentStudentId);
    if (!student) return;
    
    // Update page subtitle
    const subtitle = document.getElementById('evaluationSubtitle');
    if (subtitle) {
        subtitle.textContent = `${student.name} - ${student.id}`;
    }
    
    // Load student profile
    loadStudentProfile(student);
    
    // Load academic standing if available
    loadAcademicStanding(student);
    
    // Load grades
    loadGradesTable(student);
}

function loadStudentProfile(student) {
    const container = document.getElementById('studentProfileCard');
    if (!container) return;
    
    container.innerHTML = `
        <h2>Student Profile</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px;">
            <div>
                <strong>Name:</strong> ${student.name}<br/>
                <strong>Student ID:</strong> ${student.id}<br/>
                <strong>Age:</strong> ${student.age}<br/>
                <strong>Sex:</strong> ${student.sex}
            </div>
            <div>
                <strong>Course:</strong> ${student.course}<br/>
                <strong>Year Level:</strong> ${student.yearLevel}<br/>
                <strong>Semester:</strong> ${student.semester}
            </div>
        </div>
    `;
}

function loadAcademicStanding(student) {
    const container = document.getElementById('academicStandingCard');
    if (!container || !student.gpa) {
        container.style.display = 'none';
        return;
    }
    
    const statusInfo = utils.getStatusInfo(student.status);
    
    container.innerHTML = `
        <h2>Academic Standing</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px;">
            <div style="text-align: center; padding: 20px; background: ${statusInfo.background}; border-radius: 10px; border: 2px solid ${statusInfo.color};">
                <h3 style="color: ${statusInfo.color}; margin: 0 0 10px 0;">GPA: ${student.gpa.toFixed(2)}</h3>
                <div style="padding: 8px 16px; background: ${statusInfo.color}; color: white; border-radius: 20px; font-weight: bold; margin-bottom: 10px;">
                    ${statusInfo.text}
                </div>
                <p style="color: ${statusInfo.color}; margin: 0; font-size: 14px;">
                    ${statusInfo.description}
                </p>
            </div>
        </div>
    `;
    
    container.style.display = 'block';
}

function loadGradesTable(student) {
    const container = document.getElementById('gradesTableContainer');
    if (!container) return;
    
    const grades = student.grades || {};
    const gradeEntries = Object.entries(grades);
    
    if (gradeEntries.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No grades recorded</h3>
                <p>Click "Edit Grades" and then "Add Subject" to start adding course grades.</p>
            </div>
        `;
        return;
    }
    
    let tableHTML = `
        <div style="overflow-x: auto;">
            <table class="table">
                <thead>
                    <tr>
                        <th>COURSE CODE</th>
                        <th>COURSE DESCRIPTION</th>
                        <th>UNITS</th>
                        <th>GRADE</th>
                        <th>RESULT</th>
                        ${isEditing ? '<th>ACTION</th>' : ''}
                    </tr>
                </thead>
                <tbody>
    `;
    
    gradeEntries.forEach(([courseCode, subject]) => {
        tableHTML += `
            <tr>
                <td><strong>${courseCode}</strong></td>
                <td>
                    ${isEditing ? 
                        `<input type="text" value="${subject.description || ''}" 
                         onchange="updateGrade('${courseCode}', 'description', this.value)"
                         class="form-control" style="min-width: 200px;">` :
                        (subject.description || 'No description')
                    }
                </td>
                <td>
                    ${isEditing ?
                        `<input type="number" value="${subject.units || ''}" 
                         onchange="updateGrade('${courseCode}', 'units', parseInt(this.value) || 0)"
                         class="form-control" style="width: 80px;" min="1" max="6">` :
                        (subject.units || 0)
                    }
                </td>
                <td>
                    ${isEditing ?
                        `<input type="number" value="${subject.grade || ''}" 
                         onchange="updateGrade('${courseCode}', 'grade', parseFloat(this.value) || 0)"
                         class="form-control" style="width: 100px;" min="1.00" max="5.00" step="0.25">` :
                        `<span style="font-weight: bold; color: ${subject.grade <= 2.25 ? '#155724' : subject.grade <= 2.50 ? '#856404' : '#721c24'};">
                            ${subject.grade ? subject.grade.toFixed(2) : 'N/A'}
                        </span>`
                    }
                </td>
                <td>
                    <span style="font-size: 12px; color: ${subject.grade <= 2.50 ? '#155724' : '#721c24'};">
                        ${subject.grade <= 2.50 ? 'PASSED' : 'FAILED'}
                    </span>
                </td>
                ${isEditing ? 
                    `<td>
                        <button onclick="removeSubject('${courseCode}')" class="btn btn-danger" style="font-size: 12px; padding: 4px 8px;">
                            Remove
                        </button>
                    </td>` : ''
                }
            </tr>
        `;
    });
    
    // Add totals row
    if (gradeEntries.length > 0) {
        const totalUnits = gradeEntries.reduce((sum, [, subject]) => sum + (subject.units || 0), 0);
        const gpa = utils.calculateGPA(student);
        
        tableHTML += `
            <tfoot>
                <tr style="background-color: #f8f9fa; font-weight: bold;">
                    <td colspan="2">TOTAL</td>
                    <td>${totalUnits}</td>
                    <td colspan="${isEditing ? 3 : 2}">GPA: ${gpa ? gpa.toFixed(2) : 'Not calculated'}</td>
                </tr>
            </tfoot>
        `;
    }
    
    tableHTML += `
                </tbody>
            </table>
        </div>
    `;
    
    container.innerHTML = tableHTML;
}

// Grade Management Functions
function toggleEdit() {
    isEditing = !isEditing;
    
    const editBtn = document.getElementById('editGradesBtn');
    const editActions = document.getElementById('editActions');
    
    if (isEditing) {
        editBtn.style.display = 'none';
        editActions.style.display = 'flex';
    } else {
        editBtn.style.display = 'block';
        editActions.style.display = 'none';
    }
    
    // Reload grades table
    const student = database.students.find(s => s.id === currentStudentId);
    if (student) {
        loadGradesTable(student);
    }
}

function updateGrade(courseCode, field, value) {
    const student = database.students.find(s => s.id === currentStudentId);
    if (!student) return;
    
    if (!student.grades[courseCode]) {
        student.grades[courseCode] = {};
    }
    
    student.grades[courseCode][field] = field === 'grade' || field === 'units' ? 
        (field === 'grade' ? parseFloat(value) || 0 : parseInt(value) || 0) : value;
    
    // Recalculate GPA and status
    const gpa = utils.calculateGPA(student);
    const status = utils.determineStatus(gpa);
    student.gpa = gpa;
    student.status = status;
    
    // Update academic standing display
    loadAcademicStanding(student);
    
    // Update totals in table
    loadGradesTable(student);
}

function addNewSubject() {
    const courseCode = prompt('Enter course code (e.g., NGEC 4):');
    if (!courseCode || courseCode.trim() === '') return;
    
    const student = database.students.find(s => s.id === currentStudentId);
    if (!student) return;
    
    if (student.grades[courseCode]) {
        alert('This course already exists for this student.');
        return;
    }
    
    const description = prompt('Enter course description:') || '';
    const units = parseInt(prompt('Enter units:')) || 3;
    
    student.grades[courseCode] = {
        units: units,
        grade: 0,
        description: description
    };
    
    // Reload grades table
    loadGradesTable(student);
}

function removeSubject(courseCode) {
    if (!confirm(`Remove ${courseCode} from this student's record?`)) return;
    
    const student = database.students.find(s => s.id === currentStudentId);
    if (!student) return;
    
    delete student.grades[courseCode];
    
    // Recalculate GPA and status
    const gpa = utils.calculateGPA(student);
    const status = utils.determineStatus(gpa);
    student.gpa = gpa;
    student.status = status;
    
    // Update displays
    loadAcademicStanding(student);
    loadGradesTable(student);
}

function saveChanges() {
    toggleEdit();
    alert('Student record updated successfully!');
}

function cancelEdit() {
    toggleEdit();
}

// Results Page Functions
function loadResultsPage() {
    // Process all students to ensure they have GPA and status
    database.students.forEach(student => {
        if (!student.gpa) {
            const gpa = utils.calculateGPA(student);
            const status = utils.determineStatus(gpa);
            student.gpa = gpa;
            student.status = status;
        }
    });
    
    updateResultsStatistics();
    displayResults(database.students);
}

function updateResultsStatistics() {
    const total = database.students.length;
    const passed = database.students.filter(s => s.status === 'passed').length;
    const retained = database.students.filter(s => s.status === 'retained').length;
    const dismissed = database.students.filter(s => s.status === 'dismissed').length;
    const pending = database.students.filter(s => !s.status).length;
    const deansList = database.students.filter(s => utils.isDeansList(s.gpa)).length;
    
    // Update statistics
    document.getElementById('totalStudents').textContent = total;
    document.getElementById('totalPassed').textContent = passed;
    document.getElementById('totalRetained').textContent = retained;
    document.getElementById('totalDismissed').textContent = dismissed;
    document.getElementById('totalPending').textContent = pending;
    document.getElementById('totalDeansList').textContent = deansList;
    
    // Update percentages
    document.getElementById('passedPercent').textContent = `(${total > 0 ? ((passed / total) * 100).toFixed(1) : 0}%)`;
    document.getElementById('retainedPercent').textContent = `(${total > 0 ? ((retained / total) * 100).toFixed(1) : 0}%)`;
    document.getElementById('dismissedPercent').textContent = `(${total > 0 ? ((dismissed / total) * 100).toFixed(1) : 0}%)`;
    document.getElementById('pendingPercent').textContent = `(${total > 0 ? ((pending / total) * 100).toFixed(1) : 0}%)`;
    document.getElementById('deansListPercent').textContent = `(${total > 0 ? ((deansList / total) * 100).toFixed(1) : 0}%)`;
}

function displayResults(students) {
    const container = document.getElementById('resultsTableContainer');
    if (!container) return;
    
    if (students.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No results found</h3>
                <p>Try adjusting your search criteria or filters.</p>
            </div>
        `;
        return;
    }
    
    let tableHTML = `
        <div style="overflow-x: auto;">
            <table class="table">
                <thead>
                    <tr>
                        <th>STUDENT NAME</th>
                        <th>STUDENT ID</th>
                        <th>COURSE</th>
                        <th>YEAR LEVEL</th>
                        <th>GPA</th>
                        <th>STATUS</th>
                        <th>DEAN'S LIST</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    students.forEach(student => {
        const gpaColor = student.gpa ? 
            (student.gpa <= 2.25 ? '#155724' : 
             student.gpa <= 2.50 ? '#856404' : '#721c24') : '#666';
        
        tableHTML += `
            <tr>
                <td>
                    <strong>${student.name}</strong><br/>
                    <small style="color: #666;">Age: ${student.age}, ${student.sex}</small>
                </td>
                <td>${student.id}</td>
                <td><small>${student.course}</small></td>
                <td>${student.yearLevel}<br/><small>${student.semester}</small></td>
                <td>
                    ${student.gpa ? 
                        `<span style="font-weight: bold; font-size: 16px; color: ${gpaColor};">${student.gpa.toFixed(2)}</span>` :
                        '<span style="color: #666; font-style: italic;">Not calculated</span>'
                    }
                </td>
                <td>${utils.getStatusBadge(student.status)}</td>
                <td>${utils.getDeansListBadge(student.gpa)}</td>
                <td>
                    <button onclick="showEvaluation('${student.id}')" class="btn btn-primary" style="font-size: 12px; padding: 6px 12px;">
                        View Details
                    </button>
                </td>
            </tr>
        `;
    });
    
    tableHTML += `
                </tbody>
            </table>
        </div>
        <div style="margin-top: 20px; text-align: center; color: #666;">
            Showing ${students.length} of ${database.students.length} students
        </div>
    `;
    
    container.innerHTML = tableHTML;
}

function filterResults(status) {
    currentFilter = status;
    
    // Update filter button states
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === status) {
            btn.classList.add('active');
        }
    });
    
    // Filter and display results
    let filteredStudents = database.students;
    
    if (status !== 'all') {
        filteredStudents = database.students.filter(student => student.status === status);
    }
    
    // Apply search filter if exists
    const searchTerm = document.getElementById('resultsSearch').value;
    if (searchTerm) {
        filteredStudents = utils.searchStudents(filteredStudents, searchTerm);
    }
    
    displayResults(filteredStudents);
}

function handleResultsSearch() {
    const searchTerm = document.getElementById('resultsSearch').value.toLowerCase();
    let filteredStudents = database.students;
    
    // Apply status filter
    if (currentFilter !== 'all') {
        filteredStudents = filteredStudents.filter(student => student.status === currentFilter);
    }
    
    // Enhanced search filter - search by name, ID, course, year level, status, and dean's list
    if (searchTerm) {
        filteredStudents = filteredStudents.filter(student => {
            const name = student.name.toLowerCase();
            const id = student.id.toLowerCase();
            const course = student.course.toLowerCase();
            const yearLevel = student.yearLevel.toLowerCase();
            const status = (student.status || '').toLowerCase();
            const isDeansList = utils.isDeansList(student.gpa) ? 'dean\'s list deans list' : '';
            
            return name.includes(searchTerm) || 
                   id.includes(searchTerm) || 
                   course.includes(searchTerm) ||
                   yearLevel.includes(searchTerm) ||
                   status.includes(searchTerm) ||
                   isDeansList.includes(searchTerm);
        });
    }
    
    displayResults(filteredStudents);
    
    // Update search results count
    updateResultsSearchCount(filteredStudents.length, database.students.length);
}

// Year Search Function
function handleYearSearch() {
    const searchTerm = document.getElementById('yearSearch').value.toLowerCase();
    const yearFolders = document.querySelectorAll('.folder-card[onclick*="showStudentList"]');
    
    yearFolders.forEach(folder => {
        const yearText = folder.querySelector('h3').textContent.toLowerCase();
        const descText = folder.querySelector('p').textContent.toLowerCase();
        
        if (yearText.includes(searchTerm) || descText.includes(searchTerm)) {
            folder.style.display = '';
        } else {
            folder.style.display = 'none';
        }
    });
    
    // Update visible count
    updateYearSearchCount(searchTerm);
}

function updateYearSearchCount(searchTerm) {
    const visibleFolders = document.querySelectorAll('.folder-card[onclick*="showStudentList"]:not([style*="none"])');
    const totalFolders = document.querySelectorAll('.folder-card[onclick*="showStudentList"]');
    
    let countDisplay = document.querySelector('.year-search-count');
    if (!countDisplay) {
        const searchContainer = document.querySelector('#yearFoldersPage .search-container');
        if (searchContainer) {
            countDisplay = document.createElement('div');
            countDisplay.className = 'year-search-count';
            countDisplay.style.cssText = 'font-size: 0.9em; color: #666; margin-top: 5px;';
            searchContainer.appendChild(countDisplay);
        }
    }
    
    if (countDisplay) {
        if (searchTerm === '') {
            countDisplay.textContent = `Showing all ${totalFolders.length} academic years`;
        } else {
            countDisplay.textContent = `Showing ${visibleFolders.length} of ${totalFolders.length} academic years`;
        }
    }
}

// Automated Processing Function
function startAutomatedProcessing() {
    // Show confirmation dialog
    const confirmed = confirm(`🤖 AUTOMATED PROCESSING\n\nThis will:\n✅ Calculate GPA for all students\n✅ Determine academic standing\n✅ Identify Dean's List qualifiers\n✅ Generate comprehensive reports\n\nProcess all ${database.students.length} students?\n\nClick OK to continue.`);
    
    if (!confirmed) return;
    
    // Show processing indicator
    const processingDiv = document.createElement('div');
    processingDiv.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); z-index: 9999; display: flex; align-items: center; justify-content: center;">
            <div style="background: white; padding: 30px; border-radius: 10px; text-align: center; max-width: 400px;">
                <div style="font-size: 3em; margin-bottom: 20px;">⚙️</div>
                <h3>Processing Students...</h3>
                <p>Calculating GPAs and Academic Standing</p>
                <div style="width: 100%; background: #f0f0f0; border-radius: 10px; overflow: hidden; margin: 20px 0;">
                    <div id="progressBar" style="width: 0%; height: 20px; background: linear-gradient(90deg, #4CAF50, #45a049); transition: width 0.3s;"></div>
                </div>
                <p id="progressText">0%</p>
            </div>
        </div>
    `;
    document.body.appendChild(processingDiv);
    
    // Process students with animation
    let processed = 0;
    const total = database.students.length;
    
    const processStudent = (index) => {
        if (index >= total) {
            // Processing complete
            setTimeout(() => {
                document.body.removeChild(processingDiv);
                showProcessingResults();
            }, 1000);
            return;
        }
        
        const student = database.students[index];
        
        // Calculate GPA and status
        student.gpa = utils.calculateGPA(student.grades);
        student.status = utils.determineStatus(student.gpa);
        
        processed++;
        const percentage = Math.round((processed / total) * 100);
        
        // Update progress
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        if (progressBar) progressBar.style.width = percentage + '%';
        if (progressText) progressText.textContent = `${percentage}% (${processed}/${total})`;
        
        // Process next student after short delay for animation
        setTimeout(() => processStudent(index + 1), 50);
    };
    
    // Start processing
    setTimeout(() => processStudent(0), 500);
}

function showProcessingResults() {
    const stats = {
        total: database.students.length,
        passed: database.students.filter(s => s.status === 'Passed').length,
        retained: database.students.filter(s => s.status === 'Retained').length,
        dismissed: database.students.filter(s => s.status === 'Dismissed').length,
        deansList: database.students.filter(s => utils.isDeansList(s.gpa)).length
    };
    
    alert(`🎉 PROCESSING COMPLETE!\n\n📊 RESULTS SUMMARY:\n\n✅ Total Students: ${stats.total}\n🟢 Passed: ${stats.passed}\n🟡 Retained: ${stats.retained}\n🔴 Dismissed: ${stats.dismissed}\n🏆 Dean's List: ${stats.deansList}\n\n📋 All student records have been updated with:\n• Calculated GPAs\n• Academic Standing Status\n• Dean's List Qualifications\n\nYou can now view the results in the Evaluation Results section.`);
    
    // Redirect to results
    showResults();
}

function exportResults() {
    let dataToExport = database.students;
    
    // Apply current filters
    if (currentFilter !== 'all') {
        dataToExport = dataToExport.filter(student => student.status === currentFilter);
    }
    
    const searchTerm = document.getElementById('resultsSearch').value;
    if (searchTerm) {
        dataToExport = utils.searchStudents(dataToExport, searchTerm);
    }
    
    const filename = `student_evaluation_results_${new Date().toISOString().split('T')[0]}.csv`;
    utils.exportToCSV(dataToExport, filename);
}
