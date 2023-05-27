var array = [null, 123, undefined, null, 'qwerty', 34, 36, undefined, null, 'ewferv']
var typeNull = []
var typeStr = []
var typeNum = []
var typeUndefined = []

for (var i = 0; i < array.length; i++) {
    if (array[i] === null) {
        typeNull.push(array[i])
    } else if (typeof array[i] === 'string') {
        typeStr.push(array[i])
    } else if (typeof array[i] === 'number') {
        typeNum.push(array[i])
    } else if (typeof array[i] === 'undefined') {
        typeUndefined.push(array[i])
    }
}
let allArray = []
allArray.push(typeNum, typeStr, typeNull, typeUndefined)
allArray.sort((a, b)=> b.length - a.length)
console.log(allArray)