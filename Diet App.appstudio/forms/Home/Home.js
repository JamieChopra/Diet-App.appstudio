Hamburger1.onclick = function(s) {
  if (typeof(s) == "object") {
      return;
  }
  if (s === "Home"){
    ChangeForm(Home);
  }
  if (s === "Meal"){
    ChangeForm(Meal);
  }
  if (s === "Days"){
    ChangeForm(Days);
    }
}

Home.onshow=function(){
  // Appends header globally
  NSBPage.appendChild(HeaderGlobal)
  }

Calculate.onclick=function(){

  var weight = parseInt(Weight.value);

  var height = parseInt(Height.value);

  var age = parseInt(Age.value);

  let BMR = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
  // Used parseInt to round the BMR number to avoid decimals
  let Calories = parseInt(BMR) * 1.2;
  CalorieAllowance.innerHTML = "Calorie Allowance: " + Calories + " kcal";

  DailyCalories.innerHTML = Calories;
}
