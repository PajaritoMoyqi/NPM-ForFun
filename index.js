// get Random

export const getRandomNum = (initialNum) => {
  return Math.floor(Math.random()*(initialNum));
} // get : 0 ~ less then initialNum

export const getRandomNumNotSame = (initialNum, currentNum) => {
  let candidate = currentNum;

  while(candidate === currentNum){
    candidate = Math.floor(Math.random()*(initialNum));
  }

  return candidate;
} // get 0 ~ less then initialNum except currentNum

export const getRandomIdx = (arr) => {
  return Math.floor(Math.random()*(arr.length));
}

export const getRandomItem = (arr) => {
  const randomIdx = Math.floor(Math.random()*(arr.length));
  return arr[randomIdx];
}

export const getRandomColorCode = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}



// getArray

export const getArrFromNumToNum = (start, end) => {
  let initialArr = [];

  for(let i=0; i<=end-start; i++){
    initialArr = [...initialArr, i+start];
  }

  return initialArr;
} // get : [start, start + 1, start + 2, ... , end -2, end -1, end]

export const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
}

export const getShuffledArrFromNumToNum = (start, end) => {
  let initialArr = [];

  for(let i=0; i<=end-start; i++){
    initialArr = [...initialArr, i+start];
  }

  return shuffleArray(initialArr);
} // get : [start, start + 1, start + 2, ... , end -2, end -1, end]



// string

export const capitalize = (str) => {
  const firstLetter = str.charAt(0).toUpperCase();
  const rest = str.slice(1).toLowerCase();
  return firstLetter + rest;
}