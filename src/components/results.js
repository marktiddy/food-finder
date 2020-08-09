import React, { useState } from 'react';
import { useQuery } from 'react-query';
import RestaurantCard from './restaurantCard';

const fetchApi = async (key, lat, lon) => {
  const res = await fetch(
    `https://developers.zomato.com/api/v2.1/geocode?lat=${lat.toFixed(
      2
    )}&lon=${lon.toFixed(2)}&limit=5`,
    {
      headers: {
        Accept: 'application/json',
        'User-Key': `${process.env.REACT_APP_API_KEY}`,
      },
    }
  );

  return res.json();
};

const Results = ({ searchTerm, lat, lon }) => {
  const { isLoading, error, data } = useQuery(
    ['foodQuery', lat, lon],
    fetchApi
  );

  if (isLoading) return <p className="loading">Loading...</p>;
  if (error) return 'An error has occurred: ' + error.message;
  return (
    <div className="results-area">
      <h1>Results for {data.location.title}</h1>

      <div className="results-card-container">
        {data.nearby_restaurants.map((m, i) => {
          if (searchTerm) {
            if (
              m.restaurant.cuisines
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return <RestaurantCard restaurant={m.restaurant} key={i} />;
            }
          } else {
            return <RestaurantCard restaurant={m.restaurant} key={i} />;
          }
        })}
      </div>
    </div>
  );
};

export default Results;
