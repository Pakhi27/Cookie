console.log(document.cookie)
//Set Call
document.cookie="name-pakhi1122334400"
document.cookie="name=pakhi"
console.log(document.cookie)

let key=prompt("Enter your key")
let value=prompt("Enter your value")
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`

//decodeURIComponent
console.log(document.cookie)
document.cookie="1=2;3=4"