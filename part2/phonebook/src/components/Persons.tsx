interface Props {
  persons: { name: string; number: string }[];
}
function Persons({ persons }: Props) {
  return (
    <div>
      {persons.map((person) => {
        return (
          <div key={person.name}>
            {person.name} {person.number}
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Persons;
