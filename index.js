// Get random
// Return 0 ~ less then input integer(initialNum).
export const getRandomNum = (initialNum) => {
  return Math.floor(Math.random()*(initialNum));
}

// Return 0 ~ less then first input integer(initialNum) except second input integer(currentNum).
export const getRandomNumNotSame = (initialNum, currentNum) => {
  let candidate = currentNum;

  while(candidate === currentNum){
    candidate = Math.floor(Math.random()*(initialNum));
  }

  return candidate;
}

// Return random index of given array(arr).
export const getRandomIdx = (arr) => {
  return Math.floor(Math.random()*(arr.length));
}

// Return random element of given array(arr).
export const getRandomItem = (arr) => {
  const randomIdx = Math.floor(Math.random()*(arr.length));
  return arr[randomIdx];
}

// Return random color code in string.
export const getRandomColorCode = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}



// Get array
// Return array; [start, start + 1, start + 2, ... , end -2, end -1, end]
export const getArrFromNumToNum = (start, end) => {
  let initialArr = [];

  for(let i=0; i<=end-start; i++){
    initialArr = [...initialArr, i+start];
  }

  return initialArr;
}

// Return randomly shuffled array.
export const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
}

// Return shuffled array from first input integer to second input integer;
export const getShuffledArrFromNumToNum = (start, end) => {
  let initialArr = [];

  for(let i=0; i<=end-start; i++){
    initialArr = [...initialArr, i+start];
  }

  return shuffleArray(initialArr);
}



// String
// Capitalize given string(str)
export const capitalize = (str) => {
  const firstLetter = str.charAt(0).toUpperCase();
  const rest = str.slice(1).toLowerCase();
  return firstLetter + rest;
}