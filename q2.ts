interface Students {
  name : string;
  score : number;
}


function findTopNames(students:Students[]):string[] {
  return students.filter(student => student.score > 8).map(student => student.name);
}

// assign interface/type to the student1 object properly
const students1:Students[]  = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;


//รหัส นศ.: 660610798

//ชื่อ-สกุล : ศุภกร บูรณะชาติ