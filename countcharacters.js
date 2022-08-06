function count (string) {

    if(string === ""){
        return { }
    }

    let final  = { }
    for( i in string){
        if (string[i] in final){
            final[string[i]] += 1
        }else{
            final[string[i]] = 1
        }
    }
     return final;
  }

  console.log(count("aba"))