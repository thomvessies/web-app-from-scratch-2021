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

export { makeDate }