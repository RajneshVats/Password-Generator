const resultE1 = document.getElementById('result');
const lengthE1 = document.getElementById('length');
const uppercaseE1 = document.getElementById('uppercase');
const lowercaseE1 = document.getElementById('lowercase');
const numbersE1 =  document.getElementById('numbers');
const symbolsE1 = document.getElementById('symbols');
const generateE1 = document.getElementById('generate');
const clipboardE1 = document.getElementById('clipboard');


const randomfunction = {
    lower:getrandomlower,
    upper:getrandomupper,
    number:getrandomnumber,
    symbol:getrandomsymbol
}
clipboardE1.addEventListener('click',()=>{
    const textarea =document.createElement('textarea');
    const password = resultE1.innerText;
    if(!password){
        return;
    }
    textarea.value=password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert("Password copied to clipboard");
});
function generatePassword(lower,upper , number , symbol ,length){
    let genearatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower},{upper},{number},{symbol}].filter(item=>Object.values(item)[0]);
    if(typesCount === 0){
        return '!!!Select atleast 1 option';
    }
    for(let i=0;i<length;i+=typesCount){
    typesArr.forEach(type =>{
        const functionName = Object.keys(type)[0];
        genearatedPassword += randomfunction[functionName]();
    } );
    }
    const finalPassword = genearatedPassword.slice(0,length);
    return finalPassword;
}
generateE1.addEventListener('click', ()=>{
    const length = +lengthE1.value;
    const haslower = lowercaseE1.checked;
    const hasupper = uppercaseE1.checked;
    const hasnumber = numbersE1.checked;
    const hassymbol = symbolsE1.checked;

    resultE1.innerText = generatePassword(haslower,hasupper,hasnumber,hassymbol,length);
});





function getrandomlower(){
return String.fromCharCode(Math.floor(Math.random() *26) +97);
}
function getrandomupper(){
    return String.fromCharCode(Math.floor(Math.random() *26) +65);
}
function getrandomnumber(){
    return String.fromCharCode(Math.floor(Math.random() *10) + 48);
}
function getrandomsymbol(){
   const symbols = '!@#$%^&*(){}[]:",.+</>';
   return symbols[Math.floor(Math.random()*symbols.length)]; 
}
console.log('hello');