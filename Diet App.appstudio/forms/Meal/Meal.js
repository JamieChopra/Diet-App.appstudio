// Array to store Meals
const listMeal = [];

Label3.innerHTML = 2000;

Button1.onclick=function(){
  //CalorieResult.innerHTML = InputMeal.value;
  

  //Stores input meal to the variable myMeal
  var myMeal = InputMeal.value;

  

  //Adding Meal to array
  listMeal.push(myMeal);

  console.log(listMeal);
  

  //Add the last item of the array to the list
  Listgroup1.addItem(listMeal[(listMeal.length - 1)]);
  
  let sum = 0;
  
  for (let x = 0; x < listMeal.length; x++){
        sum += parseInt(listMeal[x]);
    }
    
  Label2.innerHTML = sum;
  
  
}


