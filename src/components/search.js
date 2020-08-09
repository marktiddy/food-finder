import React, { useState, useEffect } from 'react';
import Results from './results';

const Search = () => {
  const [searchBox, setSearchBox] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [error, setError] = useState('');

  const loadPosition = (position) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(loadPosition);
    } else {
      setError('For this site to work you must have location services enabled');
    }
  }, []);

  return (
    <>
      <div className="search-area">
        <p>What sort of food do you want?</p>
        <input
          type="text"
          onChange={(e) => setSearchBox(e.target.value)}
          value={searchBox}
        />
        {error ? <div className="error">{error}</div> : null}
      </div>
      <Results searchTerm={searchBox} lat={lat} lon={lon} />
    </>
  );
};

export default Search;
