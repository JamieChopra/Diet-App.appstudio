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

Button2.onclick=function(){

  var weight = parseInt(Weight.value);

  var height = parseInt(Height.value);

  var age = parseInt(Age.value);

  let BMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  // Used parseInt to round the BMR number to avoid decimals
  let Calories = parseInt(BMR) * 1.2;
  CalorieAllowance.innerHTML = "Calorie Allowance: " + Calories + " kcal";

  Label3.innerHTML = Calories;
}
