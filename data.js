// Database - Student Records and System Data
const database = {
    // Student records - Real ZSCMST BTLEd ICT Students
    students: [
        {
            id: "2022-001",
            name: "Cepna, Jasmine Claire M.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "First Year",
            semester: "1st Semester",
            age: 19,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 1.85, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 1.86, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.10, description: "Mathematics in the Modern World/Purposive Communication/Malayuning" },
                "NGEC 5": { units: 3, grade: 2.19, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 1.95, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 1.90, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 1.92, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 1.11, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 1.11, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 1.85, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2022-002",
            name: "Aromal, Nadia T.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "First Year",
            semester: "1st Semester",
            age: 18,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 1.90, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 1.12, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.00, description: "Mathematics in the Modern World/Purposive Communication/Malayuning" },
                "NGEC 5": { units: 3, grade: 2.19, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 2.00, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 2.16, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 1.41, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 1.68, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 1.80, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 1.13, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2022-003",
            name: "Dinayo, Angel M.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "First Year",
            semester: "1st Semester",
            age: 19,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 2.20, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.08, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.10, description: "Mathematics in the Modern World/Purposive Communication/Malayuning" },
                "NGEC 5": { units: 3, grade: 2.65, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 2.15, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 2.01, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 2.01, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 1.68, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 1.32, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 1.91, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2022-004",
            name: "Tahiyang, Nurjanda D.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "First Year",
            semester: "1st Semester",
            age: 19,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 1.85, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 1.44, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.50, description: "Mathematics in the Modern World/Purposive Communication/Malayuning" },
                "NGEC 5": { units: 3, grade: 2.34, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 2.15, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 1.14, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 1.14, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 1.11, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 1.15, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 1.34, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2022-005",
            name: "Jailani, Hulum A.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "First Year",
            semester: "1st Semester",
            age: 20,
            sex: "Male",
            grades: {
                "NGEC 1": { units: 3, grade: 1.80, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 1.65, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.10, description: "Mathematics in the Modern World/Purposive Communication/Malayuning" },
                "NGEC 5": { units: 3, grade: 2.00, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 2.00, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 2.15, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 2.04, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 1.84, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 1.18, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 1.82, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2022-006",
            name: "General, Angelocka L.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "First Year",
            semester: "1st Semester",
            age: 19,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 1.55, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 1.41, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.10, description: "Mathematics in the Modern World/Purposive Communication/Malayuning" },
                "NGEC 5": { units: 3, grade: 1.16, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 2.15, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 2.00, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 1.84, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 1.65, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 1.70, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 1.44, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2022-007",
            name: "Tahiyang, Nurjanda D. (Taibi, Ibnubael R.)",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "First Year",
            semester: "1st Semester",
            age: 19,
            sex: "Male",
            grades: {
                "NGEC 1": { units: 3, grade: 1.40, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 1.58, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.10, description: "Mathematics in the Modern World/Purposive Communication/Malayuning" },
                "NGEC 5": { units: 3, grade: 2.12, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 1.94, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 1.49, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 1.01, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 1.52, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 1.84, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 1.05, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2022-008",
            name: "Sanglian, Avie Jane M.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "First Year",
            semester: "1st Semester",
            age: 18,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 1.40, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 1.80, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 1.00, description: "Mathematics in the Modern World/Purposive Communication/Malayuning" },
                "NGEC 5": { units: 3, grade: 1.40, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 1.80, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 2.15, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 1.41, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 1.85, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 1.18, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 1.25, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2022-009",
            name: "Lim, Jellie Pagalaindro",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "First Year",
            semester: "1st Semester",
            age: 19,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 2.30, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.15, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.80, description: "Mathematics in the Modern World/Purposive Communication/Malayuning" },
                "NGEC 5": { units: 3, grade: 2.00, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 2.50, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 2.15, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 2.16, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 1.69, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 1.13, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 1.55, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2022-010",
            name: "Taha, Mahadiya Amihasan",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "First Year",
            semester: "1st Semester",
            age: 19,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 1.50, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 1.57, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.10, description: "Mathematics in the Modern World/Purposive Communication/Malayuning" },
                "NGEC 5": { units: 3, grade: 2.57, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 1.60, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 2.54, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 1.96, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 1.59, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 1.33, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 1.50, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        // SECOND YEAR STUDENTS
        {
            id: "2021-001",
            name: "Mendoza, Alaiza G.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Second Year",
            semester: "1st Semester",
            age: 20,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 2.50, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.48, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.15, description: "Mathematics in the Modern World" },
                "NGEC 5": { units: 3, grade: 1.93, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 2.07, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 1.94, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 2.05, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 1.52, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 2.10, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 2.10, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2021-002",
            name: "Ghifre, Erila Jane S.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Second Year",
            semester: "1st Semester",
            age: 19,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 2.30, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.01, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.20, description: "Mathematics in the Modern World" },
                "NGEC 5": { units: 3, grade: 1.15, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 2.14, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 1.95, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 2.10, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 1.93, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 2.95, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 2.95, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2021-003",
            name: "Ismael, Rhyzam G.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Second Year",
            semester: "1st Semester",
            age: 20,
            sex: "Male",
            grades: {
                "NGEC 1": { units: 3, grade: 1.84, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 1.50, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 1.00, description: "Mathematics in the Modern World" },
                "NGEC 5": { units: 3, grade: 2.05, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 1.00, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 1.00, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 2.57, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 2.34, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 2.12, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 2.13, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2021-004",
            name: "Estor, Annie Joy F.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Second Year",
            semester: "1st Semester",
            age: 19,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 2.15, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.00, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.25, description: "Mathematics in the Modern World" },
                "NGEC 5": { units: 3, grade: 2.01, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 2.00, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 1.42, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 1.00, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 2.01, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 2.01, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 2.01, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2021-005",
            name: "Tandih, Dayana A.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Second Year",
            semester: "1st Semester",
            age: 20,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 2.05, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.27, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.15, description: "Mathematics in the Modern World" },
                "NGEC 5": { units: 3, grade: 2.19, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 1.80, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 1.66, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 2.45, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 1.80, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 2.17, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 2.17, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2021-006",
            name: "Estopez, Jamphie Mae C.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Second Year",
            semester: "1st Semester",
            age: 19,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 2.00, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.05, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.20, description: "Mathematics in the Modern World" },
                "NGEC 5": { units: 3, grade: 1.60, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 2.50, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 1.55, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 2.50, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 1.62, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 2.16, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 2.16, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2021-007",
            name: "Orusa, Shermie",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Second Year",
            semester: "1st Semester",
            age: 20,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 2.15, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.52, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.15, description: "Mathematics in the Modern World" },
                "NGEC 5": { units: 3, grade: 2.19, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 2.11, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 1.27, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 2.56, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 2.18, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 2.57, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 2.57, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2021-008",
            name: "Malang, Von Allen",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Second Year",
            semester: "1st Semester",
            age: 20,
            sex: "Male",
            grades: {
                "NGEC 1": { units: 3, grade: 2.40, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.27, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.15, description: "Mathematics in the Modern World" },
                "NGEC 5": { units: 3, grade: 2.65, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 2.00, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 1.52, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 2.46, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 1.59, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 2.34, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 2.34, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2021-009",
            name: "Reyes, Crisel",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Second Year",
            semester: "1st Semester",
            age: 19,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 2.15, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.59, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.25, description: "Mathematics in the Modern World" },
                "NGEC 5": { units: 3, grade: 1.92, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 1.95, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 1.56, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 2.52, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 1.94, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 2.15, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 2.15, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2021-010",
            name: "Estor, Annie Joy F. (Robles, Mariel P.)",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Second Year",
            semester: "1st Semester",
            age: 20,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 2.15, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.23, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.25, description: "Mathematics in the Modern World" },
                "NGEC 5": { units: 3, grade: 1.58, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 2.20, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 1.17, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 2.55, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 2.00, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 2.28, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 2.28, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2021-011",
            name: "Diladin, Remy Jane Nicole D.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Second Year",
            semester: "1st Semester",
            age: 19,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 1.15, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.50, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.22, description: "Mathematics in the Modern World" },
                "NGEC 5": { units: 3, grade: 1.48, description: "Komunikasyon" },
                "NGEC 6": { units: 3, grade: 1.50, description: "Art Appreciation" },
                "NGEC 7": { units: 3, grade: 1.50, description: "Science, Technology and Society" },
                "PED 1": { units: 2, grade: 2.50, description: "Entrepreneurship" },
                "TLE 1": { units: 3, grade: 1.50, description: "Movement Contemporary Training" },
                "PATHFIT 1": { units: 3, grade: 2.30, description: "National Service Training Program" },
                "NSTP 1": { units: 3, grade: 2.30, description: "National Service Training Program" }
            },
            gpa: null,
            status: null
        },
        // THIRD YEAR STUDENTS
        {
            id: "2020-001",
            name: "Alaiza B. Echoca",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Third Year",
            semester: "1st Semester",
            age: 21,
            sex: "Female",
            grades: {
                "PED 8": { units: 3, grade: 1.98, description: "Assessment of Learning 2 with focus on Trainers Methodology I and II" },
                "TLE 7": { units: 3, grade: 1.25, description: "Introduction to Industrial Arts 2" },
                "TLE 8": { units: 3, grade: 1.36, description: "Introduction to ICT 2" },
                "TLE 9": { units: 3, grade: 1.91, description: "Introduction to Agri-Fishery Arts 2" },
                "TLE 10": { units: 3, grade: 1.20, description: "Technology for Teaching and Learning 2" },
                "PE 4": { units: 2, grade: 1.81, description: "Recreational Activities/Team Sports" },
                "JEEP 2": { units: 3, grade: 1.60, description: "Accelerate" },
                "ICT 1": { units: 3, grade: 2.52, description: "Drawing Tools and Animation" },
                "ICT 2": { units: 3, grade: 2.14, description: "Drawing Concepts and Strategies" },
                "ICT 3": { units: 3, grade: 1.81, description: "Troubleshooting Techniques" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2020-002",
            name: "Daring, Aurhana",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Third Year",
            semester: "1st Semester",
            age: 22,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 2.41, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.6, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.50, description: "Mathematics in the Modern World" },
                "NGEC 7": { units: 3, grade: 1.24, description: "Science, Technology and Society" },
                "NGEC 5": { units: 3, grade: 1.5, description: "Purposive Communication" },
                "NGEC 6": { units: 3, grade: 2.16, description: "Art Appreciation" },
                "RIZAL": { units: 3, grade: 2.21, description: "Life and Works of Rizal" },
                "TLE 1": { units: 3, grade: 2.48, description: "Entrepreneurship" },
                "NSTP 1": { units: 2, grade: 1.15, description: "National Service Training Program" },
                "PE 1": { units: 2, grade: 2.09, description: "Physical Fitness" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2020-003",
            name: "Diog, Patrice Dionne P.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Third Year",
            semester: "1st Semester",
            age: 21,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 2.45, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.10, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.50, description: "Mathematics in the Modern World" },
                "NGEC 7": { units: 3, grade: 2.04, description: "Science, Technology and Society" },
                "NGEC 5": { units: 3, grade: 1.67, description: "Purposive Communication" },
                "NGEC 6": { units: 3, grade: 2.39, description: "Art Appreciation" },
                "RIZAL": { units: 3, grade: 2.83, description: "Life and Works of Rizal" },
                "TLE 1": { units: 3, grade: 2.43, description: "Entrepreneurship" },
                "NSTP 1": { units: 2, grade: 1.35, description: "National Service Training Program" },
                "PE 1": { units: 2, grade: 1.46, description: "Physical Fitness" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2020-004",
            name: "Enrichaodo, Rhyza Mae B.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Third Year",
            semester: "1st Semester",
            age: 21,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 2.91, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.75, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.50, description: "Mathematics in the Modern World" },
                "NGEC 7": { units: 3, grade: 1.39, description: "Science, Technology and Society" },
                "NGEC 5": { units: 3, grade: 2.15, description: "Purposive Communication" },
                "NGEC 6": { units: 3, grade: 2.23, description: "Art Appreciation" },
                "RIZAL": { units: 3, grade: 2.13, description: "Life and Works of Rizal" },
                "TLE 1": { units: 3, grade: 2.62, description: "Entrepreneurship" },
                "NSTP 1": { units: 2, grade: 1.25, description: "National Service Training Program" },
                "PE 1": { units: 2, grade: 2.30, description: "Physical Fitness" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2020-005",
            name: "Oticeb, Christopher Josh C.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Third Year",
            semester: "1st Semester",
            age: 22,
            sex: "Male",
            grades: {
                "PED 8": { units: 3, grade: 1.67, description: "Assessment of Learning 2 with focus on Trainers Methodology I and II" },
                "TLE 7": { units: 3, grade: 1.96, description: "Introduction to Industrial Arts 2" },
                "TLE 8": { units: 3, grade: 1.67, description: "Introduction to ICT 2" },
                "TLE 9": { units: 3, grade: 1.67, description: "Introduction to Agri-Fishery Arts 2" },
                "TLE 10": { units: 3, grade: 1.50, description: "Technology for Teaching and Learning 2" },
                "PE 4": { units: 2, grade: 1.61, description: "Recreational Activities/Team Sports" },
                "JEEP 2": { units: 3, grade: 1.66, description: "Accelerate" },
                "ICT 1": { units: 3, grade: 2.50, description: "Drawing Tools and Animation" },
                "ICT 2": { units: 3, grade: 1.37, description: "Drawing Concepts and Strategies" },
                "ICT 3": { units: 3, grade: 1.54, description: "Troubleshooting Techniques" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2020-006",
            name: "Tuadir, Cristelle A.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Third Year",
            semester: "1st Semester",
            age: 21,
            sex: "Female",
            grades: {
                "PED 8": { units: 3, grade: 1.79, description: "Assessment of Learning 2 with focus on Trainers Methodology I and II" },
                "TLE 7": { units: 3, grade: 1.78, description: "Introduction to Industrial Arts 2" },
                "TLE 8": { units: 3, grade: 1.60, description: "Introduction to ICT 2" },
                "TLE 9": { units: 3, grade: 1.60, description: "Introduction to Agri-Fishery Arts 2" },
                "TLE 10": { units: 3, grade: 1.65, description: "Technology for Teaching and Learning 2" },
                "PE 4": { units: 2, grade: 1.60, description: "Recreational Activities/Team Sports" },
                "JEEP 2": { units: 3, grade: 1.65, description: "Accelerate" },
                "ICT 1": { units: 3, grade: 2.51, description: "Drawing Tools and Animation" },
                "ICT 2": { units: 3, grade: 1.85, description: "Drawing Concepts and Strategies" },
                "ICT 3": { units: 3, grade: 1.50, description: "Troubleshooting Techniques" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2020-007",
            name: "Adjani, Dahidah",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Third Year",
            semester: "1st Semester",
            age: 22,
            sex: "Female",
            grades: {
                "PED 8": { units: 3, grade: 1.60, description: "Assessment of Learning 2 with focus on Trainers Methodology I and II" },
                "TLE 7": { units: 3, grade: 1.75, description: "Introduction to Industrial Arts 2" },
                "TLE 8": { units: 3, grade: 1.59, description: "Introduction to ICT 2" },
                "TLE 9": { units: 3, grade: 1.51, description: "Introduction to Agri-Fishery Arts 2" },
                "TLE 10": { units: 3, grade: 1.51, description: "Technology for Teaching and Learning 2" },
                "PE 4": { units: 2, grade: 1.66, description: "Recreational Activities/Team Sports" },
                "JEEP 2": { units: 3, grade: 1.16, description: "Accelerate" },
                "ICT 1": { units: 3, grade: 2.08, description: "Drawing Tools and Animation" },
                "ICT 2": { units: 3, grade: 1.61, description: "Drawing Concepts and Strategies" },
                "ICT 3": { units: 3, grade: 1.57, description: "Troubleshooting Techniques" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2020-008",
            name: "Francisco, Almyn Jan G.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Third Year",
            semester: "1st Semester",
            age: 21,
            sex: "Male",
            grades: {
                "NGEC 1": { units: 3, grade: 2.25, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.66, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.50, description: "Mathematics in the Modern World" },
                "NGEC 7": { units: 3, grade: 2.00, description: "Science, Technology and Society" },
                "NGEC 5": { units: 3, grade: 2.96, description: "Purposive Communication" },
                "NGEC 6": { units: 3, grade: 2.15, description: "Art Appreciation" },
                "RIZAL": { units: 3, grade: 2.05, description: "Life and Works of Rizal" },
                "TLE 1": { units: 3, grade: 2.56, description: "Entrepreneurship" },
                "NSTP 1": { units: 2, grade: 1.25, description: "National Service Training Program" },
                "PE 1": { units: 2, grade: 2.41, description: "Physical Fitness" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2020-009",
            name: "Siston, Cleaner Roan G.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Third Year",
            semester: "1st Semester",
            age: 21,
            sex: "Male",
            grades: {
                "PED 8": { units: 3, grade: 1.66, description: "Assessment of Learning 2 with focus on Trainers Methodology I and II" },
                "TLE 7": { units: 3, grade: 1.35, description: "Introduction to Industrial Arts 2" },
                "TLE 8": { units: 3, grade: 1.47, description: "Introduction to ICT 2" },
                "TLE 9": { units: 3, grade: 1.67, description: "Introduction to Agri-Fishery Arts 2" },
                "TLE 10": { units: 3, grade: 1.26, description: "Technology for Teaching and Learning 2" },
                "PE 4": { units: 2, grade: 1.46, description: "Recreational Activities/Team Sports" },
                "JEEP 2": { units: 3, grade: 1.25, description: "Accelerate" },
                "ICT 1": { units: 3, grade: 2.28, description: "Drawing Tools and Animation" },
                "ICT 2": { units: 3, grade: 1.75, description: "Drawing Concepts and Strategies" },
                "ICT 3": { units: 3, grade: 1.36, description: "Troubleshooting Techniques" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2020-010",
            name: "Rumbo, Kenneth E.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Third Year",
            semester: "1st Semester",
            age: 22,
            sex: "Male",
            grades: {
                "NGEC 1": { units: 3, grade: 2.26, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.19, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.50, description: "Mathematics in the Modern World" },
                "NGEC 7": { units: 3, grade: 2.35, description: "Science, Technology and Society" },
                "NGEC 5": { units: 3, grade: 1.34, description: "Purposive Communication" },
                "NGEC 6": { units: 3, grade: 2.10, description: "Art Appreciation" },
                "RIZAL": { units: 3, grade: 1.85, description: "Life and Works of Rizal" },
                "TLE 1": { units: 3, grade: 1.33, description: "Entrepreneurship" },
                "NSTP 1": { units: 2, grade: 1.35, description: "National Service Training Program" },
                "PE 1": { units: 2, grade: 1.35, description: "Physical Fitness" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2020-011",
            name: "Enrichaodo, Primgracila Samantha Vienna Marie",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Third Year",
            semester: "1st Semester",
            age: 21,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 2.91, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.32, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.50, description: "Mathematics in the Modern World" },
                "NGEC 7": { units: 3, grade: 1.18, description: "Science, Technology and Society" },
                "NGEC 5": { units: 3, grade: 2.50, description: "Purposive Communication" },
                "NGEC 6": { units: 3, grade: 2.13, description: "Art Appreciation" },
                "RIZAL": { units: 3, grade: 2.30, description: "Life and Works of Rizal" },
                "TLE 1": { units: 3, grade: 2.64, description: "Entrepreneurship" },
                "NSTP 1": { units: 2, grade: 1.23, description: "National Service Training Program" },
                "PE 1": { units: 2, grade: 1.54, description: "Physical Fitness" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2020-012",
            name: "Buhaini, Sitilyka A. (Abraham, Norvina S.)",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Third Year",
            semester: "1st Semester",
            age: 22,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 3.13, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 1.50, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.30, description: "Mathematics in the Modern World" },
                "NGEC 7": { units: 3, grade: 2.00, description: "Science, Technology and Society" },
                "NGEC 5": { units: 3, grade: 2.60, description: "Purposive Communication" },
                "NGEC 6": { units: 3, grade: 2.76, description: "Art Appreciation" },
                "RIZAL": { units: 3, grade: 2.16, description: "Life and Works of Rizal" },
                "TLE 1": { units: 3, grade: 2.22, description: "Entrepreneurship" },
                "NSTP 1": { units: 2, grade: 2.20, description: "National Service Training Program" },
                "PE 1": { units: 2, grade: 1.79, description: "Physical Fitness" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2020-013",
            name: "Francisco, Christopher Josh C.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Third Year",
            semester: "1st Semester",
            age: 21,
            sex: "Male",
            grades: {
                "NGEC 1": { units: 3, grade: 2.49, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.50, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.50, description: "Mathematics in the Modern World" },
                "NGEC 7": { units: 3, grade: 1.50, description: "Science, Technology and Society" },
                "NGEC 5": { units: 3, grade: 1.98, description: "Purposive Communication" },
                "NGEC 6": { units: 3, grade: 2.64, description: "Art Appreciation" },
                "RIZAL": { units: 3, grade: 2.65, description: "Life and Works of Rizal" },
                "TLE 1": { units: 3, grade: 1.30, description: "Entrepreneurship" },
                "NSTP 1": { units: 2, grade: 1.25, description: "National Service Training Program" },
                "PE 1": { units: 2, grade: 2.54, description: "Physical Fitness" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2020-014",
            name: "Ismael, Johania C.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Third Year",
            semester: "1st Semester",
            age: 22,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 1.36, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.50, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.50, description: "Mathematics in the Modern World" },
                "NGEC 7": { units: 3, grade: 1.50, description: "Science, Technology and Society" },
                "NGEC 5": { units: 3, grade: 1.41, description: "Purposive Communication" },
                "NGEC 6": { units: 3, grade: 2.01, description: "Art Appreciation" },
                "RIZAL": { units: 3, grade: 1.35, description: "Life and Works of Rizal" },
                "TLE 1": { units: 3, grade: 1.15, description: "Entrepreneurship" },
                "NSTP 1": { units: 2, grade: 1.48, description: "National Service Training Program" },
                "PE 1": { units: 2, grade: 1.48, description: "Physical Fitness" }
            },
            gpa: null,
            status: null
        },
        {
            id: "2020-015",
            name: "Pioquinto, Sherra C.",
            course: "Bachelor of Technology and Livelihood Education Major in Information and Communication Technology",
            yearLevel: "Third Year",
            semester: "1st Semester",
            age: 21,
            sex: "Female",
            grades: {
                "NGEC 1": { units: 3, grade: 2.13, description: "Understanding the Self" },
                "NGEC 2": { units: 3, grade: 2.34, description: "Readings in Philippine History" },
                "NGEC 4": { units: 3, grade: 2.50, description: "Mathematics in the Modern World" },
                "NGEC 7": { units: 3, grade: 1.58, description: "Science, Technology and Society" },
                "NGEC 5": { units: 3, grade: 1.39, description: "Purposive Communication" },
                "NGEC 6": { units: 3, grade: 2.50, description: "Art Appreciation" },
                "RIZAL": { units: 3, grade: 1.70, description: "Life and Works of Rizal" },
                "TLE 1": { units: 3, grade: 2.17, description: "Entrepreneurship" },
                "NSTP 1": { units: 2, grade: 1.28, description: "National Service Training Program" },
                "PE 1": { units: 2, grade: 1.60, description: "Physical Fitness" }
            },
            gpa: null,
            status: null
        }
    ],

    // Academic standing rules
    academicRules: {
        passing: 2.50, // GPA must be 2.50 or below to pass (lower numbers are better grades)
        retention: 2.25, // GPA between 2.25-2.50 for retention consideration
        dismissal: 2.50, // GPA above 2.50 results in dismissal
        deansList: 1.80, // GPA must be 1.80 or below for Dean's List (excellent performance)
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
    },

    // Available courses
    courses: [
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
            code: "NGEC 4",
            description: "Art Appreciation",
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
            code: "MATH 2",
            description: "Statistics and Probability",
            units: 3,
            yearLevel: "First Year",
            semester: "2nd Semester"
        },
        {
            code: "ENG 1",
            description: "Purposive Communication",
            units: 3,
            yearLevel: "First Year",
            semester: "1st Semester"
        },
        {
            code: "ENG 2",
            description: "Technical Writing",
            units: 3,
            yearLevel: "Second Year",
            semester: "1st Semester"
        },
        {
            code: "FIL 1",
            description: "Kontekstwalisadong Komunikasyon",
            units: 3,
            yearLevel: "First Year",
            semester: "2nd Semester"
        },
        {
            code: "SCI 1",
            description: "Science, Technology and Society",
            units: 3,
            yearLevel: "First Year",
            semester: "2nd Semester"
        },
        {
            code: "PE 1",
            description: "Physical Education 1",
            units: 2,
            yearLevel: "First Year",
            semester: "1st Semester"
        },
        {
            code: "PE 2",
            description: "Physical Education 2",
            units: 2,
            yearLevel: "First Year",
            semester: "2nd Semester"
        },
        {
            code: "PE 3",
            description: "Physical Education 3",
            units: 2,
            yearLevel: "Second Year",
            semester: "1st Semester"
        },
        {
            code: "NSTP 1",
            description: "National Service Training Program 1",
            units: 3,
            yearLevel: "First Year",
            semester: "1st Semester"
        },
        {
            code: "NSTP 2",
            description: "National Service Training Program 2",
            units: 3,
            yearLevel: "First Year",
            semester: "2nd Semester"
        },
        {
            code: "PROF 1",
            description: "Professional Education 1",
            units: 3,
            yearLevel: "Second Year",
            semester: "1st Semester"
        },
        {
            code: "PROF 3",
            description: "Professional Education 3",
            units: 3,
            yearLevel: "Third Year",
            semester: "1st Semester"
        },
        {
            code: "MAJOR 1",
            description: "Introduction to ICT",
            units: 3,
            yearLevel: "Second Year",
            semester: "1st Semester"
        },
        {
            code: "MAJOR 2",
            description: "Computer Programming",
            units: 3,
            yearLevel: "Second Year",
            semester: "1st Semester"
        },
        {
            code: "MAJOR 5",
            description: "Database Management Systems",
            units: 3,
            yearLevel: "Third Year",
            semester: "1st Semester"
        },
        {
            code: "MAJOR 6",
            description: "Web Development",
            units: 3,
            yearLevel: "Third Year",
            semester: "1st Semester"
        },
        {
            code: "MAJOR 7",
            description: "Network Administration",
            units: 3,
            yearLevel: "Third Year",
            semester: "1st Semester"
        },
        {
            code: "ELEC 1",
            description: "Elective 1",
            units: 3,
            yearLevel: "Third Year",
            semester: "1st Semester"
        }
    ],

    // Academic years
    yearLevels: [
        "2022-2023",
        "2023-2024", 
        "2024-2025",
        "2025-2026"
    ],

    // User authentication
    users: [
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
    ]
};

// Utility Functions
const utils = {
    // Calculate GPA for a student
    calculateGPA: function(student) {
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
    },

    // Determine academic status based on GPA
    determineStatus: function(gpa) {
        if (gpa <= database.academicRules.retention) {
            return 'passed';
        } else if (gpa <= database.academicRules.passing) {
            return 'retained';
        } else {
            return 'dismissed';
        }
    },

    // Check if student qualifies for Dean's List
    isDeansList: function(gpa) {
        return gpa > 0 && gpa <= database.academicRules.deansList;
    },

    // Get status badge HTML
    getStatusBadge: function(status) {
        if (!status) return '';
        
        const statusConfig = {
            passed: { class: 'status-passed', text: 'PASSED' },
            retained: { class: 'status-retained', text: 'RETAINED' },
            dismissed: { class: 'status-dismissed', text: 'DISMISSED' }
        };

        const config = statusConfig[status];
        if (!config) return '';

        return `<span class="status-badge ${config.class}">${config.text}</span>`;
    },

    // Get Dean's List badge HTML
    getDeansListBadge: function(gpa) {
        if (this.isDeansList(gpa)) {
            return `<span class="deans-list-badge">DEAN'S LIST</span>`;
        }
        return '';
    },

    // Get status info for detailed display
    getStatusInfo: function(status) {
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
        return statusConfig[status] || { 
            color: '#666', 
            background: '#f8f9fa', 
            text: 'PENDING', 
            description: 'Academic standing not yet determined.' 
        };
    },

    // Filter students by year
    filterStudentsByYear: function(year) {
        const targetYear = year.substring(0, 4);
        return database.students.filter(student => {
            const studentYear = student.id.substring(0, 4);
            return studentYear === targetYear;
        });
    },

    // Search students
    searchStudents: function(students, searchTerm) {
        if (!searchTerm) return students;
        
        const term = searchTerm.toLowerCase();
        return students.filter(student =>
            student.name.toLowerCase().includes(term) ||
            student.id.toLowerCase().includes(term) ||
            student.yearLevel.toLowerCase().includes(term) ||
            student.course.toLowerCase().includes(term)
        );
    },

    // Export to CSV
    exportToCSV: function(data, filename) {
        const csvContent = [
            ['Student Name', 'Student ID', 'Course', 'Year Level', 'GPA', 'Status'],
            ...data.map(student => [
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
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
    }
};
