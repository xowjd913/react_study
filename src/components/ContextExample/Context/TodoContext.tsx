import { createContext, useState, type JSX } from "react";

type TodoListItemType = {
    no: number;
    todo: string;
    done: boolean;
};

type TodoListContextValueType = {
  state: { 
    todoList: Array<TodoListItemType> 
};
  actions: {
    addTodo: (todo: string) => void;
    deleteTodo: (no: number) => void;
    toggleDone: (no: number) => void;
  };  
};

const TodoContext = createContext<TodoListContextValueType | undefined>(
    undefined
); 

interface Props {
    children: JSX.Element | JSX.Element[];
};

export const TodoProvider = (props: Props) => {
    const [todoList, setTodoList] = useState<Array<TodoListItemType>>([
        { no: 1, todo: 'upload movie', done: false },
        { no: 2, todo: 'react typescript', done: false },
        { no: 3, todo: 'edit movie', done: true },
        { no: 4, todo: 'study context', done: false },
    ]);

    const addTodo = (todo: string) => {
        setTodoList([
            ...todoList,
            { no: new Date().getTime(), todo: todo, done: false },
        ]);
    };

    const deleteTodo = (no: number) => {
        const filteredItemTypes = todoList.filter((item: TodoListItemType) => item.no !== no);
        setTodoList(filteredItemTypes);
    };

    const toggleDone = (no: number) => {
        const newTodoList = todoList.map((item) => item.no === no ? { ...item, done: !item.done }:  item);
        setTodoList(newTodoList);
    };

    const values: TodoListContextValueType = {
        state: { todoList },
        actions: { addTodo, deleteTodo, toggleDone },
    };

    return (
        <TodoContext.Provider value={values}>{props.children}</TodoContext.Provider>
    );
};

export default TodoContext;
