// Temporary database stored in arrays
export const students = [
  {
    id: "2022-001",
    name: "John Doe",
    course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
    yearLevel: "First Year",
    semester: "1st Semester",
    age: 19,
    sex: "Male",
    grades: {
      "NGEC 1": { units: 3, grade: 2.75, description: "Understanding the Self" },
      "NGEC 2": { units: 3, grade: 2.50, description: "Readings in Philippine History" },
      "NGEC 3": { units: 3, grade: 2.25, description: "The Contemporary World" },
      "MATH 1": { units: 3, grade: 2.00, description: "Mathematics in the Modern World" },
      "ENG 1": { units: 3, grade: 2.50, description: "Purposive Communication" },
      "PE 1": { units: 2, grade: 1.75, description: "Physical Education 1" },
      "NSTP 1": { units: 3, grade: 1.50, description: "National Service Training Program 1" }
    },
    gpa: null,
    status: null
  },
  {
    id: "2022-002",
    name: "Jane Smith",
    course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
    yearLevel: "First Year",
    semester: "1st Semester",
    age: 18,
    sex: "Female",
    grades: {
      "NGEC 1": { units: 3, grade: 1.75, description: "Understanding the Self" },
      "NGEC 2": { units: 3, grade: 2.00, description: "Readings in Philippine History" },
      "NGEC 3": { units: 3, grade: 1.50, description: "The Contemporary World" },
      "MATH 1": { units: 3, grade: 2.25, description: "Mathematics in the Modern World" },
      "ENG 1": { units: 3, grade: 2.00, description: "Purposive Communication" },
      "PE 1": { units: 2, grade: 1.25, description: "Physical Education 1" },
      "NSTP 1": { units: 3, grade: 1.75, description: "National Service Training Program 1" }
    },
    gpa: null,
    status: null
  },
  {
    id: "2022-003",
    name: "Mike Johnson",
    course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
    yearLevel: "Second Year",
    semester: "1st Semester",
    age: 20,
    sex: "Male",
    grades: {
      "NGEC 10": { units: 3, grade: 3.00, description: "Social Sciences and Philosophy" },
      "PROF 1": { units: 3, grade: 2.75, description: "Professional Education 1" },
      "MAJOR 1": { units: 3, grade: 3.25, description: "Introduction to ICT" },
      "MAJOR 2": { units: 3, grade: 2.50, description: "Computer Programming" },
      "ENG 2": { units: 3, grade: 2.75, description: "Technical Writing" },
      "PE 3": { units: 2, grade: 2.00, description: "Physical Education 3" }
    },
    gpa: null,
    status: null
  },
  {
    id: "2023-001",
    name: "Sarah Wilson",
    course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
    yearLevel: "First Year",
    semester: "2nd Semester",
    age: 19,
    sex: "Female",
    grades: {
      "NGEC 3": { units: 3, grade: 2.00, description: "The Contemporary World" },
      "NGEC 4": { units: 3, grade: 2.25, description: "Art Appreciation" },
      "MATH 2": { units: 3, grade: 2.50, description: "Statistics and Probability" },
      "SCI 1": { units: 3, grade: 2.00, description: "Science, Technology and Society" },
      "FIL 1": { units: 3, grade: 1.75, description: "Kontekstwalisadong Komunikasyon" },
      "PE 2": { units: 2, grade: 1.50, description: "Physical Education 2" },
      "NSTP 2": { units: 3, grade: 1.75, description: "National Service Training Program 2" }
    },
    gpa: null,
    status: null
  },
  {
    id: "2023-002",
    name: "Robert Brown",
    course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
    yearLevel: "Third Year",
    semester: "1st Semester",
    age: 21,
    sex: "Male",
    grades: {
      "MAJOR 5": { units: 3, grade: 3.50, description: "Database Management Systems" },
      "MAJOR 6": { units: 3, grade: 3.25, description: "Web Development" },
      "MAJOR 7": { units: 3, grade: 2.75, description: "Network Administration" },
      "PROF 3": { units: 3, grade: 3.00, description: "Professional Education 3" },
      "ELEC 1": { units: 3, grade: 2.50, description: "Elective 1" }
    },
    gpa: null,
    status: null
  }
];

export const academicStandingRules = {
  passing: 2.50, // GPA must be 2.50 or below to pass (lower numbers are better grades)
  retention: 2.25, // GPA between 2.25-2.50 for retention consideration
  dismissal: 2.50, // GPA above 2.50 results in dismissal
  gradeScale: {
    1.00: "Excellent",
    1.25: "Very Good",
    1.50: "Very Good",
    1.75: "Good",
    2.00: "Good",
    2.25: "Satisfactory",
    2.50: "Satisfactory", 
    2.75: "Fair",
    3.00: "Fair",
    3.25: "Poor",
    3.50: "Poor",
    4.00: "Poor",
    5.00: "Failure"
  }
};

export const courses = [
  {
    code: "NGEC 1",
    description: "Understanding the Self",
    units: 3,
    yearLevel: "First Year",
    semester: "1st Semester"
  },
  {
    code: "NGEC 2", 
    description: "Readings in Philippine History",
    units: 3,
    yearLevel: "First Year",
    semester: "1st Semester"
  },
  {
    code: "NGEC 3",
    description: "The Contemporary World", 
    units: 3,
    yearLevel: "First Year",
    semester: "2nd Semester"
  },
  {
    code: "NGEC 10",
    description: "Social Sciences and Philosophy",
    units: 3,
    yearLevel: "Second Year", 
    semester: "1st Semester"
  },
  {
    code: "MATH 1",
    description: "Mathematics in the Modern World",
    units: 3,
    yearLevel: "First Year",
    semester: "1st Semester"
  },
  {
    code: "ENG 1",
    description: "Purposive Communication",
    units: 3,
    yearLevel: "First Year",
    semester: "1st Semester"
  }
];

export const yearLevels = [
  "2022-2023",
  "2023-2024", 
  "2024-2025",
  "2025-2026"
];

// Authentication data
export const users = [
  {
    username: "admin",
    password: "admin123",
    role: "administrator"
  },
  {
    username: "faculty",
    password: "faculty123", 
    role: "faculty"
  }
];
