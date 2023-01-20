import React, {useState} from "react";


function CategoryFilter({categories, handleCategory})
 {

  const [isActive, setIsActive]=useState(false)

function handleClick(event){
  event.currentTarget.className="selected"
  handleCategory(event.target.innerHTML)

}




  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((cat)=>
      <button
      className={isActive?"selected":null}
      onClick={handleClick}
      key={cat}  >{cat}</button>
      )}
    </div>
  );
}

export default CategoryFilter;
