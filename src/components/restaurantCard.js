import React from 'react';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="result-card">
      <h2>{restaurant.name}</h2>
      <p>{restaurant.location.address}</p>
      <p>Cuisine: {restaurant.cuisines}</p>
      <p className="result-card-price">
        Average Price for Two: £{restaurant.average_cost_for_two}
      </p>
      <a href={restaurant.url} target="_blank">
        Find Out More
      </a>
    </div>
  );
};

export default RestaurantCard;
