
//init Github
const github = new Github;
//initi UI
const ui = new UI;

// search input 
const searchUser = document.getElementById('searchUser');

//search input event listner
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;

  

    if(userText !== ''){
       //make a http call
       github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                //show alert
                ui.showAlert('user not found', 'alert alert-danger');

            }else{
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos)
              
            }
        })
    }else{
        //cleat profile
        ui.clearProfile();

    }
});