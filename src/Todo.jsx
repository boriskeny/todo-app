import React from 'react'
import './Todo.css'
import {List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core'


function Todo({text}) {
    return (
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary="Todo...⏱⏰" secondary={text}/>
            </ListItem>
        </List>
    )
}

export default Todo