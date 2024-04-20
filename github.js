class Github {
    constructor(){
        this.client_id = 'd9308aacf8b204d361fb';
        this.client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';
        this.repose_count = 5;
        this.repose_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?par_page=${this.repose_count}&sort=${this.repose_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        

        return{
            profile,repos
        }
    }
}



// class somthing {
//     async getapi(){
//         const api = await fetch('afdgdfhfghghgf');

//         const testapi = await api.json();

//         return testapi
//     }


// }