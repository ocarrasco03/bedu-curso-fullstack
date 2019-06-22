import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Fab } from '@material-ui/core';
import { Link, Route } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import NotesForm from './NotesForm';
import NotesList from './NotesList';
import Home from './Home';
import Note from './Note';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			description: '',
			notes: [],
			title: ''
		};
	}

	updateState = (field) => (event) => {
		this.setState({
			[field]: event.target.value
		});
	};

	saveNote = () => {
		if (this.state.title && this.state.description) {
			this.setState({
				description: '',
				notes: [
					...this.state.notes,
					{
						id: Date.now(),
						title: this.state.title,
						description: this.state.description
					}
				],
				title: ''
			});
		}
	};

	deleteNote = (index) => {
		this.setState({
			notes: this.state.notes.filter((_, i) => i !== index)
		});
	};

	render() {
		console.log(this.state);
		return (
			<React.Fragment>
				<Typography align="center" variant="h2" gutterBottom>
					My Notes
				</Typography>
				<Grid container justify="center" spacing={2}>
					<Grid item xs={8}>
						<Route exact path="/" component={Home} />
						<Route
							path="/new"
							render={() => (
								<NotesForm
									title={this.state.title}
									description={this.state.description}
									updateState={this.updateState}
									saveNote={this.saveNote}
								/>
							)}
						/>
            <Route path='/view/:id' render={props => <Note {...props} notes={this.state.notes} />} />
					</Grid>
					<Grid item xs={8}>
            <NotesList notes={this.state.notes} deleteNote={this.deleteNote} />
					</Grid>
				</Grid>
				<Fab color="primary" component={Link} to={'/new'} size="small">
					<AddIcon />
				</Fab>
			</React.Fragment>
		);
	}
}

export default App;
