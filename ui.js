class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
    <div class="col-md-3">
        <img src="${user.avatar_url}" class="img-fluid mb-2"/>
        <a href="${
          user.html_url
        }" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
    </div>
    <div className="col-md-9">
        <span class="badge badge-warning">Public Repos ${
          user.public_repos
        }</span>
        <span class="badge badge-secondary">Public Gists ${
          user.public_gists
        }</span>
        <span class="badge badge-success">Followers ${user.followers}</span>
        <span class="badge badge-danger">Following ${user.following}</span>
        <br/><br/>
        <ul className="list-group">
            <li class="list-group-item">Company : ${user.company}</li>
            <li class="list-group-item">Website/Blog : ${user.blog}</li>
            <li class="list-group-item">Location : ${user.location}</li>
            <li class="list-group-item">Member Since : ${user.created_at}</li>
        </ul>
    </div>
</div>
    </div>
    <h3 className="page-heading mb-3">Latest Repos</h3>
<div id="repos"></div>
    `;
  }

  showAlert(mesg, className) {
    // clear any remaining alerts
    this.clearAlert();
    // create a div
    const div = document.createElement("div");
    // add classes
    div.className = className;

    div.appendChild(document.createTextNode(mesg));

    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");

    container.insertBefore(div, search);

    // timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
