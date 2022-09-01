const loadMeals = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  //   console.log(meals);
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerHTML = ``;
  meals.forEach((meal) => {
    // console.log(meal);
    const newDiv = document.createElement("div");
    newDiv.classList.add("col");
    newDiv.innerHTML = `
            <div class="card h-100">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
              </div>
              <button class="btn btn-danger w-50 mx-auto mb-2" onclick="foodDetails(${
                meal.idMeal
              })">details</button>
            </div>
    `;
    mealsContainer.appendChild(newDiv);
  });
};

const searcFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadMeals(searchText);
  searchField.value = "";
};

const foodDetails = (mealId) => {
  // console.log("btn clicked", mealId);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data.meals[0]));
};
const displayDetails = (meal) => {
  // console.log(meal);
  const mealDetailsContainer = document.getElementById("meal-details");
  mealDetailsContainer.innerHTML = ``;
  const newDivDetails = document.createElement("div");
  newDivDetails.classList.add("card");

  newDivDetails.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">
     ${meal.strArea} ${meal.strTags}
    </p>
  </div>
  `;

  mealDetailsContainer.appendChild(newDivDetails);
};
loadMeals("");
