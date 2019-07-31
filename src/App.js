import React, { Component } from 'react';
import './App.css';

const apiSections = [
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
    return result.title.toLowerCase().includes(userSearch.toLowerCase()) || !userSearch;
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: apiSections,
      userSearch: ''
    }
    this.scan = this.scan.bind(this);
  }
  scan(event) {
    this.setState({ userSearch: event.target.value })

  }
  render() {
    const { userSearch, sections } = this.state;
    return (
      <div className="App">
        <form>
          <input 
          type="text"
            onChange={this.scan}
            value={userSearch}
          />
        </form>
        {
          sections.filter(scanFor(userSearch)).map(section =>
            <div key={apiSections.id}>
              <h2>{section.location}{' | '}{section.title}</h2>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
