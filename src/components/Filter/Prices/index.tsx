type Props = {
  minorToMajor: () => void;
  majorToMinor: () => void;
};

function FilterPrices({ minorToMajor, majorToMinor }: Props) {
  return (
    <fieldset className="text-slate-600 flex gap-5">
      Sort by prices
      <label className="flex gap-2 items-center">
        <input
          type="radio"
          name="orderProduct"
          id="minor_to_major"
          onClick={minorToMajor}
        />
        <i className="fa fa-arrow-up"></i>
      </label>
      <label className="flex gap-2 items-center">
        <input
          type="radio"
          name="orderProduct"
          id="major_to_minor"
          onClick={majorToMinor}
        />
        <i className="fa fa-arrow-down"></i>
      </label>
    </fieldset>
  );
}

export default FilterPrices;
