import React, { Component } from 'react';
import './App.css';
import AutoCompleteText from './AutoCompleteText';

export const apiSections = [
  {
    id: 1,
    title: 'First Section',
    location: '#1A'
  },
  {
    id: 2,
    title: 'Second Section',
    location: '#1B'
  },
  {
    id: 3,
    title: 'Third Section',
    location: '#1C'
  },
  {
    id: 4,
    title: 'Last Section',
    location: '#2A'
  }
]

function scanFor(userSearch) {
  return function (result) {
    return result.location.toLowerCase().includes(userSearch.toLowerCase()) || result.title.toLowerCase().includes(userSearch.toLowerCase()) || !userSearch;
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: apiSections,
      userSearch: '',
      suggestions: []
    }
    this.scan = this.scan.bind(this);
  }

  scan(event) {
    this.setState({ userSearch: event.target.value })
  }

  onTextChange = (event) => {
    const value = event.target.value;
    let suggestions = [];
    console.log("value", value)

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      console.log("foijwef", this.state.sections)
      suggestions = this.state.sections.sort().filter(v => regex.test(v.title));
      console.log("fwef", suggestions)
    }
   
    this.setState(() => ({ suggestions }));
  }

  changeCalls = (event) => {
    this.scan(event)
    this.onTextChange(event)
  }

  displaySuggestions(){
    const { suggestions } = this.state;
    console.log(suggestions);
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
         {suggestions.map((suggestion) => (<li key = {suggestion.id}>{suggestion.title}</li>))}
      </ul>
    );
  }

  render() {
    const { userSearch, sections } = this.state;
    return (
      <div className="App">
        <form>
          <input
            type="text"
            onChange={this.changeCalls}
            value={userSearch}
          />
        </form>
        <div>
          {
            sections.filter(scanFor(userSearch)).map(section =>

              <h2 key={section.id}>{section.location}{' - '}{section.title}</h2>

            )
          }
        </div>
        {this.displaySuggestions()}
      </div>
    );
  }
}

export default App;

