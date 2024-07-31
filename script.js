'use strict'

/**
 * Задача 1. Найти "отсутсвующее число" в последовательности неотсортированных целых чисел
 * @example findMissingNumber([3,5,1,4]) - должен вернуть число 2
 * findMissingNumber([3,5,1,4,2]) - должен вернуть null
 * @param numbersSequence Массив неотсортированных чисел
 * @returns {number} отсутсвующее число в последовательности, если такого нет то null
 **/

function findMissingNumber(numbersSequence) {
    if (numbersSequence.length === 0) return null;

    const maxNumber = Math.max(...numbersSequence); //мтд
    const minNumber = Math.min(...numbersSequence);
    
    const summNumb = (maxNumber + minNumber) * ((maxNumber - minNumber + 1)/2); // (a + b) * n/2 - арифметическая прогрессия n = b-a+1
    const summArray = numbersSequence.reduce((accum, num) => accum + num, 0); 

    const missingNumb = summNumb - summArray;

    /* Длинный вариант или первое, что пришло в голову
    
    let summArr = 0, summNumb = 0;
    for (let i = minNumber; i <= maxNumber; i++){
        summArr += i;
    }
    for (let i = 0; i < numbersSequence.length; i++){
        summNumb += numbersSequence[i];
    }
    console.log(summArr + ' и ' + summNumb)
    
    */


    return missingNumb !== 0 ? missingNumb : null
}

console.log(findMissingNumber(numbersSequence = [3,5,1,4,2]));


/**
 * Задача 2. Провалидировать скобочное выражение
 * Надо провалидировать строку на валидность открытых/закрытых скобочек
 * Важно проверять симантику т.е. каждая открытая скобочка должна соответсвовать закрытой скобке 
 * допустимые значения в строке (){}[]
 * @example validateBrackets("([{([])}])") - должен вернуть true
 * validateBrackets("([{([])}])()[]") - должен вернуть true
 * validateBrackets({(())}]) - должен вернуть false
 * validateBrackets("([{([])}])(){]") - должен вернуть false
 * @param bracketString {string} строка с скобочками
 * @returns {boolean} результат проверки строки
 **/

function validateBrackets(bracketString) 
{
    if(typeof bracketString !== 'string') return false;

    const stack = []; 
    const allBrackets = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (let i of bracketString) 
    {
        if (i === '(' || i === '{' || i === '['){
            stack.push(i);
        }
        else if(i === ')' || i === '}' || i === ']')
        {
            if (stack.length === 0 || stack.pop() !== allBrackets[i]) //меняю ) на ( и т.д., а потом сверяю с ластовым 
            {
                return false;
            }
            else
                console.log(allBrackets[i] + ' ' + i)
        }
    }
    return stack.length === 0;
    
}

console.log(validateBrackets(bracketString = "([{([])}])()[]"));


/*Первый вариант, замудрённый

    const openCount = { '(': 0, '{':0, '[':0};
    const allBrackets = 
    { 
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of bracketString)
    {
        if(openCount.hasOwnProperty(char))
        {
            openCount[char]++;
        } else if (allBrackets.hasOwnProperty(char)){
            const closeBrackets = allBrackets[char];
            if (openCount[closeBrackets]===0)
            {
                return false;
            }
            openCount[closeBrackets]--;
        }
        
    }
    return openCount['('] === 0 && openCount['{'] === 0 && openCount ['['] === 0;
}
    */

