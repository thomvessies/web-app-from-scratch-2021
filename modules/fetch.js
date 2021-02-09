
async function sendApiRequest(){
  let API_KEY = "P3unXRlp7hkIU9gPyyZQu0xCiVuEXcsTzzRgCAhD"
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  return data
}

export { sendApiRequest }