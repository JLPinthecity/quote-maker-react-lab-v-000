import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
// import quotes from '../reducers/quotes';
import { removeQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  renderQuotes = () => this.props.quotes.map(quote => <QuoteCard key={quote.id} removeQuote={this.props.removeQuote} upvoteQuote={this.props.removeQuote} downvoteQuote={this.props.removeQuote}/> )

  render() {
    debugger
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
             {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: (quoteId) => dispatch(removeQuote(quoteId)),
    upvoteQuote: (quoteId) => dispatch(upvoteQuote(quoteId)),
    downvoteQuote: (quoteId) => dispatch(downvoteQuote(quoteId))
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
