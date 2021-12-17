import React, { useState, useContext } from "react";
import Store from "../context";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Grid,
  Typography,
  Checkbox
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

const [checked, setChecked] = useState([]);

const handleCheckboxChange = (id) => {
    if (checked.includes(id)) {
        setChecked(checked => checked.filter(c => c !== c))
    } else {
        setChecked(checked => [...checked, id])
    }
}

  return (
    <div>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Todo List ({count})</Typography>
          <Typography>{comment}</Typography>
          <br />
          <div>
            <List>
              {state.todos.map((todo, id) => (
                <ListItem divider key={todo.id}>
                  <ListItemText primary={todo.text} />
                  <ListItemSecondaryAction>
                  <Checkbox
                    onChange={() => handleCheckboxChange(id)}
                    checked={checked.includes(id)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
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
