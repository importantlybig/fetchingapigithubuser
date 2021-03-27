class Github {
    constructor() {
      this.client_id = '66c3fecc7c41bc1a4644';
      this.client_secret = 'f507bf42ce2917b6b81577692521f5099e0c8e61';
      this.repos_count = 10;
      this.repos_sort = 'created: asc';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(
        `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
      );

      const repoResponse = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
      );

      const profile = await profileResponse.json();
      const repos = await repoResponse.json();  

      return {
        profile,
        repos
      };
    }
  }