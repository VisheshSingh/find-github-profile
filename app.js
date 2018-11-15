// create an instance of github
const github = new Github();
// init user
const ui = new UI();

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keypress", function(e) {
  const userText = e.target.value;
  if (userText !== "") {
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // Show alert
      } else {
        // Show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // clear profile
  }
});
