import React, { useState } from 'react';
import { useQuery } from 'react-query';

const Results = ({ searchTerm, lat, lon }) => {
  const { isLoading, error, data } = useQuery('foodData', async () => {});

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occured: ' + error.message;

  return (
    <div className="results-area">
      <h1>Results</h1>
    </div>
  );
};

export default Results;
