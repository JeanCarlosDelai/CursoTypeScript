function add2(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    const result = n1+ n2;
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;;
const resultPhrase = 'Result is: '

const result = add2(number1, number2, printResult, resultPhrase);
