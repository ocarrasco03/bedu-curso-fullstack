import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';

/**
 * ------------------------------------------------------
 *                  Components Types
 * ------------------------------------------------------
 * 1. Stateful Components
 *  - Class
 *  - State
 *  - Lifecycle methods
 * 
 * 2. Stateless Components (Functional Components)
 *  - Funtions
 *  - No state
 *  - No lifecycle methods
 * 
 */

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			todos: []
		};
	}

	updateValue = (event) => {
		this.setState({ value: event.target.value });
	};

	saveTodo = () => {
		this.setState({
			todos: [ ...this.state.todos, this.state.value ],
			value: ''
		});
	};

	render() {
		console.log(this.state);
		return (
			<React.Fragment>
				<Typography align="center" variant="h2" gutterBottom>
					To-Do App
				</Typography>
				<Grid container justify="center">
					<Grid item>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								this.saveTodo();
							}}
						>
							<TextField
								label="Add Task"
								type="search"
								margin="normal"
								onChange={this.updateValue}
								value={this.state.value}
							/>
						</form>
					</Grid>
				</Grid>
				<Grid container justify="center">
					<Grid item md={8}>
						<List>
							<ListItem dense button>
								<Checkbox />
								<ListItemText primary="Check the pre-work!" />
								<ListItemSecondaryAction>
									<IconButton>
										<DeleteIcon />
									</IconButton>
								</ListItemSecondaryAction>
							</ListItem>
						</List>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}

export default App;
