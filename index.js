// get Random

export const getRandomNum = (initialNum) => {
  return Math.floor(Math.random()*(initialNum));
}
export const getRandomNumNotSame = (initialNum, currentNum) => {
  let candidate = currentNum;

  while(candidate === currentNum){
    candidate = Math.floor(Math.random()*(initialNum));
  }

  return candidate;
}
export const getRandomIdx = (arr) => {
  return Math.floor(Math.random()*(arr.length));
}
export const getRandomItem = (arr) => {
  const randomIdx = Math.floor(Math.random()*(arr.length));
  return arr[randomIdx];
}


// getArray

export const getArrFromNumToNum = (start, end) => {
  let initialArr = [];

  for(let i=0; i<=end-start; i++){
    initialArr = [...initialArr, i+start];
  }

  return initialArr;
}


// string

export const capitalize = (str) => {
  const firstLetter = str.charAt(0).toUpperCase();
  const rest = str.slice(1).toLowerCase();
  return firstLetter + rest;
}