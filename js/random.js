const loadUsers = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((users) => displayUser(users.results));
};

const displayUser = (users) => {
  const div = document.getElementById("random-user");
  for (const user of users) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("div");
    // console.log(user);
    newDiv.innerHTML = `
    <img src="${user.picture.large}"></img>
    <h2>User Name : ${user.name.first}  ${user.name.last}</h2>
    <h4>Email : ${user.email}</h4>
    <p>Country :${user.location.country}</p>
    `;
    div.appendChild(newDiv);
  }
};

loadUsers();
