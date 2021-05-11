import {renderHome, renderDetail} from './modules/render.js';

/**
 * checks the date on reload of page
 */
function checkReload(){
    let beginUrl = window.location.href
    let checkWindow = beginUrl.includes("detail_page");
    if (checkWindow){
        let url = beginUrl.substring(beginUrl.lastIndexOf('/') + 1)
        renderDetail(url)
    }
    else {
        renderHome()
    }
}
checkReload()

