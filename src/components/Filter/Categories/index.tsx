import React from "react";

type Props = {
  categories: string[];
  onChange: (category: string) => void;
};

function ListCategories({ categories = [], onChange }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select
      onChange={handleChange}
      className="text-slate-300 p-3 bg-slate-950 border-0"
    >
      {categories.map((category, item) => {
        return <option key={item}>{category}</option>;
      })}
    </select>
  );
}

export default ListCategories;
