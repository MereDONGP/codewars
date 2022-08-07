function likes(names) {
    if(names.length === 0 || names[0] === ""){
        console.log('ere')
        return 'no one likes this'
    }
    else if(names.length === 1){
        return `${names[0]} likes this`
    }
    else if(names.length <= 3){
        let f = names.map(( n, i ) => 
            n === names[names.length - 2] ? `${names[names.length - 2]} and ${names[names.length -1 ]} like this` : n
        )

        f.pop()
        return f.join(", ")

    }
    else if(names.length >= 4){
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
    else{
        return 'no one likes this'
    }
  }


  console.log(likes(['']))