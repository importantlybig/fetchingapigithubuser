// Init class Github
const github = new Github();
// Init class UI
const ui = new UI();

const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;
  if (userText !== '') {
    github.getUser(userText).then((data) => {
      //console.log(data);
      if (data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found! Try Again', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
