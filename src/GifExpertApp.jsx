import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  //Arreglo de todas las categorias con sus gifs que se mostraran en la pagina principal
  const [categories, setCategories] = useState(["One Punch"]);

  
  const onAddCategory = (newCategory) => {
    const exist = categories.some(
      (cat) => cat.toLocaleLowerCase() === newCategory.toLocaleLowerCase()
    );
      console.log('existe: ',exist)
    if (exist) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <div className="container">
      <h1>Gifs Perrones</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
