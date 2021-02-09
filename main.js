import { sendApiRequest } from './modules/fetch.js';

let searchButton = document.querySelector("#search")

searchButton.addEventListener("click", async()=>{
    console.log("button pressed")
    const data = await sendApiRequest()
    useApiData(data)
})

function useApiData(data){
    console.log(data)
    const data_explanation = document.querySelector("#content")
    const data_type = console.log(data.media_type)
    console.log(data.media_type)
    console.log(data)

    data_explanation.innerHTML += data.explanation
    //data_explanation.innerHTML += `<img src="${data.url}">`
    data_explanation.innerHTML += data.media_type == "video" ? `<iframe width="560" height="315" src="${data.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : `<img src="${data.url}">`
}