import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import "./App.css";

const Options = () => {
  return [
    "Listen to music together",
    "Meditate for 5 mins together",
    "Draw/doodle together",
    "Digital adventure book",
    "Watch a random Youtube video",
    "Prayer requests for each other",
    "Say one thing you are grateful for today",
    "Read the book (from bookclub) together"
  ];
};

const AppCard = props => (
  <Card fluid color={props.color}>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
    </Card.Content>
  </Card>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: -1
    };
  }

  handleClick = () => {
    const numCards = Options().length;
    const chosenOne = Math.floor(Math.random() * numCards);
    this.setState({
      currentCard: chosenOne
    });
  };

  render() {
    let cards = [];
    const options = Options();
    for (const [index, value] of options.entries()) {
      let color = index === this.state.currentCard ? "pink" : null;
      cards.push(<AppCard key={index} name={value} color={color} />);
    }
    return (
      <div className="App">
        <Card.Group>{cards}</Card.Group>
        <Button
          fluid
          className="AppButton"
          color="olive"
          onClick={this.handleClick}
        >
          Let's have fun!
        </Button>
      </div>
    );
  }
}

export default App;
