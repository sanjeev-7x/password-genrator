const passwordbox = document.getElementById("password")
const genratebtn = document.getElementById("generateBtn")
const copybtn = document.getElementById("copyIcon")

const upercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number ="0123456789"
const symbol = "!@#$&"
const allchar = upercase + lowercase + number + symbol 
const length = 12

function createPassword(){

    let password = "";
    password += upercase[Math.floor(Math.random ()* upercase.length)]
    password += lowercase[Math.floor(Math.random ()* lowercase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while(length > password.length) {
        password += allchar[Math.floor(Math.random()* allchar.length)]
    }

passwordbox.value = password
        

}

function copyPassword(){
navigator.clipboard.writeText(passwordbox.value)

const toast = document.getElementById("toast")
toast.classList.add("show")

setTimeout(()=>{
  toast.classList.remove("show")
},1000)
}
genratebtn.addEventListener("click",createPassword)
copybtn.addEventListener("click",copyPassword )