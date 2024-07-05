import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li
      onClick={() => onSelect(name)}
      className="p-4 mb-4 bg-blue-600 text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-700"
    >
      <p className="font-semibold text-xl">{name}</p>
      <p className="text-sm text-gray-200">Buy {quantity} in {category}</p>
    </li>
  );
};

export default Item;

