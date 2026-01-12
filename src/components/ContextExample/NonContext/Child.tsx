import { GrandChild } from "../NonContext/GrandChild";

interface Props {
  value: string;
}

export const Child = ({ value }: Props) => {
  return <GrandChild value={value}></GrandChild>;
};
