import { Part } from "./Part";

interface Props {
  content: { name: string; exercises: number; id: number }[];
}

export default function Content({ content }: Props) {
  //return rendered list of parts
  const contentList = content.map((part) => {
    return <Part key={part.id} name={part.name} exercises={part.exercises} />;
  });
  return <div>{contentList}</div>;
}
