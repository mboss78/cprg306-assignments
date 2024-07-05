"use client";

import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: Math.random().toString(36).substr(2, 9),
            name,
            quantity,
            category
        };
        onAddItem(newItem);
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (
        <form onSubmit={handleSubmit} className="form-container space-y-4">
            <div className="flex flex-col">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="input"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="quantity" className="form-label">Quantity:</label>
                <input
                    id="quantity"
                    type="number"
                    min="1"
                    max="99"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    required
                    className="input"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="category" className="form-label">Category:</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="input"
                >
                    <option value="produce">produce</option>
                    <option value="dairy">dairy</option>
                    <option value="bakery">bakery</option>
                    <option value="meat">meat</option>
                    <option value="frozen-foods">frozen foods</option>
                    <option value="canned-goods">canned goods</option>
                    <option value="dry-goods">dry goods</option>
                    <option value="beverages">beverages</option>
                    <option value="snacks">snacks</option>
                    <option value="household">household</option>
                    <option value="other">other</option>
                </select>
            </div>
            <button type="submit" className="submit-btn">Add Item</button>
        </form>
    );
};

export default NewItem;
