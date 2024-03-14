import Content from "./Content";
import Header from "./Header";

interface Props {
  course: {
    id: number;
    name: string;
    parts: {
      name: string;
      exercises: number;
      id: number;
    }[];
  };
}

function Course({ course }: Props) {
  const total = course.parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <div>
      <Header name={course.name} />
      <Content content={course.parts} />
      <br />
      <strong>Total of {total} exercises</strong>
    </div>
  );
}

export default Course;
