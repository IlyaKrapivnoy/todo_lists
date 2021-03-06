import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";

// Add components
import NavBar from "./components/NavBar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CompletedTodoList from "./components/CompletedTodoList";

//Add context, reducer and usePersist(LocalStorage)
import Store from "./context";
import reducer from "./reducer";
import { usePersistedContext, usePersistedReducer } from "./usePersist";

// Metarial-UI Theme(Dark or Light)
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme, CssBaseline, Container } from "@material-ui/core";

const App = () => {
  const globalStore = usePersistedContext(useContext(Store), "state");

  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state"
  );

  const theme = createTheme({
    palette: {
      type: state.myTheme // "light" or "dark"
    }
  });

  return (
    <Container>
      <Store.Provider value={{ state, dispatch }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <TodoForm />
          <TodoList />
          <CompletedTodoList />
        </ThemeProvider>
      </Store.Provider>
    </Container>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
