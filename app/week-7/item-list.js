"use client";

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
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
                    <Item 
                      key={item.id} 
                      name={item.name} 
                      quantity={item.quantity} 
                      category={item.category} 
                      onSelect={onItemSelect}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;

