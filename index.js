// characters used in password genration
const characters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '*', '&', '$', '#', '!', '?', '<', '>', '+'
]


passElOne = document.getElementById("pass-el-one")
passElTwo = document.getElementById("pass-el-two")
numberEl = document.getElementById("number-el")


function genratePass() {
    let passLenght = numberEl.value
    // inner loop to control the number of password
    for (let i = 0; i < 2; i++) {
        let passwordOne = ""
        let passwordTwo = ""
        // inner loop to control the lentht of password
        for (let i = 0; i < passLenght; i++) {
            //generate the password
            passwordOne += characters[Math.floor(Math.random() * characters.length)]
            passwordTwo += characters[Math.floor(Math.random() * characters.length)]
        }
        //display the password
        passElOne.textContent = passwordOne
        passElTwo.textContent = passwordTwo
    }
    
}