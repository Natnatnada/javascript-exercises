// const removeFromArray = function (array, deleted) {
//     //hacemos un filter para que elimine el elemento deleted del array, funciona pero con un solo argumento
//     const result = array.filter(arr => arr != deleted);
//     return result;
// };

const removeFromArray = function (array, ...args) {
    //hacemos un filter para que elimine el elemento deleted del array, funciona pero con un solo argumento
    const result = array.filter(arr => !args.includes(arr));
    return result;
};
// Do not edit below this line
module.exports = removeFromArray;
