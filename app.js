// create an instance of github
const github = new Github();
// init user
const ui = new UI();

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", function(e) {
  const userText = e.target.value;
  if (userText !== "") {
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
