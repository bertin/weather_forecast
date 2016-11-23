import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/index';     // Import the fetchWeather action creator.

// The SearchBar is a React CONTAINER, because it needs acces to the Redux state.
class SearchBar extends Component {
   constructor(props) {
      super(props);                                            // Allways call the super constructor first.
      this.state = { term: '', country: 'no'};                 // Initialize the component state (not the Redux state).

      this.onInputChange = this.onInputChange.bind(this);      // To make sure that the 'this' keyword inside the 'onInputChange'method is referring to the SearchBar component.
      this.onCountryChange = this.onCountryChange.bind(this);  // Same as above.
      this.onFormSubmit = this.onFormSubmit.bind(this);        // Same as above.
   }

   onInputChange(event) {
      this.setState( {term: event.target.value} );
   }

   onCountryChange(event) {
      this.setState( {country: event.target.value} );
   }

   onFormSubmit(event) {
      event.preventDefault();                                           // Prevent the form from performing a post submit.
      this.props.fetchWeather(this.state.term, this.state.country);     // Call the action creator to create an action.
      this.setState( {term: ''} );                                      // As a convenience to the users, empty the input's value.
   }

   render() {
      return (
         <form onSubmit={this.onFormSubmit} className="input-group">
            <span className="input-group-addon">
               <select
                  className="btn btn-secondary"
                  value={this.state.country}
                  onChange={this.onCountryChange}>
                   <option value="no">Norge</option>
                   <option value="us">USA</option>
                   <option value="kr">Sørkorea</option>
                   <option value="gb">England</option>
                   <option value="es">Spania</option>
               </select>
            </span>
            <input
               placeholder="Få et femdagersvarsel for en by i valgfritt land"
               className="form-control"
               value={this.state.term}
               onChange={this.onInputChange} />
            <span className="input-group-btn">
               <button type="submit" className="btn btn-secondary">Søk</button>
            </span>
         </form>
      );
   }

}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ fetchWeather }, dispatch );
}

// null as a first argument because we dont need the mapStateToProps in this case.
export default connect(null, mapDispatchToProps)(SearchBar);
