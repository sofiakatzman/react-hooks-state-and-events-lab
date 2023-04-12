import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState(true)

  function handleChange(selectedCategory) {
    const newItems = items.filter((item) => item.category === category )
    handleDisplay()
  }

  function handleDisplay(){
    const newItems = getNewItems()
    console.log("newDisplay : " + newItems)





  }


  // function handleLiClick(id) {
  //   const newFoodArray = foods.filter((food) => food.id !== id);
  //   setFoods(newFoodArray);
  // }
  
  // [1, 2, 3].filter((number) => number !== 3);


  function getNewItems(category){
    items.filter(item => item.category === category)
    console.log("getNewItem : " + category)

  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange = {()=> handleChange(category)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
