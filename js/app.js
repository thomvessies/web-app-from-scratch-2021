

const auth_link = "https://www.strava.com/oauth/token"

function getActivities(res){

  const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
  fetch(activities_link)
    .then((res) => res.json())
    .then(function (data){

      var map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      for(var x=0;x<data.length; x++){
        console.log(data[x])
      }

    }
    )
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