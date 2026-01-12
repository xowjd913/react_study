interface HelloProps {
  name: string;
  color?: string;
}

export const Hello = ({ name, color = "blue" }: HelloProps) => {
  return <div style={{ color }}>Hello {name}</div>;
};

export default Hello;
