//subtract number from the highest number from 1,000
//if number is less than highest go to next number and subtract it from the highest number and make it a temporary value
//go through last and second to last number and see if that number is more or less and see if that number is closer
//if number is not less than current number subtract and add a letter
//loop through until zero
//if number is === 0 return the letters


function solution (number){

    const total = number 
    let final = ""
    let temp = 0

    const numerials = { 
        0: "M",
        1: "D",
        2: "C",
        3: "L",
        10: "X",
        5: "V",
        1: "I"

    }

    const numeralsList = [1000,500,100,50,10,5,1]
    const letters = ["M","D","C","L","X","V","I"]

    for(i = 0; i < numeralsList.length; i++){
        for(j = 1; j < numeralsList.length; j++){
            if(total - numeralsList[i] === 0){
                final = final.concat(letters[i])
                return final
            }
            else if(total < number){
                let t = 0
                if(numeralsList[t] - numeralsList[j] > temp && numeralsList[t] - numeralsList[j] < total){
                    temp = numeralsList[i] - numeralsList[j] 
                    console.log(temp)
                }
            }
        }
    }

}

console.log(solution(1990))