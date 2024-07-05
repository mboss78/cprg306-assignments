"use client";

import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);
    const [selectedMealId, setSelectedMealId] = useState(null);
    const [ingredients, setIngredients] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    };

    const fetchMealDetails = async (mealId) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const data = await response.json();
        return data.meals[0] || null;
    };

    const loadMealIdeas = async () => {
        if (ingredient) {
            const meals = await fetchMealIdeas(ingredient);
            setMeals(meals);
            setIngredients([]);  
        }
    };

    const handleMealClick = async (mealId) => {
        const meal = await fetchMealDetails(mealId);
        const ingredients = [];

        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
            }
        }

        setSelectedMealId(mealId);
        setIngredients(ingredients);
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2 className="text-2xl font-bold text-white">Meal Ideas</h2>
            <ul className="p-4">
                {meals.map(meal => (
                    <li
                        key={meal.idMeal}
                        className="p-4 mb-4 bg-blue-600 text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-700 flex items-center"
                        onClick={() => handleMealClick(meal.idMeal)}
                    >
                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className="w-16 h-16 rounded-lg mr-4"
                        />
                        <div>
                            <p className="font-semibold text-xl">{meal.strMeal}</p>
                            {selectedMealId === meal.idMeal && (
                                <ul className="mt-2 text-sm text-gray-200">
                                    {ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealIdeas;
