class Github {
    constructor() {
      this.client_id = '66c3fecc7c41bc1a4644';
      this.client_secret = 'f507bf42ce2917b6b81577692521f5099e0c8e61';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(
        `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
      );

      const profile = await profileResponse.json();
    
      return {
        profile
      };
    }
  }