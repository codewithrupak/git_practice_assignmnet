function numcheck(num){
    let count = 0;
    for(let x = 0; x <= num; x++){
        if (num % x == 0){
            count++;
        }
    }if (count == 2){
        console.log("is a prime number")
    }else{
        console.log("not a prime number")
    }
}numcheck(15)
// just check