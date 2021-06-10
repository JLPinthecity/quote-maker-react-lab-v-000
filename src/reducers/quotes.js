export default (state = [], action) => {


  switch(action.type){
    
    case "ADD_QUOTE":
      const quote = {
        id: action.quote.id,
        content: action.quote.content,
        author: action.quote.author
      }
    
      return {quotes: state.concat(quote)};

    case "REMOVE_QUOTE":

      return {quotes: state.filter(quote => quote.id !== action.quoteId)};

    
    
    default:
      return state;
  }

}





//We will also need to extend out the Quotes Reducer 
//to handle removing quotes, 
//upvoting quotes, and 
//downvoting quotes as well

// [
//   {
//     id: '23423424242-42342423424242-fafdb',
//     content: 'One Awesome Quote',
//     author: 'Luke Ghenco'
//   }
// ]