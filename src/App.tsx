import React from 'react';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div>
            <h1> Users</h1>
            <UserList/>
            <h1>Todos</h1>
            <TodoList/>
        </div>
    );
}

export default App;
