import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ListItemSecondaryAction } from '@mui/material';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

const Todo = ({id, task, completed, removeTodo, toggleTodo, editTodo}) => {
    const [isEditing, toggle] = useToggleState(false);
    return (
        <div>
            <ListItem>
                {isEditing ? 
                    <EditTodoForm 
                        editTodo={editTodo} 
                        id={id} 
                        task={task} 
                        toggleEditForm={toggle}
                    /> : 
                    <>
                        <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
                        <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>{task}</ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton aria-label="Edit" onClick={toggle}>
                                <EditIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </>
                }
            </ListItem>
        </div>
    )
}

export default Todo;
