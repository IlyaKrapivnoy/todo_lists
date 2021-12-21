import React, { useContext, useEffect, useState } from "react";
import Store from "../context";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Grid,
  Typography,
  Checkbox
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  todoText: {
    textDecoration: 'line-through'
  }
}));

const TodoList = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);

  const checkedTodos = todos => todos.filter((item) => item.checked);

  const [completedTodos, setCompletedTodos] = useState(checkedTodos(state.todos));

  useEffect(() => {
    setCompletedTodos(checkedTodos(state.todos))
  }, [state.todos])

  let count = completedTodos.length;
  let comment;
  if (count === 0) {
    comment = "So when you are free, start another work to get tired!";
  } else {
    comment = "";
  }

  return (
    <div>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Completed Todo List ({count})</Typography>
          <Typography>{comment}</Typography>
          <br />
          <div>
            <List>
              {completedTodos.map(todo => (
                <ListItem divider key={todo.id}>
                    <Checkbox
                      onChange={() => dispatch({ type: "TOGGLE_TODO_IS_COMPLETED", payload: todo.id })}
                      checked={todo.checked}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  <ListItemText primary={todo.text} className={classes.todoText} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => dispatch({ type: "DELETE", payload: todo })}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default TodoList;
