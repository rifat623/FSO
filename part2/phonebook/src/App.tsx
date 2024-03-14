import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setPersons((prevPersons) => [...prevPersons, { name: newName }]);
    setNewName("");
  };

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => {
          return (
            <div key={person.name}>
              {person.name}
              <br />
            </div>
          );
        })}
      </div>
      ...
    </div>
  );
}

export default App;
