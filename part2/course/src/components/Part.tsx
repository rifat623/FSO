interface Props {
  name: string;
  exercises: number;
}

export const Part = ({ name, exercises }: Props) => {
  return (
    <div>
      <br />
      {name} {exercises}
    </div>
  );
};
