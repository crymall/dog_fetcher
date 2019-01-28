import React, { Component } from "react";
import axios from "axios";
import Image from "./Image";

class RandomDog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: ""
    };
  }

  componentDidMount() {
    this.getRandomImage();
  }

  getRandomImage = () => {
    axios.get("https://dog.ceo/api/breeds/image/random").then(res => {
      this.setState({
        imgUrl: res.data.message
      });
    });
  };

  render() {
    const { imgUrl } = this.state;

    if (!imgUrl) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <React.Fragment>
          <div className="random_dog_area">
            <button onClick={this.getRandomImage}>New Image</button>
            <Image imgUrl={imgUrl} addNewFavorite={this.props.addNewFavorite} />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default RandomDog;
