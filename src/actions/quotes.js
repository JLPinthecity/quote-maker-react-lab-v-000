// TODO: Create action creators as defined in tests

export const addQuote = (quote) => ({
    type: "ADD_QUOTE",
    quote: Object.assign({}, quote)
})

export const removeQuote = (quoteId) => ({
    type: "REMOVE_QUOTE", 
    quoteId
})

export const upvoteQuote = (quoteId) => ({
    type: "UPVOTE_QUOTE",
    quoteId
})

export const downvoteQuote = (quoteId) => ({
    type: "DOWNVOTE_QUOTE",
    quoteId
})

//we call it like this > store.dispatch(doAddToDoItem('be awesome today'))