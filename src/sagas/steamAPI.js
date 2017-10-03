class steamAPI {
  static FetchApps() {
    return fetch('http://api.steampowered.com/ISteamApps/GetAppList/v002/?', { method: 'GET' })
      .then((response) => {
        if (response.status !== 200) {
          console.log(`An error occured when tryin to FetchApps (${response.status})`)
          return
        }

        return response.json()
      })
      .catch((error) => {
        console.log(`An error occured when tryin to FetchApps (${error})`)
        return error
      })
  }

  static FetchNews(appid) {
    return fetch(`http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appid}`, { method: 'GET' })
      .then((response) => {
        if (response.status !== 200) {
          console.log(`An error occured when tryin to FetchNews (${response.status})`)
          return
        }

        return response.json()
      })
      .catch((error) => {
        console.log(`An error occured when tryin to FetchNews (${error})`)
        return error
      })
  }
}

export default steamAPI