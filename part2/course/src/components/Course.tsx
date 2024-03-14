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
  return (
    <div>
      <Header name={course.name} />
      <Content content={course.parts} />
    </div>
  );
}

export default Course;
