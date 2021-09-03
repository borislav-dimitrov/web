function calcCalories() {
    var curCalories = document.getElementById("current_calories").innerHTML;
    var desiredCalories = document.getElementById("desired_calories").innerHTML;
    
    var numberCurCalories = split(curCalories);
    var numberDesiredCalories = split(desiredCalories);

    numberCaloriesLeft = numberDesiredCalories - numberCurCalories;
    
    var caloriesLeft = numberCaloriesLeft.toString() + " " + "kcal";

    document.getElementById("calories_left").innerHTML = caloriesLeft;

    var caloriesLeftPercent = caloriesLeftAsPercent(numberCurCalories, numberDesiredCalories) ;

    //console.log(numberCaloriesLeft);
    //console.log(caloriesLeft);
    //console.log(caloriesLeftPercent.toString());

    displayPercentGraph(".current_as_percent", caloriesLeftPercent);
}

function split(string) {
    var splitted = string.split(" ");
    var num = parseInt(splitted[0]);
    return num;
  }

function caloriesLeftAsPercent(kcal, desired){
    var division = kcal / desired;
    var multiply = division * 100;
    return parseInt(multiply);
}

function displayPercentGraph(element, nutritionAsPercent) {
    var a = document.querySelector(element);

    if(nutritionAsPercent < 100){
        a.style.borderRadius = '5px 0px 0px 5px';
    } else {
        a.style.borderRadius = '5px';
    }

    a.style.width = nutritionAsPercent+"%";

  }
