function chuck(str){
    if(!str) return "Invalid Input";
    if(typeof str !== 'string') return 'Input must be a string';
    let saltedStr = 'youbetterknow' + str + 'chuckrules'
    let myBuffer = new Buffer(saltedStr);
    let outBuff = myBuffer.map(item => item + 3).reverse();
    console.log(outBuff.toString());
    return outBuff.toString();
}

function unchuck(str){
    if(!str) return "Invalid Input";
    if(typeof str !== 'string') return 'Input must be a string';
    let startBuffer = new Buffer(str);
    let myBuffer = startBuffer.map(item => item -3).reverse();
    let outString = myBuffer.toString().substring(13, str.length - 10);
    return outString
}

console.log(unchuck(chuck('Hello my friend')));