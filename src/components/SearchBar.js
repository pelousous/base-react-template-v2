import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''}

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    
    render() {
        return (
            <div className="ui segment">
                <form class="ui form" onSubmit={this.onFormSubmit}>
                    <label>First Name</label>
                    <input type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value})} name="first-name" placeholder="First Name" />
                </form>
            </div>
        )
    }
}

export default SearchBar;