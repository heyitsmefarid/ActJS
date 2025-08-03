// Starter data
const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" } // no grade, should use default
];
const originalNames = students.map(student=>student.name);
const upperCased = students.map(student=>student.name.toUpperCase());
console.log("Original Names : " + originalNames);
console.log("Updated Names : " + upperCased);

console.log("------------------------------------------------------");

const grade85up = students.filter(student=>student.grade >= 85)
console.log("The students that gt grades greater than 85 are : ");
grade85up.forEach(student =>{
  console.log(student.name + " - " + student.grade);
});

console.log("------------------------------------------------------");

const totalgrades = students.reduce((sum, student) => sum + (student.grade ?? 0),0);
const average = totalgrades / students.length;
console.log("The average is : " + average);

console.log("------------------------------------------------------");

const displayStudents = ({name,grade}) => "Student : " + name + " - Grade : " + (grade ?? "No Grade");
students.forEach(student=>{
  console.log(displayStudents(student));
})
