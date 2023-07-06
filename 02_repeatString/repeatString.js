const repeatString = function(string, num) {
// return string.repeat(num)
    //declaramos let vacio para el string repetido
    let resultRepeat = "";
    //returns ERROR with negative numbers
    if (num <0) {return "ERROR"}
    //ciclo for para repetir el string segun el num
    for (let i = 0; i<num; i++){
        resultRepeat += string;
    }
      return resultRepeat  
};
repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
