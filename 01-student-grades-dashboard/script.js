function log(message) {
  console.log(message);
  document.getElementById("output").innerHTML += message + "<br>";
}

const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" }
];

const originalNames = students.map(student => student.name);
const upperCased = students.map(student => student.name.toUpperCase());

log(`Original Names: ${originalNames.join(", ")}`);
log(`Updated Names: ${upperCased.join(", ")}`);

log("------------------------------------------------------");

const grade85up = students.filter(student => (student.grade ?? 0) >= 85);
log("The students that have grades greater than or equal to 85 are:");
grade85up.forEach(student => {
  log(`${student.name} - ${student.grade}`);
});

log("------------------------------------------------------");

const totalGrades = students.reduce((sum, student) => sum + (student.grade ?? 0), 0);
const average = totalGrades / students.length;
log(`The average is: ${average}`);

log("------------------------------------------------------");

const displayStudents = ({ name, grade }) => 
  `Student: ${name} - Grade: ${grade ?? "No Grade"}`;

students.forEach(student => {
  log(displayStudents(student));
});

log("------------------------------------------------------");

const displayStudents2 = ({ name, grade }) => 
  `Student: ${name} - Grade: ${grade ?? 0}`;

students.forEach(student => {
  log(displayStudents2(student));
});
