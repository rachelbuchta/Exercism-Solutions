export const clean = (number) => {
  const characters = ['+', '-', '(', ')', ' ', '.']
  const splitNumber = number.split('')
  const cleanDigits = splitNumber.filter(number => {
     if (!characters.includes(number)) {
      return number
    }
  }).join('')

  if (cleanDigits.length === 9) {
    throw new Error("Incorrect number of digits")
  } else if (cleanDigits.length > 11) {
    throw new Error("More than 11 digits")
  } else if (cleanDigits.length === 11 && cleanDigits.charAt(0) !== '1') {
    throw new Error("11 digits must start with 1")
  } else if (cleanDigits.length === 11 && cleanDigits.charAt(0) === '1') {
    return cleanDigits.slice(1)
  } else {
    return cleanDigits
  }
  // console.log(test.join(''))
  // return test.join('')
}
 

//input: a series of differently formatted numbers
//output: a cleaned up version of the number series that includes no extra characters, spaces, punctuation and coutry code
//split it up into an array
//iterate through each element and determine if its a number, if it is keep it, if not slice it out. 
//join it back into a string