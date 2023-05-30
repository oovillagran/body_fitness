import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from './fetchData';

const SearchExercises = () => {
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      console.log(exercisesData);
    }

  }

  return (
    <div className="flex-column search-section">
      <p className="search-text">
        Awesome Exercises You <br /> Should Know
      </p>
      <div className="search-input">
        <input 
        className="input"
        value={search}
        type="text"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercises" />
        <button type="button" className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchExercises;
