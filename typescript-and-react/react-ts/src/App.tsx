import Todos from "./components/Todos";
import NewTodoItem from "./components/NewTodoItem";

import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <Todos />
      <NewTodoItem />
    </TodosContextProvider>
  );
}

export default App;