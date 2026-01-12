import styled from '@emotion/styled';

interface HelloProps {
  name: string;
  color: string;
}

interface ContainerProps {
  color: string;
}

const Container = styled.div<ContainerProps>`
  color: ${(props) => props.color};
`;

export const Hello = ({ name, color }: HelloProps) => {
  return <Container color={color}>Hello {name}</Container>;
};
