import React, { useEffect } from "react";
import { useState } from "react";

interface StatisticProps {
  all: number;
  average: number;
  positive: number;
  good: number;
  neutral: number;
  bad: number;
}
interface StatisticLineProps {
  text: string;
  value: number;
}

const Statistics = ({
  all,
  average,
  positive,
  good,
  neutral,
  bad,
}: StatisticProps) => {
  return (
    <div>
      {all > 0 ? (
        <div>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </div>
      ) : (
        <h4>No feedback given</h4>
      )}
    </div>
  );
};

const Button = ({
  handleClick,
  text,
}: {
  handleClick: () => void;
  text: string;
}) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }: StatisticLineProps) => {
  return (
    <div>
      <h4>
        {text}: {value}
      </h4>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setAll(good + neutral + bad);
  }, [good, neutral, bad]);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>Statistics</h1>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        all={all}
        average={score / all}
        positive={good / all}
      />
    </div>
  );
};

export default App;
