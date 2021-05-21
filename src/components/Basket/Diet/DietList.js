import React from 'react';
import DietCard from "./DietCard";
import {useDietState} from "./DietContext";

const DietList = () => {
  const diets = useDietState();
  return(
    <>
      {diets.map(diet =>(
        <DietCard
          id={diet.diet_id}
          date={diet.diet_date}
          memo={diet.diet_memo}
          food={diet.diet_food.map((n,_i)=>{return n+(_i<diet.diet_food.length-1?' ':'')})}
          ingredient_item={diet.diet_ingredient.map((n,_i)=>{return n+(_i<diet.diet_ingredient.length-1?' ':'')})}
        />
      ))}

    </>
  );
}
export default DietList;