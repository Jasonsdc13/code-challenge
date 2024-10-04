const findSum = function(array) {
  let sum = 0;
  for (let i = 0; i< array.length; i+= 1) {
  sum += array[i];
  }
  return sum;
};


const findFrequency = function(array) {

  const frequency = {};
  array.forEach(element => {

    if (frequency[element]) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
    })

    return frequency;
  };

const frequency = findFrequency(array);

let mostFrequentLetter = null;
let leastFrequentLetter = null;
let maxCount = 0;
let minCount = Infinity;

for (const element in frequency) {
const count = frequency[element];

  if (count > maxCount) {
      maxCount = count;
      mostFrequentLetter = element;
  }

  if (count < minCount) {
      minCount = count;
      leastFrequentLetter = element;
  }
};

const result = { most: mostFrequentLetter, least: leastFrequentLetter };


const isPalindrome = function(str) {
   let length = str.length;
   let start = str.substring(0, Math.floor(length/2)).toLowerCase();
   let end = str.substring(length - Math.floor(length/2)).toLowerCase();
   let flip = end.split('').reverse().join('');
   return start === flip;
};


const largestPair = function(array) {

let largest = 0;

for (let i = 0; i < array.length - 1; i++) {
  let num1 = array[i];
  let num2 = array[i + 1];
  let product = num1 * num2;

  if (product > largest) {
    largest = product;
  } 
}
 return largest;
};


removeParenth = function(str) {

  let newText = str.replace(/\(.*?\)/g, '');

  return newText;
};

let str = ('ido(not)liketocode');


const scoreScrabble = function(str) {
    const letterScore = {
        1 : 'aeioulnrst',
        2 : 'dg',
        3 : 'bcmp',
        4 : 'fhvwy',
        5 : 'k',
        8 : 'jx',
        10 : 'qz',
    };

const getScore = function(letter) {
    for (score in letterScore) {
        if (letterScore[score].includes(letter))
            return Number(score)
    }
};
return str.split('').reduce((total,letter) => total + getScore(letter), 0);
};
