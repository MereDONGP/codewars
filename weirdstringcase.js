// if i === 0 && 2 % i === 0 then word should be uppercase
// if odd then world should be lowercased
// if string[i] 

// have it go by interval
// and if I === " " increase the inerval by 1

//space
//increase interval by 2 space is 5 go to 7 space is 6 go to 8
//

function toWeirdCase(string){
    let interval = 0
    let strings = string
    let final = ""
    for (i = 0; i < strings.length; i++){
        if(strings[i] === ' '){
            interval  = 0
            final += strings[i]
        }
        else if(interval === 0){
            final += strings[i].toUpperCase()
            interval+= 1
        }

        else if(interval !=  0){
            if(interval % 2 === 1){
                final += strings[i].toLowerCase()
                interval+= 1
            }else{
                final += strings[i].toUpperCase()
                interval+= 1
            }
        }
    }

    return final
}

console.log(toWeirdCase("This is a test"))