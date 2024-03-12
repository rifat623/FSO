import { Part } from "./components/Part";
import Header from "./components/Header";
import React from "react";

export interface ContentProps {
  parts: { name: string; exercises: number }[];
}

export interface Part {
  name: string;
  exercises: number;
}

const course = {
  name: "Halff Stack application development",
  parts: [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ],
};

const Content = ({}: ContentProps) => {
  <div>
    <Part name={course.parts[0].name} num={course.parts[0].exercises} />
    <Part name={course.parts[1].name} num={course.parts[1].exercises} />
    <Part name={course.parts[2].name} num={course.parts[2].exercises} />
  </div>;
};

const Total = () => {
  <p>
    Number of exercises{" "}
    {course.parts[0].exercises +
      course.parts[1].exercises +
      course.parts[2].exercises}
  </p>;
};

const App = () => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      {/* <Total parts={course.parts} /> */}
    </div>
  );
};

export default App;
