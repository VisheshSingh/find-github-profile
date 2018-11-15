class Github {
  constructor() {
    this.client_id = "b165e51071a36fbbd6d5";
    this.client_secret = "542b7884fd9b995bcdfc485cce211da3f0abf578";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
