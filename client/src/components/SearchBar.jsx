import { useState } from "react";

export default function SearchBar ({onSearch}){
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSearch(userInput);
  }

   const handleClear = () => {
    setUserInput('');
    onSearch('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="search product"  value={userInput} onChange={(ev)=> setUserInput(ev.target.value)} />
      <button type="submit">Search</button>
         {userInput && (
      <button type="button" onClick={handleClear}>
      clear
      </button>
    )}
    </form>

  );
}