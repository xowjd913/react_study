import { TodoProvider } from "../../components/ContextExample/Context/TodoContext";
import { TodoForm } from "../../components/ContextExample/TodoForm";

export const Context2 = () => {
    return(
        <TodoProvider>
            <TodoForm/>
        </TodoProvider>
    );
};