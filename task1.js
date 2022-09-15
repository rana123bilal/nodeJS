function reverseString(str){
    const updatedStr = str.split('').reverse().join('')
    return updatedStr;
}
console.log(reverseString('test data'))