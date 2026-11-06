// ======================================
// KyntricAI — Lesson System
// ======================================

const lessons = [
    {
        id: 1,
        courseId: 1,
        title: "What Is Programming?",
        description: "Understand what programming is and how it works.",
        duration: "5 minutes",
        type: "explanation",
        free: true
    },
    {
        id: 2,
        courseId: 1,
        title: "Your First Program",
        description: "Discover how to write your first lines of code.",
        duration: "10 minutes",
        type: "interactive",
        free: true
    },
    {
        id: 3,
        courseId: 2,
        title: "Introduction to HTML",
        description: "Learn what HTML does and how websites use it.",
        duration: "8 minutes",
        type: "explanation",
        free: true
    },
    {
        id: 4,
        courseId: 3,
        title: "Introduction to CSS",
        description: "Learn how CSS controls the appearance of websites.",
        duration: "8 minutes",
        type: "explanation",
        free: true
    }
];

function getLessonsByCourse(courseId) {
    return lessons.filter(
        lesson => lesson.courseId === courseId
    );
}

console.log("KyntricAI lesson system loaded!");
