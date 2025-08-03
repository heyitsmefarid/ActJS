// Starter data
const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" } // no grade, should use default
];

const originalNames = students.map(student => student.name);
const upperCased = students.map(student => student.name.toUpperCase());

console.log(`Original Names: ${originalNames.join(", ")}`);
console.log(`Updated Names: ${upperCased.join(", ")}`);

console.log("------------------------------------------------------");

const grade85up = students.filter(student => (student.grade ?? 0) >= 85);
console.log("The students that have grades greater than or equal to 85 are:");
grade85up.forEach(student => {
  console.log(`${student.name} - ${student.grade}`);
});

console.log("------------------------------------------------------");

const totalGrades = students.reduce((sum, student) => sum + (student.grade ?? 0), 0);
const average = totalGrades / students.length;
console.log(`The average is: ${average}`);

console.log("------------------------------------------------------");

const displayStudents = ({ name, grade }) => 
  `Student: ${name} - Grade: ${grade ?? "No Grade"}`;

students.forEach(student => {
  console.log(displayStudents(student));
});

console.log("------------------------------------------------------");

const displayStudents2 = ({ name, grade }) => 
  `Student: ${name} - Grade: ${grade ?? 0}`;

students.forEach(student => {
  console.log(displayStudents2(student));
});
