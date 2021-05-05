import { sendApiRequest } from './modules/fetch.js';
import './router/router.js';

const dataDiv = document.querySelector("#info")
const today = makeDate(new Date())
let beginDate = makeDate(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000))
const API_KEY = "P3unXRlp7hkIU9gPyyZQu0xCiVuEXcsTzzRgCAhD"
let API_url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${beginDate}&end_date=${today}`
let data_list = await sendApiRequest(API_url)


console.log(data_list.length)
console.log(data_list)
renderData(data_list)

function makeDate(date){
    let dd = date.getDate()
    let mm = date.getMonth()+1
    const yyyy = date.getFullYear()
    if (dd < 10){
        dd = "0" + dd
    }
    if (mm < 10){
        mm = "0" + mm
    }
    const returnDate = yyyy + "-" + mm + "-" + dd
    return returnDate
}

function renderData(data){
    let mediaType
    data.forEach((element) => {
        if(element.media_type == "video"){
            mediaType = "iframe"
            console.log(element.media_type)
        }
        else {
            mediaType = "img"

        }
        const html = `
            <article class="data">
              <h2>${element.title}</h2>
              <p>${element.media_type}</p>
              <a href="#giphy/547839088">
                <${mediaType} src="${element.url}">
              </a>
            </article>
          `;
    dataDiv.insertAdjacentHTML('beforeend', html);
  });
};
    // console.log(data)
    // let dataSection = document.querySelector("#info")
    // let explanation = document.createElement("P")
    // dataSection.innerHTML = ""
    // explanation.innerHTML = data.explanation
    // dataSection.appendChild(explanation)
    // data_explanation.appendChild(explanation)
    // if (data_list.mediaType == "video"){
    //     let mediaType = document.createElement("iframe")
    //     mediaType.src = data_list.url
    //     data_explanation.appendChild(mediaType)
    // } else {
    //     let mediaType = document.createElement("img")
    //     mediaType.src = data_list.url
    //     data_explanation.appendChild(mediaType)
    // }
export { renderData }