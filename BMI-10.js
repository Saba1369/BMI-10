const weight = prompt("What is your weight in kg?");
const height = prompt("What is your height in meter?");

  if (weight && height) {
      bmi = Number(weight) / (Number(height) ** 2);
      if (bmi < 18.5) {
        alert("Under Weight");
      }else if (bmi >= 18.5 && bmi < 25) {
        alert("Normal Weight");
      }else if (bmi >= 25 && bmi < 30) {
        alert("Over Weight");
      }else if (bmi >= 30 && bmi < 35) {
        alert("Obesity (Class 1)");
      }else if (bmi >= 35 && bmi < 40) {
        alert("Obesity (Class 2)");
      }else{
        alert("Extreme Obesity");
      }
    }else{
      alert("Please enter your weight and height");
    }