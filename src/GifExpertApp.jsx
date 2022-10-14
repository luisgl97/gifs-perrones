import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    const exist = categories.some(
      (cat) => cat.toLocaleLowerCase() === newCategory.toLocaleLowerCase()
    );

    if (exist) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <div className="container">
      
        <h1>Gifs Perrones</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {/* Listado de Gif */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif Item */}
    </div>
  );
};
