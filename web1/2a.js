const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const randomNumber= Math.random();
        randomNumber > 0.5 ? resolve(randomNumber) : reject("Error: the random no is <0.5");
    },2000);
});
myPromise
    .then(result => document.write("Success! the random no is"+result))
    .catch(error => document.write(""+error));
