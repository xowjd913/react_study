import styled from "@emotion/styled";

const Container = styled.label`

`;

interface NumberLabelProps {
    data: number;
}

export const NumberLabel = (numberLabelProps: NumberLabelProps) => {
    return <Container>{numberLabelProps.data}</Container>;
};