let string = "naman"

function reverse(string){
    let bag = "";
    for (let x = string.length - 1; x >= 0; x--){
        bag += string[x];

    }return bag;
}
let reversed = reverse(string);
if (string = reversed){
    console.log("palindrome";)
}else{
console.log("No")
}
// add else condition