"use client";
import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="p-4">
        <button
          onClick={() => setSortBy('name')}
          className={`p-2 m-2 ${sortBy === 'name' ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`p-2 m-2 ${sortBy === 'category' ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}
        >
          Sort by Category
        </button>
      </div>
      <ul className="p-4">
        {sortedItems.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
