import React, { useContext } from "react";
import Store from "../context";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Grid,
  Typography
} from "@material-ui/core";

const TodoList = () => {
  const { state, dispatch } = useContext(Store);

  let count = state.todos.length;
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
              {state.todos.map(todo => (
                <ListItem divider key={todo.id}>
                  <ListItemText primary={todo.text} />
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
