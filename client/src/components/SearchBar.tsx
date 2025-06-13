import { useState } from "react";
import './SearchBar.css';

interface OnSearchBar  {
  onSearch: (arg: string) => void;
}

export default function SearchBar({onSearch}:OnSearchBar) {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    onSearch(userInput);
  }

   const handleClear = () => {
    setUserInput('');
    onSearch('');
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="search product"  value={userInput} onChange={(ev: React.ChangeEvent<HTMLInputElement>)=> setUserInput(ev.target.value)} />
      <button type="submit">Search</button>
         {userInput && (
      <button type="button" onClick={handleClear}>
      clear
      </button>
    )}
    </form>
  );
}