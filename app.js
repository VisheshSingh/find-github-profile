// create an instance of github
const github = new Github();
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keydown", function(e) {
  const userText = e.target.value;
  if (userText !== "") {
    github.getUser(userText).then(data => console.log(data));
  }
});
