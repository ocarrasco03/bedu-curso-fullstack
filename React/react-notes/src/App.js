import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NotesForm from './NotesForm';
import NotesList from './NotesList';
import { Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      notes: [],
      title: '',
    }
  }

  updateState = field => event => {
    this.setState({
      [field]: event.target.value
    });
  }

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
  
  render () {
    console.log(this.state);
    return ( 
      <React.Fragment>
        <Typography align="center" variant="h2" gutterBottom>My Notes</Typography>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={8}>
            <NotesForm 
              title={this.state.title}
              description={this.state.description}
              updateState={this.updateState}
              saveNote={this.saveNote}
            />
          </Grid>
          <Grid item xs={8}>
            <NotesList 
              notes={this.state.notes}
              deleteNote={this.deleteNote}
              />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
