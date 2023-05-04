import { Component } from 'react';
import {
  SearchbarHeader,
  SearchForm,
  ButtonSerchForm,
  ButtonLabel,
  SearchFormInput,
} from './searchbar.styled';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    input: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setQuery(this.state.input);
  };

  render() {
    return (
      <SearchbarHeader className="searchbar">
        <SearchForm className="form" onSubmit={this.handleSubmit}>
          <ButtonSerchForm type="submit" className="button">
            <img
              class="search-img"
              src="../../../img/Vector_search_icon.svg.png"
              alt="search"
              width="18"
              height="18"
            />
            <ButtonLabel className="button-label">Search</ButtonLabel>
          </ButtonSerchForm>

          <SearchFormInput
            className="input"
            type="text"
            value={this.state.input}
            placeholder="Search images"
            onChange={e => this.setState({ input: e.target.value })}
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
