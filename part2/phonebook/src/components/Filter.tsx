import { useState } from "react";

interface Props {
  persons: { name: string; number: string }[];
}

function Filter({ persons }: Props) {
  const [filter, setFilter] = useState("");

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFilter(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      Filter shown with: <input onChange={handleFilter} value={filter} />
      {filteredPersons.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
}

export default Filter;
