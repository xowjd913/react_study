import React from "react";

import { CountProvider } from "../../components/ContextExample/Context/CountContext";
import { CountLabel } from "../../components/Label/CountLabel";
import { PlusButton } from "../../components/Button/PlusButton";

export const ContextExample = () => {
    return (
        <CountProvider>
            <CountLabel/>
            <PlusButton/>
        </CountProvider>
    );
};