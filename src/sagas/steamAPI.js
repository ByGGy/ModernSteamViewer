class steamAPI {
  static FetchApps() {
    return fetch('http://api.steampowered.com/ISteamApps/GetAppList/v002/?', { method: 'GET' })
      .then((response) => {
        if (response.status !== 200) {
          throw response.status 
        }

        return response.json()
      })
      .catch((error) => {
        console.log(`An error occured when tryin to FetchApps (${error})`)
        throw error
      })
  }

  static FetchNews(appid) {
    return fetch(`http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appid}`, { method: 'GET' })
      .then((response) => {
        if (response.status !== 200) {
          throw response.status
        }

        return response.json()
      })
      .catch((error) => {
        console.log(`An error occured when tryin to FetchNews (${error})`)
        throw error
      })
  }
}

export default steamAPI