const input=document.querySelector('.generate-input')
const length=document.querySelector('.length-input')
const uppercase=document.querySelector('.input-uppercase')
const lowercase=document.querySelector('.condition-lowercase')
const number=document.querySelector('.condition-number')
const symbol=document.querySelector('.condition-symbol')
const button=document.querySelector('button')

length.value=20

const upperChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerChar="abcdefghijklmnopqrstuvwxyz"
const numberChar="0123456789"
const symbolChar="!@#$%^&*()_+-=[]{}|;:,.<>?"
function generateRandomSring(length,chars) {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random()*chars.length));
    }
    return result;
}

let lengthValue=length.value;
let uppercaseValue=uppercase.value
let lowercaseValue=lowercase.value
let numberValue=number.value
let symbolValue=symbol.value
length.addEventListener('keydown',(e)=>{
    lengthValue=e.target.value
    console.log(lengthValue);
})
uppercase.addEventListener('click',(e)=>{
    if(e.target.value=='off'){
        e.target.value='on'
        uppercaseValue=e.target.value
    }
    else{
        e.target.value='off'
        uppercaseValue=e.target.value
    }
    console.log(uppercaseValue)
})
lowercase.addEventListener('click',(e)=>{
    if(e.target.value=='off'){
        e.target.value='on'
        lowercaseValue=e.target.value
    }
    else{
        e.target.value='off'
        lowercaseValue=e.target.value
    }
    console.log(lowercaseValue)
})
number.addEventListener('click',(e)=>{
    if(e.target.value=='off'){
        e.target.value='on'
        numberValue=e.target.value
    }
    else{
        e.target.value='off'
        numberValue=e.target.value
    }
    console.log(numberValue)
})
symbol.addEventListener('click',(e)=>{
    if(e.target.value=='off'){
        e.target.value='on'
        symbolValue=e.target.value
    }
    else{
        e.target.value='off'
        symbolValue=e.target.value
    }
    console.log(symbolValue)
})
button.addEventListener('click',()=>{
    if(uppercaseValue=='on'){
        let str=generateRandomSring(lengthValue,upperChar+lowerChar+numberChar+symbolChar)
        input.value=str
    }
    if(uppercaseValue=='off'){
        let notUpper=lowerChar+numberChar+symbolChar
        let notUpperStr=generateRandomSring(lengthValue,notUpper)
        input.innerHTML=notUpperStr
    }
    if(lowercaseValue=='off'){
        let notLower=upperChar+numberChar+symbolChar
        let notLowerStr=generateRandomSring(lengthValue,notLower)
        input.innerHTML=notLowerStr
    }
    if(numberValue=='off'){
        let notNumber=lowerChar+upperChar+symbolChar
        let notNumberStr=generateRandomSring(lengthValue,notNumber)
        input.innerHTML=notNumberStr
    }
    if(symbolValue=='off'){
        let notSymbol=lowerChar+upperChar+numberChar
        let notSymbolStr=generateRandomSring(lengthValue,notSymbol)
        input.innerHTML=notSymbolStr
    }
    
})