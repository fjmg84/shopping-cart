import { ProductState } from "../../type/products";
import Filters from "../Filter";

export default function HeaderDetails({
  listProducts,
}: {
  listProducts: ProductState[];
}) {
  return (
    <>
      <Filters />
      <div className="text-slate-600 flex items-center gap-2">
        <p>products:</p>
        <span className="bg-slate-600 text-white flex items-center justify-center w-10 h-10 rounded-full">
          {listProducts.length}
        </span>
      </div>
    </>
  );
}
