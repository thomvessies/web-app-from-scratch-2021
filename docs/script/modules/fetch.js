import { filterData } from './filter.js';

async function sendApiRequest(API_URL){
  let response = await fetch(API_URL)
  let data = await response.json()
  let filter = filterData(data)
  return filter
}

export { sendApiRequest }