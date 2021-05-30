<<<<<<< HEAD
import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div>
      <div>&nbsp;</div>
      <div className="search-bar ui segment">
        <form onSubmit={onSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={term}
              onChange={(event) => setTerm(event.target.value)}
            />
          </div>
        </form>
      </div>
      <div>&nbsp;</div>
    </div>
  );
};

export default SearchBar;
=======
import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        // TODO: Make sure we call callback from parent component
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
>>>>>>> 401972057bad319c0137ae439f007d2983ba2daf
