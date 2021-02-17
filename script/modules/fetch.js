async function sendApiRequest(date1, date2){
  var API_KEY = "P3unXRlp7hkIU9gPyyZQu0xCiVuEXcsTzzRgCAhD"
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${date1}&end_date=${date2}`);
  let data = await response.json()
  return data
}

export { sendApiRequest }