import React from "react";

const Store = React.createContext({
  todos: [
    { id: 1, text: 'Learn HTML and CSS', checked: false },
    { id: 2, text: 'Learn JavaScript(ES6+)', checked: false },
    { id: 3, text: 'Design with Figma', checked: false },
    { id: 4, text: "Develop applications with 'React' and 'Material-UI", checked: false },
  ],
  myTheme: "light"
});

export default Store;
