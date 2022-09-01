const loadUserFetch = () => {
  const url = `https://randomuser.me/api/?gender=female`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadUsers(data.results[0]))
    .catch((error) => console.log(error));
};
const loadUsers = (user) => {
  console.log(user);
};
loadUserFetch();

const loadUserAsync = async () => {
  const url = `https://randomuser.me/api/?gender=female`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    loadUsers(data.results[0]);
  } catch (error) {
    console.log(error);
  }
};
loadUserAsync();
