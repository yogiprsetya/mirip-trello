import React from "react";

class RandomQuote extends React.Component {
  state = {
    content: []
  }

  componentDidMount() {
    // Generate random tech quotes
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
    .then(response => response.json())
    .then(data => {
      this.setState({
        content: data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    const { content } = this.state;

    return (
      // Create blockquote style 
      <article>
        <blockquote>
          { content.en }
          <cite>~ { content.author }</cite>
        </blockquote>
      </article>
    );
  }
}

export default RandomQuote;
