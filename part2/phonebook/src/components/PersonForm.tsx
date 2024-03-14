import { useState } from "react";

interface Props {
  persons: { name: string; number: string }[];
  setPersons: React.Dispatch<
    React.SetStateAction<{ name: string; number: string }[]>
  >;
}

function PersonForm({ persons, setPersons }: Props) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  // const [persons, setPersons] = useState([
  //   { name: "Arto Hellas", number: "040-44-532523" },
  // ]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewName(event.target.value);
  };
  const handleNumber = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phone book`);
    } else {
      setPersons((prevPersons) => [
        ...prevPersons,
        { name: newName, number: newNumber },
      ]);
      setNewName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input onChange={handleChange} value={newName} />
      </div>
      <div>
        number: <input onChange={handleNumber} value={newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;
