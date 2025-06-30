let usernameInput = document.querySelector("#username");
let searchBtn = document.querySelector("#searchBtn");
let result = document.querySelector("#result");

searchBtn.addEventListener("click", function () {
  result.innerHTML = ""; // გაწმენდა

  let username = usernameInput.value;
  let url = "https://api.github.com/users/" + username;

  if (username === "") {
    result.innerHTML = "<p style='color:red;'>Please enter a username.</p>";
    return;
  }

  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("User not found");
      }
      return response.json();
    })
    .then(function (data) {
      showUserData(data);
    });
});

function showUserData(data) {
  let card = document.createElement("div");

  let avatar = document.createElement("img");
  avatar.src = data.avatar_url;
  let name = document.createElement("p");
  name.textContent = "Name: " + (data.name || "No name");

  let bio = document.createElement("p");
  bio.textContent = "Bio: " + (data.bio || "No bio");

  card.appendChild(avatar);
  card.appendChild(name);
  card.appendChild(bio);

  result.appendChild(card);
}
