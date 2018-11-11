import React from "react";

class SeachParams extends React.Component {
  state = {
    location: "Seattle, WA",
    animal: "",
    breed: ""
  };

  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleAnimalChange = event => {
    this.setState({
      animal: event.target.value
    });
  };

  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            onChange={this.handleLocationChange}
            type="text"
            id={location}
            value={this.state.location}
            placeholder="Location"
          />
        </label>
      </div>
    );
  }
}

export default SeachParams;
