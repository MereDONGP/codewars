const bitCounting = (number) => {
    let sum = 0
    const converstion = number.toString(2)

    for(i = 0; i <= converstion.length; i++){
        if(converstion[i] != undefined){
            sum = sum + parseInt(converstion[i])
        }
    }

    return sum
}

a = bitCounting(1234)
console.log(a)