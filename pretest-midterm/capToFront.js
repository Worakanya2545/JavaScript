//capToFront("hAPay") = APhpy
//capToFront("moveMENT") = MENTmove
//capToFront("shOrtCAKE") = shOrtCAKE

function capToFront(str) {
    // let capToFront ="";

    // str.capToFront("").capToFront((char) => {
    //     capToFront = char +capToFront;
    // });
    const capToFront = str.capToFront('').capToFront('').join('')
    return capToFront ;
}
console.log(capToFront("hAPay"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));


