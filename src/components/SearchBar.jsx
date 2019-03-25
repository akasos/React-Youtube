import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSearchTermSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-ber ui segment">
        <form onSubmit={this.onFormSubmit} action="" className="ui form">
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
