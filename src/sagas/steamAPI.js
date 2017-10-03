class steamAPI {
  static FetchApps() {
    return fetch('http://api.steampowered.com/ISteamApps/GetAppList/v002/?', { method: 'GET' })
      .then((response) => {
        if (response.status !== 200) {
          console.log(`An error occured when tryin to FetchApps ({response.status})`)
          return
        }

        return response.json()
      })
      .catch((error) => {
        console.log(`An error occured when tryin to FetchApps ({error})`)
        return error
      })
  }
}

export default steamAPI