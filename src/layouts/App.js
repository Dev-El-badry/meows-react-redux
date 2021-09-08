import React, { Component } from "react";
import SearchBox from "../partials/SearchBox";
import CardList from "../components/cards/CardList";
import './App.css';
import { connect } from "react-redux";
import { fetchCats, setSearchField } from '../actions/actions.js';

export class App extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    const {onSearchChange, searchField, isPending, cats} = this.props;
    const filterCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      !isPending ? <div className='tc'>
        <h1 className='f1'>Meows 😻❤️</h1>
        <SearchBox searchChange={onSearchChange} />
        <CardList cats={filterCats} />
      </div> : 'is loading ...'
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchField: state.searchCatsReducer.searchField,
    cats: state.fetchCatsReducer.cats,
    isPending: state.fetchCatsReducer.isPending,
    error: state.fetchCatsReducer.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    fetchCats: () => dispatch(fetchCats())
  };  
};

export default connect(mapStateToProps, mapDispatchToProps)(App);