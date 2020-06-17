//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  let numLength = num.toString().length;
  let arrArmstrong = num.toString().split("");

  let checkArmstrong = 0;

  for(let i = 0; i<numLength; i++){
    checkArmstrong += Math.pow(arrArmstrong[i],numLength)
  }
  return (num == checkArmstrong) ? true:false;
};
