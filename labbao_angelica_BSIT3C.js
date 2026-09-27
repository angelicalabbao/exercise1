let school = "NorthWest Samar State University";
let section = "BSIT-3C";
let passingScore = 75;

let students = ["angelica", "vivian", "jelyza"];
let subjects = ["Science", "Math", "English"];
let scores = [85, 70, 90];

if (passingScore >= 75) {
    console.log("Passing score is 75.");
}

if (students.length >= 3) {
    console.log("There are 3 students.");
}

if (scores[0] >= passingScore) {
    console.log(students[0] + " passed!");
} else {
    console.log(students[0] + " failed!");
}

console.log("\nSTUDENTS:");
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

console.log("\nSUBJECTS:");
for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i]);
}

console.log("\nSCORES:");
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

console.log("\nSCHOOL: " + school);
console.log("SECTION: " + section);