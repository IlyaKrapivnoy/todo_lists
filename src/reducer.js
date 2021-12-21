const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (!action.payload) {
        return state;
      }
      const myArr = state.todos.map((item) => {
        return item.text;
      });
      if (myArr.includes(action.payload)) {
          return state;
      }
      const uniqId = Math.floor(Math.random() * 1000) + 1;
      return {
        ...state,
        todos: [...state.todos, {
          id: uniqId,
          text: action.payload,
          checked: false
        }]
      };
    case "DELETE":
      return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "THEME":
      return {
        ...state,
        myTheme: action.payload
      };
    case "TOGGLE_TODO_IS_COMPLETED":
      return {
        ...state,
        todos: state.todos.map((item) => { 
          if(item.id === action.payload) {
            item.checked = !item.checked
          }
          return item;
         }),
      }
    default:
      return state;
  }
};
export default reducer;
