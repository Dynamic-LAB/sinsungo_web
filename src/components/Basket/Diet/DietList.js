import React, {useEffect} from 'react';
import DietCard from "./DietCard";
import {useDietState} from "./DietContext";
import GetDietByRefrigratorId from "../../ForServer/GetDietByRefrigratorId"
import {fi} from 'date-fns/locale';

const DietList = () => {
  const diets = useDietState();
  //id, memo, food, date, ingredient_item
  return (
    <>
      {
       (diets[0]&&diets[0].id!=="nodata")?diets.map((diet,_i)=>
       {
        return(
        <DietCard
        diet={diet}
        id={diet.id}
        memo={diet.memo}
        date={diet.date}
        food={diet.menus.map((item,_i)=>{ if(item) return ((_i>0?",":"")+item); return ""})}
        ingredient_item={diet.ingredients.map((item,_i)=>{ if(item.id!=null){ return ((_i>0?",":"")+item.name)} return null})}
        />)
       }):<div>Empty</div>
      }


    </>
  );
}
export default DietList;