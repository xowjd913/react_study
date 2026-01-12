import { useContext } from "react";
import { CountContext } from "../ContextExample/Context/CountContext";

export const CountLabel = () => {
    const { count } = useContext(CountContext);
    return <div>{count}</div>
};