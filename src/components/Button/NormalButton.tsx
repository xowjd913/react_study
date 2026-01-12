import styled from "@emotion/styled";

const Container = styled.button`

`;

interface NormalButtonProps {
    label: string;
    onClick: () => void;
}

export const NormalButton = (normalButtonProps: NormalButtonProps) => {
    return <Container onClick={normalButtonProps.onClick}>{normalButtonProps.label}</Container>
};