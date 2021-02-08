

const auth_link = "https://www.strava.com/oauth/token"

function getActivities(res){

  const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
  fetch(activities_link)
    .then((res) => console.log(res.json()))

}


function reAuthorize(){
  fetch(auth_link, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'

    },

    body: JSON.stringify({
      client_id: '61340',
      client_secret: 'f6133c63901944505b8c2b9f259a242df73c1f5b',
      refresh_token: 'ec7b874a2cc9a3639955e1d312568c9df2f31129',
      grant_type: 'refresh_token'

    })
  }).then(res => (res.json()))
      .then(res => getActivities(res))
}

reAuthorize()