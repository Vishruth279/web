const convertkgtolbs = (weight) => {
    const lbs = weight * 2.2;
  
    if (lbs > 150) {
      return "obese";
    } else if (lbs >= 100 && lbs <= 150) {
      return "you are ok";
    } else {
      return "underweight";
    }
  };
  
document.write(convertkgtolbs(120));
document.write(convertkgtolbs(50));
document.write(convertkgtolbs(20));




