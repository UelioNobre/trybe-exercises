const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const getRights = (answer, student) => answer.filter((score, index) => student[index] === score);
const getNotAnswers = (student) => student.filter((score) => score === 'N.A');

const processResults = (answers, student) => {
  const rights = getRights(answers, student).length;
  const nulls = getNotAnswers(student).length;
  const wrongs = (student.length - (rights + nulls)) * 0.5;
  return rights - wrongs;
}

const analizeResults = (answers, student, callback) => {
  const results = callback(answers, student);
  return results;
 };

const results = analizeResults(RIGHT_ANSWERS, STUDENT_ANSWERS, processResults);
console.log('Results:', results);
