const readingListActions={
    addToReadingList:'addToReadingList',
    removeFromReadingList:'removeFromReadingList',
    removeAllFromReadinglist:'removeAllFromReadingli',
    clearReadingList:'clearReadingList',
    addBulkToReadingList:'addBulkToReadingLi'
}

function readingListReducer(list=[], {type, book}) {
    switch (type) {
        case readingListActions.addToReadingList:
            return [...list, book]
        case readingListActions.removeFromReadingList:
            let newList=list.slice()
            for (let listBook of newList){
                if (listBook.id === book.id){
                    newList.splice(newList.indexOf(listBook), 1)
                    return newList
                }
            }
            return newList
        case readingListActions.removeAllFromReadinglist:
            return list.filter((item) => item.readingList === false)
        case readingListActions.clearReadingList:
            return []
        case readingListActions.addBulkToReadingList:
            return list.map((item) => {
                if (item.id === book.id) {
                    return {...item, readingList: true}
                }
                return item
            })
        default:
            throw new Error('I am not sure what you are trying to do')
    }
}

export {readingListActions, readingListReducer}
