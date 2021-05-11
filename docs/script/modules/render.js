import { sendApiRequest } from './fetch.js';
import { makeDate } from './makedate.js';
import '../router/router.js';

const homeDiv = document.querySelector("#home")
const detailDiv = document.querySelector("#detail")
const today = makeDate(new Date())
let beginDate = makeDate(new Date(Date.now() - 13 * 24 * 60 * 60 * 1000))
const API_KEY = "P3unXRlp7hkIU9gPyyZQu0xCiVuEXcsTzzRgCAhD"

async function renderHome(){
    let API_Home = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${beginDate}&end_date=${today}`
    let data = await sendApiRequest(API_Home)
    let mediaType
    data.forEach((element) => {
        if(element.media_type == "video"){
            mediaType = "iframe"
        }
        else {
            mediaType = "img"
        }
        const html = `
            <article class="data">
                <a href="#detail_page/${element.date}">
                    <h2>${element.title}</h2>
                    <${mediaType} src="${element.url}">
                </a>
            </article>
          `;
    homeDiv.insertAdjacentHTML('afterbegin', html);
    });
    linkjes()
};

function linkjes(){
    let links = document.querySelectorAll('a');
    for (let i = 0; i < links.length; i++) {
        links[i].onclick = () => {
            let url = links[i].href
            let date = url.substring(url.lastIndexOf('/') + 1);
            renderDetail(date)
        }
    }
}

async function renderDetail(specificDate){
    let API_Detail = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${specificDate}`
    let data = await sendApiRequest(API_Detail)
    const html = `
        <article>
            <h2>${data.title}</h2>
            <img src="${data.url}">
            <p>${data.explanation}</p>
            <a href="" class="back">Go back</a>
        </article>
    `;
    detailDiv.insertAdjacentHTML('afterbegin', html);
}

export { renderHome, renderDetail}