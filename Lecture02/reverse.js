function revereString(value) {
    let reversedValue = "";

    value.split("").forEach(char => {
        reversedValue = char + reversedValue;

    });

    return reversedValue;

}

console.log(revereString("Reverse Me"));