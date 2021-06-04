let first = document.getElementById("btn");
first.addEventListener('click', () => {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let bmi = Math.round(weight / (height ** 2));
    let result = document.getElementById("result");
    let message = "";
    let color = "";

    if (bmi < 18.5) {
        message = ", you are underweight";
        color = "#FFD016";

    } else if ((bmi >= 18.5) && (bmi <= 24.9)) {
        message = ", you have normal weight";
        color = "#538313";


    } else if ((bmi > 24.9) && (bmi >= 29.9)) {
        message = ", you are overweight";
        color = "#fd802e";


    } else if ((bmi > 29.9) && (bmi <= 35)) {
        message = " , you are obese";
        color = "#F26450";

    } else {
        message = " , you are extremely obese";
        color = "#CB2028";

    }
    result.innerHTML = "Your BMI is " + bmi + message;
    result.style.color = color;

}, false);