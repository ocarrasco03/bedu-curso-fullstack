import React from 'react';
import axios from 'axios';
import './App.sass';

const apiKey = 'Ij3bLFgqaqeq5ZPeyCzmkGgEH55yONE3';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		};
	}

	componentDidMount() {
		axios
			.get(`http://api.giphy.com/v1/gifs/search?q=${gifSeatch}&api_key=${apiKey}`)
			.then((response) => {
				console.log(response);
				// this.setState({ title: response.data });
			})
			.catch((e) => console.log(`Unable to fetch data: ${e}`));
  }
  
  render() {
    return (
      <React.Fragment>
        <Grid container justify="center" spacing={2}></Grid>
      </React.Fragment>
    )
  }
}
export default App;
