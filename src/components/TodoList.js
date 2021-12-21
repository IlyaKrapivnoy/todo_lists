import React, { useState, useContext, useEffect } from "react";
import Store from "../context";
import {
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography,
  Checkbox
} from "@material-ui/core";

const TodoList = () => {
  const { state, dispatch } = useContext(Store);

  const filterTodos = todos => todos.filter((item) => !item.checked);

  const [currentTodos, setCurrentTodos] = useState(filterTodos(state.todos));

  useEffect(() => {
      setCurrentTodos(filterTodos(state.todos));
  }, [state.todos]);

  let count = currentTodos.length;
  let comment;
  if (count === 0) {
      comment = 'So when you are free, start another work to get tired!';
  } else {
      comment = '';
  }

  return (
      <div>
          <br />
          <br />
          <Grid container spacing={2}>
              <Grid item xs={12}>
                  <Typography variant='h6'>Todo List ({count})</Typography>
                  <Typography>{comment}</Typography>
                  <br />
                  <div>
                      <List>
                          {currentTodos.map((todo, id) => (
                              <ListItem divider key={todo.id}>
                                  <Checkbox
                                      onChange={() =>
                                          dispatch({
                                              type: 'TOGGLE_TODO_IS_COMPLETED',
                                              payload: todo.id,
                                          })
                                      }
                                      checked={todo.checked}
                                      inputProps={{
                                          'aria-label': 'primary checkbox',
                                      }}
                                  />
                                  <ListItemText primary={todo.text} />
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
