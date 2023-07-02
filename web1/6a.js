function capitalizefirstletter(string){
    return string.split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
}
var inputstr=prompt("enter string");
var result = capitalizefirstletter(inputstr);
alert("result is: "+result);




  