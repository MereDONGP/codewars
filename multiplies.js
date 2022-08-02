//create loop that goes up to the designated number
//if number is a multiple of 3 or 5 add it to the number
//return the number when it is final


function solution(number){

    let total = 0

  for (i = 0; i < number; i++){
    if( i % 3 === 0 || i % 5 === 0){
        console.log(i)
        total = total + i
    }
  }

  return total
}

console.log(solution(10))
