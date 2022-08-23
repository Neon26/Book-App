
const readingListActions={
    addToReadingList: "addToReadingList",
    removeFromReadingList: "removeFromReadingList",
    clearReadingList: "clearReadingList",
}

function readingListReducer(readingList=[], {type,book}){
    switch(type){
        case readingListActions.addToReadingList:
            return [...readingList, book];
        case readingListActions.removeFromReadingList:
            let newList = readingList.slice();
            for ( let thisBook of newList){
                if(thisBook.id===book.id){
                    newList.splice(newList.indexOf(thisBook),1);
                    return newList;
                }
            }
        case readingListActions.clearReadingList:
            return [];
        default:
            throw new Error("Invalid action type");
            
    }
}

export{
    readingListActions,
    readingListReducer
}
