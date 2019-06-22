import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const NotesList = (props) => {
    const { notes, deleteNote } = props;
    return (
        <List>
			{ notes.length ? (
                notes.map((note, index) => (
				<ListItem dense button key={index} >
                    <ListItemText 
                        primary={note.title}
                        secondary={note.description}
                    />
					<ListItemSecondaryAction>
						<IconButton onClick={() => deleteNote(index)}>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
            ))
            ) : (
                <Typography align='center' variant="subtitle1">
                    No notes yet...
                </Typography>
            )}
		</List>
    )
}

export default NotesList;