const loadMealsDb = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals))
    .catch((error) => console.log(error));
};

// display meals code here

const displayMeals = (meals) => {
  //   console.log(meals.meals[0]);
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerText = ``;
  for (const meal of meals) {
    // console.log(meal);
    const newDiv = document.createElement("div");
    newDiv.classList.add("col");
    newDiv.innerHTML = `
    <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">
              Meal Area : ${meal.strArea}
            </p>
            <p class="card-text">
              Meal Catagory : ${meal.strCategory}
            </p>
            <button class="btn btn-danger w-50 mx-auto mb-2" onclick="mealsDeails(${meal.idMeal})">Details</button>
        </div>
    </div>
    `;
    mealsContainer.appendChild(newDiv);
  }
};
// Search Code Here
const searchField = (search) => {
  const searchMealField = document.getElementById("search-field");
  const searchText = searchMealField.value;
  loadMealsDb(searchText);
  searchMealField.value = ``;
};

// meals details code here

const mealsDeails = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals[0]));
  console.log("btn clicked", mealId);
};

const displayMealDetails = (meal) => {
  const searchMeal = document.getElementById("search-meal");
  searchMeal.innerHTML = ``;
  const newDivDetails = document.createElement("div");
  newDivDetails.classList.add("card");

  newDivDetails.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">
       ${meal.strArea} ${meal.strTags}
      </p>
      <p class="card-text">
      ${meal.strTags}
      </p>
    </div>
    `;
  searchMeal.appendChild(newDivDetails);
};
loadMealsDb("");
