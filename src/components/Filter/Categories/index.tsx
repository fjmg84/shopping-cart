import React from "react";
import styles from "./styles.module.scss";

type Props = {
  categories: string[];
  onChange: (category: string) => void;
};

function ListCategories({ categories = [], onChange }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.select}>
      <select onChange={handleChange}>
        {categories.map((category, item) => {
          return <option key={item}>{category}</option>;
        })}
      </select>
    </div>
  );
}

export default ListCategories;
