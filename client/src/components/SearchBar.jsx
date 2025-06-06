import { useState } from "react";

export default function SearchBar ({onSearch}){
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSearch(userInput);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="search product"  value={userInput} onChange={(ev)=> setUserInput(ev.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}