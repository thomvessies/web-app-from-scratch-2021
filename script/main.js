import { sendApiRequest } from './modules/fetch.js';
import './vendor/router.js';
import './modules/input.js';

function useApiData(buttonNumber, data){
    
    if (buttonNumber == 1){
        var data_explanation = document.querySelector("#Default_page")
        data_explanation.innerHTML += "<br>"
        data_explanation.innerHTML += data.explanation
        data_explanation.innerHTML += data.media_type == "video" ? `<iframe width="560" height="315" src="${data.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : `<img src="${data.url}">`
    } else if (buttonNumber == 2){
        var data_explanation = document.querySelector("#PickSingleDay_page")
        data_explanation.innerHTML += "<br>"
        data_explanation.innerHTML += data.explanation
        data_explanation.innerHTML += data.media_type == "video" ? `<iframe width="560" height="315" src="${data.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : `<img src="${data.url}">`
    }
    else if (buttonNumber == 4){
        var i
        for (i = 0; i < data.length; i++) {
            var data_explanation = document.querySelector("#StartDateEndDate_page")
           data_explanation.innerHTML += "<br>"
           data_explanation.innerHTML += data[i].explanation
          data_explanation.innerHTML += data[i].media_type == "video" ? `<iframe width="560" height="315" src="${data[i].url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : `<img src="${data[i].url}">`
        }
    }
    
}

export { useApiData }