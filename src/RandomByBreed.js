import React, { Component } from "react";
import axios from "axios";
import Image from "./Image";

class RandomByBreed extends Component {
  constructor() {
    super();
    this.state = {
      imgUrl: "",
      allBreeds: [],
      selectedBreed: ""
    };
  }

  componentDidMount() {
    this.getAllBreeds();
  }

  getAllBreeds = () => {
    axios.get("https://dog.ceo/api/breeds/list/all").then(res => {
      this.setState({
        allBreeds: Object.keys(res.data.message)
      });
    });
  };

  handleSelect = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { selectedBreed } = this.state;
    axios
      .get(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
      .then(res => {
        this.setState({
          imgUrl: res.data.message
        });
      });
  };

  render() {
    const { imgUrl, allBreeds, selectedBreed } = this.state;

    if (!allBreeds.length) {
      return <h1>Loading...</h1>;
    } else {
      let breedOptions = allBreeds.map((breed, i) => {
        return (
          <option key={i + 1} value={breed}>
            {breed}
          </option>
        );
      });

      return (
        <React.Fragment>
          <form onSubmit={this.handleSubmit}>
            <select
              name="selectedBreed"
              onChange={this.handleSelect}
              value={selectedBreed}
            >
              <option key="0" value="" />
              {breedOptions}
            </select>
            <input
              type="submit"
              value="Fetch!"
              disabled={selectedBreed ? false : true}
            />
          </form>

          {imgUrl ? <Image imgUrl={imgUrl} /> : null}
        </React.Fragment>
      );
    }
  }
}

export default RandomByBreed;
