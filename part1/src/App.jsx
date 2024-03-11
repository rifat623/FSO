import { Part } from "./components/Part";

const course = "Half Stack application development";
const part1 = "Fundamentals of React";
const exercises1 = 10;
const part2 = "Using props to pass data";
const exercises2 = 7;
const part3 = "State of a component";
const exercises3 = 14;

const Header = () => {
  return <h1>{course}</h1>;
};

const Content = () => {
  <div>
    <Part name={part1} num={exercises1} />
    <Part name={part2} num={exercises2} />
    <Part name={part3} num={exercises3} />
  </div>;
};
const Total = () => {
  <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};

const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  );
};

export default App;
