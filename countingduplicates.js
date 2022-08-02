function duplicateCount(text){
    let matches = {}
    let count = 0
    
    for (let i = 0; i < text.length; i++){
      let lowers = text[i].toLowerCase()
      if(lowers in matches){
        matches[lowers] += 1
      }
      else{
        matches[lowers] = 1
      }
    }
    
    for (i in matches){
        if (matches[i] >= 2){
          count += 1
      }
    }
    
    return count
  }

