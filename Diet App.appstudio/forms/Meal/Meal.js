// Array to store Meals
listMeal = [];

SaveMeal.onclick=function(){

  //Stores input meal to the variable myMeal
  var myMeal = InputMeal.value;

  //Adding Meal to array
  listMeal.push(myMeal + "kcal");

  //Add the last item of the array to the list
  MealList.addItem(listMeal[(listMeal.length - 1)]);
  
  sum = 0;
  
  // Add all of the meal inputs together
  for (let x = 0; x < listMeal.length; x++){
        sum += parseInt(listMeal[x]);
    }
    
  MealsTotal.innerHTML = sum;
  
  // Store the value of calorie allowance locally
  CalorieAllowance = DailyCalories.value;
  
  // Calculate the percentage of calorie intake
  let percent = sum / CalorieAllowance * 100; 
  
  Progressbar1.value = parseInt(percent);

}

//Save Day button
CompleteDay.onclick=function(){
  
  //Saving Date Removing Month,Day,Year text
  var date = new Date().toISOString().slice(0, 19).replace('T',' ');
  
  DateList.addItem(date);
  
  //Saves the calories in meal to a day
  CaloriesList.addItem(sum + "kcal");
  
  //States whether goal was met or not
  if(sum < CalorieAllowance)
  {
    goal = "Yes";
  }
  else{
    goal = "No";
  }
  HitGoalList.addItem(goal);
  
  //Clear all meal data once day is saved
  MealList.clear();
  Progressbar1.value = parseInt(0);
  sum = 0;
  listMeal = [];
  MealsTotal.innerHTML = 0;
  console.log(MealList);
}
