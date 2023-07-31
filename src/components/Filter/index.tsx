import { changePrice, selectCategory } from "../../redux/slices/filtersSlice";
import { useAppDispatch, useAppSelector } from "../../redux/stores/hooks";
import ListCategories from "./Categories";
import FilterPrices from "./Prices";

function Filters() {
  const { categories } = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const handleSelectCategory = (category: string) => {
    dispatch(selectCategory(category));
  };

  const handleMinorToMajorPrice = () => {
    dispatch(changePrice("<"));
  };

  const handleMajorToMinorPrice = () => {
    dispatch(changePrice(">"));
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
