import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  // ----- componentDidMount ----- //
  constructor() {
    super();
    this.state = {
      monosters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((users) => {
        this.setState({ monosters: users });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { monosters, searchField } = this.state;
    const updatedMonosters = monosters.filter((monoster) =>
      monoster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1
          style={{
            fontFamily: "'Bigelow Rules', cursive",
            fontWeight: "bolder",
            fontSize: "70px",
            color: "#0CCAC4",
          }}
        >
          Monsters Rolodex
        </h1>
        <SearchBox
          placeholder="search monstors"
          onChange={(event) =>
            this.setState({ searchField: event.target.value })
          }
        ></SearchBox>
        <CardList monosters={updatedMonosters}></CardList>
      </div>
    );
  }
}

export default App;
