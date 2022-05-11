// Array to store Meals
listMeal = [];

Button1.onclick=function(){
  //CalorieResult.innerHTML = InputMeal.value;
  

  //Stores input meal to the variable myMeal
  var myMeal = InputMeal.value;

  

  //Adding Meal to array
  listMeal.push(myMeal + "kcal");

  console.log(listMeal);
  

  //Add the last item of the array to the list
  Listgroup1.addItem(listMeal[(listMeal.length - 1)]);
  
  
  console.log(Listgroup1);
  
  sum = 0;
  
  // Add all of the meal inputs together
  for (let x = 0; x < listMeal.length; x++){
        sum += parseInt(listMeal[x]);
    }
    
  Label2.innerHTML = sum;
  
  // Store the value of calorie allowance locally
  CalorieAllowance = Label3.value;
  
  // Calculate the percentage of calorie intake
  let percent = sum / CalorieAllowance * 100; 
  
  Progressbar1.value = parseInt(percent);
  
  // Create method for turning progress bar red if 
  // it goes over 100%

}



//Save Day button
Button3.onclick=function(){
  
  //Saving Date Removing Month,Day,Year text
  var date = new Date().toISOString().slice(0, 19).replace('T',' ');
  
  Listgroup3.addItem(date);
  
  //Saves the calories in meal to a day
  Listgroup2.addItem(sum + "kcal");
  
  //States whether goal was met or not
  if(sum < CalorieAllowance)
  {
    goal = "Yes";
  }
  else{
    goal = "No";
  }
  Listgroup4.addItem(goal);
  
  //Clear all meal data once day is saved
  Listgroup1.clear();
  Progressbar1.value = parseInt(0);
  sum = 0;
  listMeal = [];
  Label2.innerHTML = 0;
  console.log(Listgroup1);
}
