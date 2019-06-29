import React from 'react';
import Typography from '@material-ui/core/Typography';

const Note = ({ note }) => {
	return (
		<React.Fragment>
			<Typography align="center" variant="h4" gutterBottom>
				{note.title}
			</Typography>
			<Typography variant="subtitle1" gutterBottom>
				{note.description}
			</Typography>
		</React.Fragment>
	);
};

export default Note;
