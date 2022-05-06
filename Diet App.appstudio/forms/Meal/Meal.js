// Array to store Meals
const listMeal = [];

Button1.onclick=function(){
  //CalorieResult.innerHTML = InputMeal.value;
  

  //Stores input meal to the variable myMeal
  var myMeal = InputMeal.value;

  

  //Adding Meal to array
  listMeal.push(myMeal + "kcal");

  console.log(listMeal);
  

  //Add the last item of the array to the list
  Listgroup1.addItem(listMeal[(listMeal.length - 1)]);
  
  Checkbox1.addItem("Delete");
  
  console.log(Listgroup1);
  
  let sum = 0;
  
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


Button3.onclick=function(){
  let checked = Checkbox1.length - 1;
  console.log(checked);
  delete Listgroup1[checked];
  console.log(checked);
}


