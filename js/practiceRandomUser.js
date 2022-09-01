const loadRandomUser = () => {
  const url = `https://randomuser.me/api/?results=50`;
  fetch(url)
    .then((res) => res.json())
    .then((users) => displayRandomUser(users.results));
};

const displayRandomUser = (users) => {
  //   console.log(users);
  const usersContainer = document.getElementById("users-container");
  for (const user of users) {
    // console.log(user);
    const newDiv = document.createElement("div");
    newDiv.classList.add("user");
    newDiv.innerHTML = `
        <img src="${user.picture.large}"></img>
        <h1>Name : ${user.name.title} ${user.name.first} ${user.name.last}</h1>
        <p>Location : 
        Country : ${user.location.country},
        City : ${user.location.city},
        PostCode : ${user.location.postcode} </p>
    `;
    usersContainer.appendChild(newDiv);
  }
};

loadRandomUser();
