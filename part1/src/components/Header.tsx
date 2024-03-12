import React from "react";

interface Props {
  course: string;
}

const Header = ({ course }: Props) => {
  return <h1> {course}</h1>;
};

export default Header;
