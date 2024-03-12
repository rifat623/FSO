import React from "react";

interface Props {
  name: string;
  num: number;
}

export const Part = ({ name, num }: Props) => {
  return (
    <div>
      Part {num}
      Name {name}
    </div>
  );
};
