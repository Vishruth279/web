const reverseNumber = (number) => {
    const reversedString=number.toString().split("").reverse().join("");
    return parseInt(reversedString);
}
const given=17353;
const reversedNumber = reverseNumber(given);
document.write(reversedNumber);


