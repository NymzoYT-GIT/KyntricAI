// ======================================
// KyntricAI — Student Progress
// ======================================

const studentProgress = {
    xp: 0,
    level: 1,
    completedLessons: [],
    achievements: [],
    currentStreak: 0
};

function awardXP(amount) {
    studentProgress.xp += amount;

    studentProgress.level = Math.floor(
        studentProgress.xp / 500
    ) + 1;

    console.log("XP earned:", amount);
    console.log("Total XP:", studentProgress.xp);
    console.log("Current level:", studentProgress.level);
}

function completeLesson(lessonId) {
    if (studentProgress.completedLessons.includes(lessonId)) {
        return;
    }

    studentProgress.completedLessons.push(lessonId);

    awardXP(50);

    console.log("Lesson completed:", lessonId);
}

console.log("KyntricAI progress system loaded!");
