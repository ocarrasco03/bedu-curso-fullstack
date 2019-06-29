import React from 'react';
import { List, ListItem, ListItemSecondaryAction, ListItemText, Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';

const NotesList = (props) => {
	const { notes, deleteNote } = props;
	return (
		<List>
			{notes.length ? (
				notes.map((note, index) => (
					<ListItem dense button key={index} component={Link} to={`/view/${note.id}`}>
						<ListItemText primary={note.title} secondary={note.description} />
						<ListItemSecondaryAction>
							<IconButton onClick={() => deleteNote(note.id)}>
								<DeleteIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				))
			) : (
				<Typography align="center" variant="subtitle1">
					No notes yet...
				</Typography>
			)}
		</List>
	);
};

export default NotesList;
