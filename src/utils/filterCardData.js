const filterCardData = (data) => {
    return data.map((dataItem)=>{
        return {
            id: dataItem.id,
            newsTitle: dataItem.title,
            newsDescription: dataItem.abstract,
            newsPostedBy: dataItem.byline,
            newPublishedDate: dataItem.published_date,
            media: dataItem.media,
        }
    })
}

export default filterCardData;