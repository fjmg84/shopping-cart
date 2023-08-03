import useStateFilters from "../../hooks/useStateFilters";
import ListCategories from "./Categories";
import FilterPrices from "./Prices";

function Filters() {
  const { categories, categorySelect, filterByPrice } = useStateFilters();

  const handleSelectCategory = (category: string) => {
    categorySelect(category);
  };

  const handleMinorToMajorPrice = () => {
    filterByPrice("<");
  };

  const handleMajorToMinorPrice = () => {
    filterByPrice(">");
  };

  return (
    <>
      <ListCategories
        categories={categories.list}
        onChange={handleSelectCategory}
      />
      <FilterPrices
        minorToMajor={handleMinorToMajorPrice}
        majorToMinor={handleMajorToMinorPrice}
      />
    </>
  );
}

export default Filters;
