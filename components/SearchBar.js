'use client' 

import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query); // Passer la requête de recherche à la fonction onSearch
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Rechercher un film..."
        className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-lg">
        Rechercher
      </button>
    </form>
  );
}