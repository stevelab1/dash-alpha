import React from 'react';

const Card = ({ data }) => {
  return (
    <div>
      <ul>
        {data.results.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
