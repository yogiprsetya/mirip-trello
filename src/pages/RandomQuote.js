import React from "react";

class RandomQuote extends React.Component {
  state = {
    content: []
  }

  componentDidMount() {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
    .then(response => response.json())
    .then(data => {
      this.setState({
        content: data
      })
      console.log(data)
    })
    .catch(err => {
      console.log('Fetch Error :-S', err);
    })
  }

  render() {
    const { content } = this.state;

    return (
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
