// Pair programming with Jaskarn (navigator) and Yuri (Driver)


//Transpose function
const transpose = function(matrix) {
  // Put your solution here
  let result = [];
  let numofArr = matrix[0].length;
  for (let i = 0; i < numofArr; i++) {
    result.push([]);
  }
  
  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[j].length; i++) {
      result[i].push(matrix[j][i]);
    }
  }
  return result;
};
  


//Wordsearch Function
const wordSearch = (letters, word) => {
  if (letters.length === 0) return false;
  const horizontalJoin = letters.map(ls => ls.join(''));
  // console.log(horizontalJoin);
  // horizontalJoin is a new array that holds arrays that contains joined letters as one element
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const transposedMatrix = transpose(letters);
  const verticalJoin = transposedMatrix.map(ls => ls.join(''));
  
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};


module.exports = wordSearch