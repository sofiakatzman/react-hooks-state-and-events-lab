import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart , setInCart] = useState(false)
  const itemClass = inCart ? "in-cart" : ""

  function handleClick(){
    setInCart(!inCart)
  }


  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {handleClick}> {inCart ? "Remove From Cart" : "Add To Cart"  }</button>
    </li>
  );
}

export default Item;
