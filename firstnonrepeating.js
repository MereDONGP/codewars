function firstNonRepeatingLetter(s) {
    let table = { }
    if(s === undefined){
        return ""
    }
    for( i in s){

        if(s[i].toUpperCase() in table || s[i].toLowerCase() in table){
            console.log(s[i])
            if(s[i].toLowerCase() in table){
                table[s[i].toLowerCase()] = table[s[i].toLowerCase()] + 1
            }
            else if(s[i].toUpperCase() in table){
                table[s[i].toUpperCase()] = table[s[i].toUpperCase()] + 1
            }
        }else{
            table[s[i]] = 1
        }

    }

    for(i in table){
        if(table[i] === 1 ){
            console.log(table)
            return i
        }
    }
  }


  console.log(firstNonRepeatingLetter("sTreSS"))