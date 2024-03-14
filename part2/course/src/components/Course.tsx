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
  return <div>Rifat</div>;
}

export default Course;
