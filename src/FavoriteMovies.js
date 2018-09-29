import React, { Component } from 'react';

class FavoriteMovies extends Component {
	render() {
    	return (
        	<ol>
          		{this.props.profiles.map((profile) => {
          			const name = this.props.users[profile.userID].name;
      				const movie = this.props.movies[profile.favoriteMovieID].name;
          			
          			return (
                      <li key={profile.id}>
                        <p>{`${name}'s favorite movie is ${movie}.`}</p>
                      </li>
					)
    			})}
          	</ol>
        )
    }
}

export default FavoriteMovies