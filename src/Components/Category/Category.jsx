import React from "react";
import { CategoryInfos } from "../Category/CategoryFullInfos.js";
import CategoryCard from "./CategoryCard.jsx"; // Ensure the correct path to CategoryCard
import classes from "../Category/category.module.css";

function Category() {
  return (
    <section className={classes.category__container}>
      {CategoryInfos.map((infos) => (
        <CategoryCard key={infos.name} data={infos} />
      ))}
    </section>
  );
}

export default Category;
