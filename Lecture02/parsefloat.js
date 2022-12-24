function circumference(r) {
    if (Number.isNaN(Number.parseFloat(r))) {
        return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI;

}

console.log(circumference("4.576abcdefgh"));
// expected output : 28.695307297229173

console.log(circumference("abcdefgh"));
// expected output : 0