function filterData(rawData) {
    if (rawData.length > 1){
        const homeData = rawData.map((element) => {
            return {
                date: element.date,
                explanation: element.explanation,
                media_type: element.media_type,
                title: element.title,
                url: element.url
            };
        });
        return homeData;
    }
  
    else {
        const detailData = {
            date: rawData.date,
            explanation: rawData.explanation,
            media_type: rawData.media_type,
            title: rawData.title,
            url: rawData.url
        };
        return detailData
    }
}

export { filterData }