// ======================================
// KyntricAI — Authentication
// ======================================

let currentStudent = null;

function setCurrentStudent(student) {
    currentStudent = student;

    console.log("Current student updated:", currentStudent);
}

function getCurrentStudent() {
    return currentStudent;
}

function isStudentLoggedIn() {
    return currentStudent !== null;
}

function logoutStudent() {
    currentStudent = null;

    console.log("Student logged out.");
}

console.log("KyntricAI authentication foundation loaded!");
