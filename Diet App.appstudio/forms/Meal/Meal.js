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
  
  let sum = 0;
  
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


