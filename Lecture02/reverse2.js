function revereString(value) {

    const reversedValue = value.split('').reverse().join('')
    return reversedValue;

}

console.log(reverseString("Hello JavaScript"));