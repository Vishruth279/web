function chectvirus(V,B){
    let virusindex=0;
    let bloodindex=0;

    while(virusindex<V.length && bloodindex<B.length)
    {
        if(V[virusindex]===B[bloodindex])
        {
            bloodindex++;
        }
        virusindex++;
    }
    if(bloodindex===B.length)
    {
        return "POSITIVE";
    }
    else{
        return "NEGATIVE";
    }

}
const viruscompo="coronavirus";
const bloodcompo1="ravus";
document.write(chectvirus(viruscompo,bloodcompo1));

const bloodcompo2="abcde";
document.write(chectvirus(viruscompo,bloodcompo2));


  