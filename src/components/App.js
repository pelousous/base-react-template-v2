import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {'photos': []}

    async onFormSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                'query' : term
            },
            headers: {
                'Authorization': 'Client-ID UjafG9oraAJTUN7GGW1bx9t_ajlnJGAXqW52O-zYENo'
            }
        });

        this.setState({'photos': response.data.results})
    }

    render() {
        return ( 
            <div class="ui container" style={{marginTop: 10}}>
                <SearchBar onSubmit={(term) => this.onFormSubmit(term)} />

                {this.state.photos.map((photo) => {
                    return <img src={photo.urls.regular}  />
                })}
            </div>
        )
    }
}

export default App;