import { sendApiRequest } from './modules/fetch.js';

let searchSingleDayButton = document.querySelector("#searchSingleDay")
let searchStartEndButton = document.querySelector("#searchStartEnd")

let calendar1 = document.querySelector("#searchTerm1")
let calendar2 = document.querySelector("#searchTerm2")
var API_KEY = "P3unXRlp7hkIU9gPyyZQu0xCiVuEXcsTzzRgCAhD"
var API_url = ""


routie({
    'Home_page': function() {
        console.log("Home_page")
    },
    'Default_page': function() {
        console.log("Default_page")
        API_url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    },
    'PickSingleDay_page': function() {
        console.log("PickSingleDay_page")
        API_url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${calendar1}`
    },
    'StartDateEndDate_page': function() {
        console.log("StartDateEndDate_page")
        API_url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${calendar1}&end_date=${calendar2}`
    }
});

searchSingleDayButton.addEventListener("click", async()=>{
    const data = await sendApiRequest(calendar1.value, calendar2.value)
    console.log(calendar1, calendar2)
    useApiData(data)
})

searchStartEndButton.addEventListener("click", async()=>{
    const data = await sendApiRequest(calendar1.value, calendar2.value)
    console.log(calendar1, calendar2)
    useApiData(data)
})

function useApiData(data){
    const data_explanation = document.querySelector("#startDate_endDate")
    var i
    for (i = 0; i < data.length; i++) {
        console.log(data)
        data_explanation.innerHTML += data[i].explanation
        //data_explanation.innerHTML += `<img src="${data.url}">`
        data_explanation.innerHTML += data[i].media_type == "video" ? `<iframe width="560" height="315" src="${data[i].url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : `<img src="${data[i].url}">`
        data_explanation.innerHTML += "<br>"
    }
}