import React from "react";
import SuperGirlCard from "./components/SuperGirlCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import supergirls from "./supergirls.json";
import "./App.css";

//Creating a function which will randomize the arrangement of the animal images in the array
function randomizesupergirls(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends React.Component {
  state = {
    supergirls: supergirls,
    guessed: "",
    score: 0,
    topScore: 0,
    imageClicked: []
  };
  componentDidUpdate() {
    this.handleScore();
  }
  handleShuffel = () => {
    let randomized = randomizesupergirls(supergirls);
    this.setState({ supergirls: randomized });
  };

  handleScore = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({
        guessed: "Correct!",
        topScore: this.state.score
      });
    } else if (this.state.score === 12) {
      console.log("score:", this.state.score);
      this.setState({ score: 0, guessed: "You Win!", imageClicked: [] });
    }
  };

  handleClick = id => {
    const click = id;
    if (this.state.imageClicked.indexOf(click) === -1) {
      const imageClicked = this.state.imageClicked;
      imageClicked.push(click);
      this.setState({
        imageClicked: imageClicked,
        score: this.state.score + 1
      });
      this.handleShuffel();
    } else {
      this.setState({ guessed: "Incorrect!", score: 0, imageClicked: [] });
      // this.setState({ guessed: "" });
      console.log(this.state.score);
      console.log(this.state.imageClicked);
    }
  };
  render() {
    return (
      <Wrapper>
        <Title />
        <Navbar
          guessed={this.state.guessed}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="container">
          <div className="row">
            {this.state.supergirls.map(supergirl => (
              <div className="col-xs-6 col-md-4 col-lg-3">
                <SuperGirlCard
                  key={supergirl.id}
                  id={supergirl.id}
                  image={supergirl.image}
                  handleClick={this.handleClick}
                />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
